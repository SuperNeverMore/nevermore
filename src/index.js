import './less/main.less';
import ko from 'knockout';
import TestButton from './components/button/button';
import Tools from './lib/tools';

/**********route-start**************/
// var route = new Route();
// var routeMap = new Map();
// routeMap.set("/",function(res){
//     document.querySelector("#app").innerHTML=`
//         <btn-nm params="value:data"></btn-nm>
//         <btn-nm params="value:data1"></btn-nm>`;
// })
// .set("/hh",function(res){
//     document.querySelector("#app").innerHTML=`<h1>hello hh </h1>`;
// });
// route.addRoute(routeArr);
//
// route.start();
/**********route-end**************/

/*设置demo路由和model区域*/
import BtnDemo from './examples/Button/index';
let Btn = new BtnDemo();
let obj = Btn.setModel();
let tool = new Tools();
Btn.setRoute();
/*设置demo路由和model区域*/

ko.applyBindings(tool.strMapToObj(obj),document.querySelector('#app'));

if(module.hot) {
    ko.cleanNode(document.querySelector('#app'));
    module.hot.accept();
    ko.applyBindings(tool.strMapToObj(obj),document.querySelector('#app'));
    module.hot.dispose(function() {
        ko.cleanNode(document.querySelector('#app'));
    });
}