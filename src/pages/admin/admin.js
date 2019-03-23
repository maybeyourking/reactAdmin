import React , {Component} from 'react';
import './admin.less';
import {Layout,Icon} from 'antd';
import NavLeft from '../../components/NavLeft/navleft'
const { Header, Sider, Content } = Layout;
class Admin extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        }); 
      }
    render(){
        return(
            <div className='admin'>
                <Layout>
                    <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    >
                    <div className="logo" />
                    <NavLeft></NavLeft>
                    </Sider>
                    <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                        className="trigger"
                        style={{fontSize:'20px',marginTop:'10px',marginLeft:'20px'}}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                    }}
                    >
                        {this.props.children}
                    </Content>
                    </Layout>
                </Layout>  
            </div>
            
        )
    }
}
export default Admin