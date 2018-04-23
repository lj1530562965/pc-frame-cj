
import lazyLoading from './lazyLoading'
export default (routers,data) => {
  generaMenu(routers,data)
}
function generaMenu(routers,data){
  data.forEach(function(item){
    let menu = Object.assign({},item);
    if(typeof(menu.component)==='string'){
        menu.component = lazyLoading(menu.component)
    }
    if(item.children){
      menu.children = []
      generaMenu(menu.children,item.children)
    }
    routers.push(menu)
  })
}