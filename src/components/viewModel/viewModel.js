class viewModel{
    constructor(){
        this.viewModel = {};
        this.addData = this.addData.bind(this);
    }
    addData(props){
        Object.assign(this.viewModel,props);
    }

}
export default viewModel;