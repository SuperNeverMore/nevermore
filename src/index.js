import './less/main.less';
import ko from 'knockout';
import TestButton from './components/button/button';
import Tools from './lib/tools';

let obj = new Map(),
    tool = new Tools();

obj.set("data",new TestButton().init({
    evt:function(){alert("hello")},
    className:'btn btn-danger',
    name:'hello world'
}))
.set("data1",new TestButton().init({
    evt:function(){alert("hello1")},
    className:'btn btn-info',
    name:'测试按钮'
}));

ko.applyBindings(tool.strMapToObj(obj),document.querySelector('#app'));

if(module.hot) {
    ko.cleanNode(document.querySelector('#app'));
    module.hot.accept();
    ko.applyBindings(tool.strMapToObj(obj),document.querySelector('#app'));
    module.hot.dispose(function() {
        ko.cleanNode(document.querySelector('#app'));
    });
}