import React from 'react'
import marketing from '../img/marketing.png'
import sales from '../img/sales.png'
import crm from '../img/crm.png'
import service from '../img/service.png'
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlinePushpin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";


const Productos = () => {
  return (
    <div>
   
            <section>
                <div>
                    <h1 className="nosotros-titulo">
                        Nuestros servicios:
                    </h1>
                </div>
                <div className="nosotros-texto">

                </div>
            </section>

             <h3>Nos interesa apoyarte con:</h3>
            <section className='new'>
                <div className="nostros-oferta">
                    <br/>
                    <br/>
                       <div className='grid-productos-uno'>
                            <div className='grid-productos-uno-uno'>
                                <div className="card">
                                    <img  src={marketing} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Marketing Hub</h5>
                                            <p className="card-text">Un software de marketing digital que te ayudará a aumentar el tráfico, convertir más visitantes en clientes y ejecutar campañas de marketing completas.</p>
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Más información
                                            </button>
                                        </div>
                                </div>
                            </div>
                            <div className='grid-productos-uno-dos'>
                            <div className="card">
                                <img  src={sales} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                    <h5 className="card-title">Sales Hub</h5>
                                    <p className="card-text">Un software de CRM para equipos de ventas que te permitirá recopilar datos más relevantes de tus prospectos, automatizar las tareas más tediosas y cerrar negocios con más rapidez.</p>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Más información
                                    </button>
                                    </div>
                                </div>     
                            </div>
                       </div>
                        <div className='grid-productos-dos'>
                            <div className="grid-productos-dos-dos">
                                <div className="card">
                                    <img  src={service} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                        <h5 className="card-title">Service Hub</h5>
                                        <p className="card-text" >Un software de servicio de atención al cliente que te permitirá ponerte en contacto con clientes, superar sus expectativas y convertirlos en promotores que potencien el crecimiento de tu empresa.</p>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Más información
                                        </button>
                                        </div>
                                    </div>
                            </div>
                            <div className="grid-productos-dos-dos">
                            <div className="card">
                                <img src={crm} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">CRM Hub</h5>
                                <p className="card-text">Un software de gestión de contenidos flexible para los marketers, potente para los desarrolladores y que ofrece a los clientes una experiencia confiable y personalizada.</p>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Más información
                                </button>
                                </div>
                            
                            </div>
                            </div>
                        </div> 
                 </div>
            </section>
            <section>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Déjanos tus datos</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
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
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                    </div>
                </div>
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

export default Productos