class viewModel{
    constructor(){
        this.viewModel = {};
    }
    addData(props){
        for(let i of props){
            Object.assign(this.viewModel,i);
        }
        return this.viewModel
    }
}
export default viewModel;