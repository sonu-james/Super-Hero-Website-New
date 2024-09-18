import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Header() {
  const [token, setToken] = useState('')
  const navigate=useNavigate()
  const handleLogout=()=>{
    sessionStorage.clear()
    toast.success("Successfully logged out")
    setTimeout(()=>{
      navigate('/')
    },3000)
   
  }
  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  },[])
  
  
  return (
    <>
    <Navbar data-bs-theme="dark" bg='transparent' style={{height:'60px'}} >
        <Container className='mt-4' >
          <Navbar.Brand href="/"><img src="https://clipart-library.com/new_gallery/40-400344_deadpool-vector-superhero-logos-png.png" alt="no image" style={{width:'60px',height:'60px'}} /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href='/' className='me-5'>Home</Nav.Link>
            <Nav.Link href='/about' className='me-5'>About Us</Nav.Link>
            {/* <Nav.Link href='/login' className='me-5'>Login</Nav.Link> */}
            {token?<Nav.Link href='/grievancepage' className='me-5  rounded' style={{backgroundColor:'orange'}}>Contact With Us</Nav.Link>:null}
            {!token?<Nav.Link href='/login' className='me-5 '>Login/Sign Up</Nav.Link>:
            <Nav.Link href='/' className='me-5 '  onClick={handleLogout}>Logout</Nav.Link>}
            
            {/* <Nav.Link href='/login' className='me-5  rounded' style={{backgroundColor:'orange'}}>Contact With Us</Nav.Link>
             */}
          </Nav>
        </Container>
      </Navbar>
      <ToastContainer position='top-center' theme='colored' />
    </>
  )
}

export default Header