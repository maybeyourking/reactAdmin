import React , {Component} from 'react';
import './login.less'
import {Card,Form, Icon, Input, Button, Checkbox,message} from 'antd'
class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.$axios.get('/login')
                .then((data)=>{
                    if(data.data.ok == 0){
                        message.success('登录成功，2秒后跳转页面',2,()=>{
                            this.props.history.push('/admin')
                        })
                    }else{
                        message.error('登录失败，用户名或密码错误',2)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            // console.log('Received values of form: ', values);
          }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className='loginbox'>
                <Card title='Login In' className='login'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名!' },
                                { min: 3 , message: '不能少于3个字符!' },
                                { max: 10 , message: '不能超过10个字符!' },
                                { pattern: /^[a-zA-Z]/g , message: '必须以字母开头!' }
                    ],
                        })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' },
                                { min: 6 , message: '不能少于6个字符!' },
                                { max: 10 , message: '不能超过10个字符!' },
                    ],
                        })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                        })(
                        <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                                style={{display:'block',width:'100%'}}
                        >
                        Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm

  
