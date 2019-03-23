import React,{Component,Fragment} from 'react';
import './navleft.less';
import menuDate from './rootmenu.js';
import { Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const data = menuDate.menuDate
export default withRouter(class NavLeft extends Component{
    jump(path){
        // console.log(path)
        // console.log(this.props)
        this.props.history.push(path)
    }
    renderMenu(data){
        // console.log(data)
        return data.map((item)=>{
            if( item.children ){
                return  <SubMenu key={item.id} title={<span><Icon type="user" /><span>{item.name}</span></span>}>
                            <MenuItemGroup title={<span>{item.name}</span>}>
                                {this.renderMenu(item.children)}
                            </MenuItemGroup>
                        </SubMenu>         
            }else{
                return <Menu.Item key={item.id} onClick={this.jump.bind(this,item.path)}> <Icon type="user" /><span>{item.name}</span></Menu.Item>
            }
        })
    }
    render(){
        return(
            <Fragment>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {this.renderMenu(data)}
                    {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Iteom 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu> */}
                    
                    
                </Menu>
            </Fragment>
        )
    }
})
