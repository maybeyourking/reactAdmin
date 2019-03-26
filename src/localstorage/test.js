import React,{Component} from 'react';
let Storage = require('./storage')
class Test extends Component{
    setStorage(){
        Storage.setItem('test',{a:1,b:2})
    }
    getStorage(){
        console.log( Storage.getItem('test') )
    }
    render(){
        console.log(Storage)
        return(
            <div>
                <button onClick={this.setStorage}>setStorage</button>
                <button onClick={this.getStorage}>getStorage</button>
            </div>
        )
    }
}
export default Test