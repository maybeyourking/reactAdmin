import React,{Component,Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import App from '../App';
import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'
let Index = ()=>{
    return <div>this is index</div>
}
let Setting = ()=>{
    return <div>this is setting</div>
}
class Routers extends Component{
    render(){
        return(
            <Fragment>
                <App>  {/*组件中插入路由  组件中用this.props.children插槽*/}
                    <Router>
                    <Switch>
                        <Redirect exact from='/' to='/login'></Redirect>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/admin' render={()=>{
                            return (
                                <Admin>
                                <Route exact path='/admin' component={Index}></Route>
                                <Route exact path='/admin/setting' component={Setting}></Route>
                                </Admin>
                            )
                            
                        }}>
                        </Route>
                    </Switch>
                    </Router> 
                </App>
            </Fragment>
        )
    }
}
export default Routers
