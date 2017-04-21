import './less/main.less';
import ko from 'knockout';
import TestButton from './components/button/button';
var obj = {
  data:new TestButton({
      evt:function(){alert("hello")},
      className:'btn btn-warning',
      name:'Hello World!!.'
  })
};


ko.applyBindings(obj,document.querySelector('#app'));

if(module.hot) {
    ko.cleanNode(document.querySelector('#app'));
    module.hot.accept();
    ko.applyBindings(obj,document.querySelector('#app'));
    module.hot.dispose(function() {
        ko.cleanNode(document.querySelector('#app'));
    });
}