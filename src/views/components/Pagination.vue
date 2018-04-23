<template>
<div class="pagination-box">
    <div class="pagination-wrap" v-cloak v-if="totalPage!=0">
        <ul class="pagination">
            <li :class="currentPage==1?'disabled':''"><a href="javascript:;" @click="turnToPage(1)">首页</a></li>
            <li :class="currentPage==1?'disabled':''"><a @click="turnToPage(currentPage-1)" href="javascript:;">上一页</a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage-3)" v-text="currentPage-3" v-if="currentPage-3>0"></a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage-2)" v-text="currentPage-2" v-if="currentPage-2>0"></a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage-1)" v-text="currentPage-1" v-if="currentPage-1>0"></a></li>
            <li class="active"><a href="javascript:;" @click="turnToPage(currentPage)" v-text="currentPage">3</a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage+1)" v-text="currentPage+1" v-if="currentPage+1<totalPage"></a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage+2)" v-text="currentPage+2" v-if="currentPage+2<totalPage"></a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage+3)" v-text="currentPage+3" v-if="currentPage+3<totalPage"></a></li>
            <li :class="currentPage==totalPage?'disabled':''"><a href="javascript:;" @click="turnToPage(currentPage+1)" >下一页</a></li>
            <li :class="currentPage==totalPage?'disabled':''"><a href="javascript:;" @click="turnToPage(totalPage)">尾页</a></li>
        </ul>
        <div class="go">
            <div :class="isPageNumberError?'input-group error':'input-group'">
                <span>转到</span><input class="form-control" type="text" v-model="goToPage" v-on:blur="turnToPage(goToPage)" style="width: 50%;"><span>页</span>
            </div>
        </div>
        <small class="small nowrap">
            <!--当前第 <span class="text-primary" v-text="currentPage"></span> 页，-->
            共 <span class="text-primary" v-text="totalPage"></span> 页</small>
        <select class="form-control pagesize" v-model="myPageSize" @change="changePageSize">
            <option>10</option>
            <option>20</option>
            <option>30</option>
        </select>
        <span class="small nowrap" style="margin-right: 5px;">条/页</span>
        <small class="small nowrap">共 <span class="text-primary" v-text="totalCount"></span> 条</small>

    </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: {
        // 传入总页数，默认100
    totalPage: {
      type: Number,
      default: 1,
      required: true,
      validator (value) {
        return value >= 0
      }
    },
    totalCount: {
      type: Number,
      default: 1,
      required: true,
      validator (value) {
           return value >= 0
      }
    },
    pageSize: {
          type: Number,
          default: 10,
          required: true,
          validator (value) {
              return value >= 0
          }
    },

        // 传入当前页，默认1
    currentPage: {
      type: Number,
      default: 1,
      validator (value) {
        return value >= 0
      }
    },

        // 传入页面改变时的回调，用于更新你的数据
        // 回调默认是打印当前页
        // 请根据需要在传入的回调函数里更改函数体
    changeCallback: {
      type: Function,
      default (cPage,pageSize) {
        console.log('默认回调，显示页码：' + cPage)
      }
    }
  },
  data () {
    return {
      myPageSize:this.pageSize || 10,
      myCurrentPage: 1,
      goToPage: this.currentPage || 1,
      isPageNumberError: false
    }
  },
  computed: {
    // prop不应该在组件内部做改变
    // 所以我们这里设置一个内部计算属性myCurrentPage来代替props中的currentPage
    // 为什么要这么做？参考：https://cn.vuejs.org/v2/guide/components.html#单向数据流
//    currentPage () {
//      return this.myCurrentPage
//    }
  },
  methods: {
    changePageSize(e){
          var ts = this;
          var pageSize = parseInt(e.target.value)
          ts.myPageSize = pageSize
          ts.changeCallback(ts.currentPage,pageSize)
      },
    // turnToPage为跳转到某页
    // 传入参数pageNum为要跳转的页数
    turnToPage (pageNum) {
      var ts = this
      pageNum = parseInt(pageNum)
      // 页数不合法则退出
      if (!pageNum || pageNum > ts.totalPage || pageNum < 1) {
        console.log('页码输入有误！')
        ts.isPageNumberError = true
        return false
      } else {
        ts.isPageNumberError = false
      }
      // 更新当前页
      ts.myCurrentPage = pageNum
      ts.goToPage = pageNum
      // 页数变化时的回调
      ts.changeCallback(pageNum,ts.pageSize)
    }
  }
}
</script>

<style type="text/css">
.pagination-wrap{
	margin: 0 auto;
	text-align: center;
}
.pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
}
.small {
    position: relative;
    top: -32px;
}
.nowrap {
    white-space: nowrap;
}
.input-group {
    position: relative;
    display: table;
    border-collapse: separate;
}
.input-group-addon {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 0 4px 4px 0;
}

.input-group-addon, .input-group-btn {
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;
}
.input-group-addon, .input-group-btn, .input-group .form-control {
	box-sizing: border-box;
    display: table-cell;
}
.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child>.btn, .input-group-btn:first-child>.btn-group>.btn, .input-group-btn:first-child>.dropdown-toggle, .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle), .input-group-btn:last-child>.btn-group:not(:last-child)>.btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.input-group-addon, .input-group-btn, .input-group .form-control {
    display: table-cell;
}
.input-group .form-control {
    position: relative;
    z-index: 2;
    margin: 0 10px;
  text-align: center;
}
.go .error .form-control{
    border: 1px solid #d95656;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.text-primary {
    color: #428bca;
}
.pagination>li:first-child>a, .pagination>li:first-child>span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.go {
    display: inline-block;
    max-width: 140px;
    top: -21px;
    position: relative;
}
.input-group-addon:last-child {
	display: table-cell;
	text-decoration: none;
    border-left: 0;
}
.pagination>.disabled>span, .pagination>.disabled>span:hover, .pagination>.disabled>span:focus, .pagination>.disabled>a, .pagination>.disabled>a:hover, .pagination>.disabled>a:focus {
    color: #777!important;
    cursor: not-allowed;
    background-color: #fff!important;
    border-color: #ddd!important;
}
.pagination>li:last-child>a, .pagination>li:last-child>span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.pagination>.active>a, .pagination>.active>span, .pagination>.active>a:hover, .pagination>.active>span:hover, .pagination>.active>a:focus, .pagination>.active>span:focus {
    z-index: 2;
    color: #fff!important;
    cursor: default;
    background-color: #428bca;
    border-color: #428bca;
}
.pagination>li>a, .pagination>li>span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #428bca;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
}
.pagination>li {
    display: inline;
}
.pagesize{
    width: 6%;
    display: inline-block;
    max-width: 140px;
    top: -35px;
    position: relative;
    margin: 0 10px;
}
</style>
