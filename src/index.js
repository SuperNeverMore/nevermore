import './less/main.less';
import ko from 'knockout';
import TestButton from './components/button/button';
import ViewModel from './components/viewModel/viewModel';

let obj = {
  data:new TestButton({
      evt:function(){alert("hello")},
      className:'btn btn-danger',
      name:'hello world..'
  })
};

let obj1 = {
    data1:new TestButton({
        evt:function(){alert("hello1")},
        className:'btn btn-info',
        name:'测试按钮...'
    })
};





let data = new ViewModel();
let viewModel = data.addData([obj,obj1]);
ko.applyBindings(viewModel,document.querySelector('#app'));

if(module.hot) {
    ko.cleanNode(document.querySelector('#app'));
    module.hot.accept();
    ko.applyBindings(viewModel,document.querySelector('#app'));
    module.hot.dispose(function() {
        ko.cleanNode(document.querySelector('#app'));
    });
}