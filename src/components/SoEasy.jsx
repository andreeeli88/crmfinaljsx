import React from 'react'
import resenauno from '../img/reseña_uno.png'
import resenados from '../img/reseña_dos.png'
import resenatres from '../img/reseña_tres.png'
import icon from '../img/icon.png'
import logo from '../img/logo.jpeg'
import arrow from '../img/flecha.png'
import separador from '../img/separador.png'
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlinePushpin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import score from "../img/score.png"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const SoEasy = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
         <div>
    
    
    <section className="descripcion">
     
      <p>
        Soluciones rápidas, simples y gratuitas para la gestionar las <br />
        comunicaciones en tu organización
      </p>
      <div>
        <img  className="img-header" src={icon} alt=""/>
    </div>
    </section>
    <div className="columns">
      <div className="container text-center">
        <div className="row">
          <div className="col align-self-start" style={{fontSize: 30}}>
            Plan free
          </div>
          <div className="col align-self-center" style={{fontSize: 30}}>
            Usuarios ilimitados
          </div>
          <div className="col align-self-end" style={{fontSize: 30}}>
            Contactos ilimitados
          </div>
        </div>
      </div>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col align-self-start" style={{fontSize: 30}}>
            Gestión de conexiones constantes
          </div>
          <div className="col align-self-center" style={{fontSize: 30}}>
            Almacen de datos
          </div>
          <div className="col align-self-end" style={{fontSize: 30}}>
            Soluciones CRM para iOS/Android
          </div>
        </div>
      </div>
    </div>
    
    <h3 className='resenas-titulo'>Nuestras reseñas:   </h3>
    <div className="res-container">
      <div className="res-1">
        <h6 className='titulo-res'>...</h6>
        <p>"Exclente CRM, simple y funcional !" -Abby Triviño</p>
        <img className='img-res' src={score} alt="score" />
      </div>
      <div className="res-2">
        <h6 className='titulo-res'>...</h6>
        <p>"Me gusta porque siempre hay la apertura para una capacitación sobre la página y el servicio" -Adrian Ybañez</p>
        <img className='img-res' src={score} alt="score" />
      </div>
      <div className="res-3">
         <h6 className='titulo-res'>...</h6>
        <p>"Gran atención al cliente, claro y organizado" -Dylan Lopéz</p>
        <img className='img-res' src={score} alt="score" />
      </div>
    </div>
    <h3 className='conoce-logo'>Conoce nuestro Logo:</h3>
    <div className='container-logo'>
      
        <div>
          <img  className="arrow" src={arrow} alt="" />
        </div>
        <div >
          <img  className="logo-image"src={logo} alt="logo" />
        </div>
    </div>
    <br />
    
    
    <div className="capacitacion" >
      <h2>Te gustaria una capacitación?</h2>
          <div>
            <Button variant="primary" onClick={handleShow}>
              Deja tus datos
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Nos pondremos en contacto pronto !!</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div class="modal-body">
                  <form action="text">
                    <label for="cliente-nombre">Nombre</label>
                    <input type="text" id="cliente-nombre" />
                    <br />
                    <label for="cliente-apellido">Apellido</label>
                    <input type="text" id="cliente-apellido" />
                    <br />
                    <label for="cliente-correo">Correo</label>
                    <input type="email" id="cliente-correo" />
                  </form>
                </div>
                <div class="modal-footer">
                  
                  <button type="button" class="btn btn-primary">Enviar</button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
    
    </div>

    <div className="footer" id="footer">
      <div className="footer-uno">
        <h3>
          Ponte en contacto:
          
        
        </h3>
        <div className='footer-contact'>
        <AiOutlinePhone />
        <p className='footer-contact-uno'>Nuestros teléfonos: 2222-1459</p>
        </div>
        <br/>
        <div className='footer-contact'>
        <AiOutlinePushpin />
        <p className='footer-contact-uno'>Dirección: la Kennedy</p>
        </div>
        <br/>
        <div className='footer-contact'>
        <AiOutlineMail />
        <p className='footer-contact-uno'>Correo: soeasycon@gmail.com</p>
        </div>
       
      </div>
      <div className="footer-dos">
        <h4>Puedes buscarnos con google maps</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.805339962463!2d-78.47816815347456!3d-0.14615204707463067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5855530bb9531%3A0x87a01da450fa1beb!2sLuis%20Calisto%20N49-45%2C%20Quito%20170138!5e0!3m2!1ses-419!2sec!4v1709519327114!5m2!1ses-419!2sec" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>


   
  </div>

    </div>
  )
}

export default SoEasy