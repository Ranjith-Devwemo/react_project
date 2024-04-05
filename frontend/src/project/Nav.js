
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import DarkVariantExample from './Home/Carousels';
// import About from './About';
// import Treatments from './Treatments';
// import Appoinments from './Appoinments';
// import Contact from './Contact';
// // import "./Css/Nav.css"

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// function BasicExample() {
//   return (
//     <>
//         <BrowserRouter>
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
//             <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
//             <NavDropdown  title="Treatments" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to={"/treatments"}>Treatments1</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item >Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to={"/appoinments"} >Appoinments</Nav.Link>
//             <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
//           </Nav>
         
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

    
// <div>
//   <Routes>
//     <Route path='/' element={<DarkVariantExample/>}/>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/treatments' element={<Treatments/>}/>
//     <Route path='/appoinments' element={<Appoinments/>}/>
//     <Route path='/contact' element={<Contact/>}/>

//   </Routes>

// </div>
// </BrowserRouter>
//     </>
//   );
// }

// export default BasicExample;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Button from "react-bootstrap/Button"
import Home from './Home';
import Content from './Content';
import Page3 from './Page3';
import Login from './Login';

function BasicExample() {
  return (
    <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to={"/"}><span className='p-3'>FEATURES</span></Nav.Link>
            <Nav.Link as={Link} to={"Princing"}><span className='p-3'>PRICING</span></Nav.Link>
            <Nav.Link as={Link} to={"/about"}><span className='p-3'>ABOUT AS</span></Nav.Link>
            <Nav.Link as={Link} to={'Login'}><button className='p-3'>LOGIN</button></Nav.Link>
           </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/princing' element={<Content/>}/>
            <Route path='/about' element={<Page3/>}/>
            <Route path='/Login' element={<Login/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default BasicExample;