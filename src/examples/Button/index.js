import Route from '../../routes/index';
import TestButton from '../../components/button/button';
import Page from 'page';
import Tools from '../../lib/tools';
import ko from 'knockout'
let tool = new Tools();
class BtnDemo{
    constructor(){
        this.setModel = this.setModel.bind(this);
        this.setRoute = this.setRoute.bind(this);
    }
    setRoute(){
        let route = new Route();
        // route.setRoot('/button');
        let routeMap = new Map();
        let _this = this;
            let list = document.querySelector("#list-page"),
            base =  document.querySelector("#base-page"),
            app =  document.querySelector("#app");


        routeMap.set('/btn/list',function(res){
            base.classList.value = "hide";
            list.classList.value = "show";
            list.innerHTML = `
            <btn-nm params="value:data"></btn-nm>
            <btn-nm params="value:data1"></btn-nm>`;
            ko.cleanNode(app);
            ko.applyBindings(tool.strMapToObj(_this.setModel()),app);

        }).set('/btn/',function(res){
            base.classList.value = "hide";
            list.classList.value = "show";
            list.innerHTML = `
            <div>button主页面<a href="/btn/list">列表页</a></div>`;
        });
        route.addRoute(routeMap);
        route.start();

    }
    setModel(){
        let obj = new Map();

        obj.set("data",new TestButton().init({
            evt:function(){
                let list = document.querySelector("#list-page"),
                    base =  document.querySelector("#base-page");
                base.classList.value = "show";
                list.classList.value = "hide";
                Page('/')
            },
            className:'btn btn-danger',
            name:'返回主页'
        }))
        .set("data1",new TestButton().init({
            evt:function(){alert("hello1")},
            className:'btn btn-info',
            name:'测试按钮'
        }));
        return obj;
    }
}
export default BtnDemo;









