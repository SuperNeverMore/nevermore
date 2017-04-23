/**
 * Created by neo.white on 2017/4/22.
*/
class Tools{
    constructor(){
        this.props = {};
        this.strMapToObj = this.strMapToObj.bind(this);
    }
    strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k,v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }
    
}

export default Tools;