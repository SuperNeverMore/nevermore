import Page from 'page';

class Router{
    constructor(){
        this.start = this.start.bind(this);
        this.addRoute = this.addRoute.bind(this);
        this.setRoot = this.setRoot.bind(this);
    }
    addRoute(param){
        for(let [k,v] of param){
            Page(k,v);
        }
    }
    setRoot(param){
        Page.base(param)
    }
    start(){
        return Page();
    }
}

export default Router;
