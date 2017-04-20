import ko from 'knockout';
class ButtonModel {
    constructor(params){
        var param = params;
        this.evt = param.evt||'';
        this.className = param.className||'btn btn-info';
        this.name = param.name||'无名大神';
    }
}

ko.components.register('btn-nm',{
    template:require('./button.html'),
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.value instanceof ButtonModel ? params.value : ko.unwrap(params.value);
        }
    }
});
export default ButtonModel;