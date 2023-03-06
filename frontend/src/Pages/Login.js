import React from 'react'
// import DefualtLayout from '../Components/DefualtLayout'
import { Row, Col,Form,Input } from 'antd';
import{Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import { userLogin } from '../Redux/Actions/userAction';


function Login() {
  
  const dispatch=useDispatch()

  function onFinish(values) {

    dispatch(userLogin(values));


    // console.log(values);    

     
    
  }
  return (
    <div className='login' >
      
        <Row gutter={16} className='d-flex align-item-center'>
          <Col lg={16 } style={{position:'relative'}} >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Vqurm4gw0UwCA2CgHO1-3NkPi6vWnfcFhA&usqp=CAU' alt=''></img>
            < h1 className='login-logo'>car-rent</h1>
          </Col>
          
          <Col lg={8} className='text-left p-5' >
          <Form layout='vertical'className='login-left p-5' onFinish={onFinish} >
            <h1>LOGIN</h1>
            <hr/>
            <Form.Item className='label' name='username' label='username' rules={[{required:true}]}>
              <Input></Input>
            </Form.Item>
           < Form.Item name='password' label='password' rules={[{required:true}]}>
              <Input></Input>
            </Form.Item>

            <button className='btn1 mt-2 mb-4 '>Login</button>
            <hr/>
         <Link to='/Register'>Click Here to  register </Link>

            </Form>
            </Col>
        </Row>

        
      
    </div>
  )
}

export default Login