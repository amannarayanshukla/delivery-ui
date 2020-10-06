import React, { Component } from 'react';
import { connect } from 'umi';
import { Form, Input, Button } from 'antd';

// import GoogleLogin from 'react-google-login';

import styles from './Login.less';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

@connect((state) => ({
  login: state.login,
}))
class LoginComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // state = {register : false}

  render() {
    const onFinish = (userCredentials) => {
      const { dispatch } = this.props;

      dispatch({
        type: 'login/logInUser',
        userCredentials,
      }).then(() => {
        const { login } = this.props;
        const { user, token } = JSON.parse(login.user).data;
        console.log(user, 'USER');

        localStorage.setItem('accessToken', token.accessToken);
        localStorage.setItem('uuid', user.uuid);

        document.getElementById('basic_email').value = '';
        document.getElementById('basic_password').value = '';
        this.props.handleOk();
        this.props.userDetail(user);
      });
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    // const responseGoogle = (response) => {
    //   console.log(response);
    // };

    const onRegister = () => {};

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          {/* <div> */}
          {/* <GoogleLogin */}
          {/*  clientId="312443430540-q414r1ld14n0iot4gnlfjp66vnrjd4vg.apps.googleusercontent.com" */}
          {/*  buttonText="Login" */}
          {/*  onSuccess={responseGoogle} */}
          {/*  onFailure={responseGoogle} */}
          {/*  cookiePolicy='single_host_origin' */}
          {/* /> */}
          <div className={styles.buttons}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" onClick={onRegister}>
              Register
            </Button>
          </div>
          {/* </div> */}
        </Form.Item>
      </Form>
    );
  }
}

export default connect(() => ({}))(LoginComponent);
