import './less/main.less';
import ko from 'knockout';
import TestButton from './components/button/button';

var obj = {
  data:new TestButton({
      evt:function(){alert("hello")},
      className:'btn btn-warning',
      name:'Hello World'
  })
};


Object.assign({},obj);
ko.applyBindings(obj,document.querySelector('#app'));
