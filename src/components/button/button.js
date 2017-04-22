import ko from 'knockout';
import ViewModel from '../viewModel/viewModel';
class ButtonModel extends ViewModel {
    constructor(params){
        super(params);
        this.init = this.init.bind(this);
    }
    init(params){
        this.addData(params);
        return this.viewModel;
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