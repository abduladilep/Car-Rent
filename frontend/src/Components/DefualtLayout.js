import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Dropdown } from 'antd';






function DefualtLayout(props) {

  const user =JSON.parse(localStorage.getItem('User'))




  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" 
        rel="noopener noreferrer"
         href="https://www.antgroup.com"
         >
       Home
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a  href="https://www.aliyun.com">
         Bookings
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a  href="https://www.luohanacademy.com">
         Profile 
        </a>
      ),
    },
    {
      key: '4',
      label: ( 
          <li onClick={()=>{
            localStorage.removeItem('User')
            window.location.href = '/login'
          }}>  Logout
            
          </li>
       
      ),
    },
  ];

  return (
  <div>
    <div className='header bs1'>

<div className='d-flex justify-content-between' >
  <h1>CAR RENT</h1>



      <Dropdown menu={{items}} placement="bottom" >
        <Button>{user.username}</Button>
      </Dropdown>


</div>













    {/* <Navbar  className='bs1' expand="lg"> */}
      {/* <Container>
        <Navbar.Brand href="#home">CAR RENT</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    </div>
    <div className='content'>
        {props.children}
    </div>
    </div>

    
    

  );
}

// export default DefualtLayout;
  

export default DefualtLayout;
