import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/global.css';
import { Link } from "react-router-dom";


export const BarraInicio = () => {
  return (
    <div>
      <header >
        <div>
            <div >
                <h2 class="tittle">CRM ConectEasy</h2>
            </div>
          
        </div>

    </header>
      <Navbar expand="lg" className="barra-inicio-i">
      <Container className='barra-inicio'>
             <Link to="/SoEasy" className='barra-inicio-1'>SoEasy</Link> 
            <Link to="/nosotros" className='barra-inicio-2' >Nosotros</Link>
            <Link to="/Productos" className='barra-inicio-3' >Productos</Link>
            <NavDropdown title="Pruébalo !" id="basic-nav-dropdown"  className='barra-inicio-4'> 
            <Link to="/CrmEstado" className='barra-inicio' >Contactos</Link>
              <NavDropdown.Divider />
              <Link to="/Cuentas" className='barra-inicio'>Cuentas</Link>  
              <NavDropdown.Divider />
              <Link to="/Actividades" className='barra-inicio' >Actividades</Link>   
            </NavDropdown>
      </Container>
    </Navbar>
    </div>
  )
}
