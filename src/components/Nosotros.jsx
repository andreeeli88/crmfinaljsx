import React from 'react';
import vision from '../img/vision.png';
import mision from '../img/mision.jpg';
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlinePushpin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Nosotros = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
            <h1 class="nosotros-titulo">
                Conócenos:
            </h1>
        <div class="nosotros-texto">
            <div class="col"> <div class="card-conocenos">
                <div class="card-body">
                  <h5 class="card-title">Qué es ConectEasy</h5>
                  <p class="card-text">ConectEasy es una plataforma de cliente con todas las integraciones y los recursos que necesitas para conectar tus equipos de marketing, ventas, gestión de contenido y servicio al cliente. Cada producto es potente por sí mismo pero, en conjunto, son incomparables.

                Obtén una demostración para que conozcas nuestras características de la plataforma de cliente o empieza a usar nuestra suite completa de herramientas gratuitas y mejóralas a medida que creces.</p>
                  
                </div>

        </div>
        <div class="mision-vision" >
            <div class="container text-center">
                <div class="row">
                  <div class="col-6 col-sm-4">
                    <div class="mision-vision-titulo">
                        Nuestra Misión
                    </div>
                    <div class="mision-vision-texto">
                        <p>Lograr una colaboración mutua entre colaboradores y clientes, que mantengan el trabajo en equipo y las ganas de lograr los objetivos juntos</p>
                    </div>
                  </div>
                  <div class="col-6 col-sm-4">
                    <img class="img-nosotros" src={mision} alt=""/>
                  </div>
              
                  
                  <div class="w-100 d-none d-md-block"></div>
              
                  <div class="col-6 col-sm-4">
                    <img class="img-nosotros" src={vision} alt=""/>
                  </div>
                  <div class="col-6 col-sm-4">
                    <div class="mision-vision-titulo">
                        Nuestra Visión
                    </div>
                    <div class="mision-vision-texto">
                        <p> Crecimiento, en todos los campos, ya sea de manera empresarial para que tus negocios crezcan y de forma personal demostrando que cualquiera puede aprender de este negocio y gestionar sus equipos y clientes </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="nostros-oferta">
              
            </div>
          </div>
    </div>
    <section class="contact">
        <h2 class="texto1">¿Te gustaría una capacitación?</h2>
        <h3 class="texto1">Por favor registrate</h3>
        <br />

        <div>
        <Button variant="primary" onClick={handleShow}>
        Registro
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nos pondremos en contacto pronto!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Enviar</Button>
        </Modal.Footer>
      </Modal>
        </div>   
      </section>
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
  )
}

export default Nosotros