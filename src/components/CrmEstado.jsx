
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, FormGroup, ModalFooter, ModalHeader } from 'reactstrap'


const data = [
  {
    id: 1,
    nombre: "Adrian Ybañez",
    empresa: "llll",
    giro: "Logistica",
    email: "andrian@hotmail.com",
    telefono: "0998020848",
  },
  {
    id: 2,
    nombre: "James Duran",
    email: "jamesn@hotmail.com",
    giro: "Jurisprudencia"
  },
  {
    id: 3,
    nombre: "Jonathan Tapia",
    email: "jtapia@hotmail.com",
    giro: "Psicología"
  },
  {
    id: 4,
    nombre: "Verónica Zambrano",
    email: "vzambrano@hotmail.com",
    giro: "Administración"
  },
]

class CrmEstado extends React.Component {
  state = {
    data: data,
    form: {
      id: '',
      nombre: '',
      empresa: '',
      giro: '',
      email: '',
      telefono:'',
      accion: '',
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].empresa = dato.empresa;
        arreglo[contador].giro = dato.giro;
        arreglo[contador].email = dato.email;
        arreglo[contador].telefono = dato.telefono;
        arreglo[contador].accion = dato.accion;
        
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
       <section>
        <h2>Contactos:</h2>
        <p>¡Te damos la bienvenida al tablero de contactos! Aquí puedes almacenar y gestionar todos los contactos.</p>
       </section>
        <Container>
        <br />
          <button className='button-crear' onClick={()=>this.mostrarModalInsertar()}>Agregar contacto</button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>nombre</th>
                <th>Empresa</th>
                <th>Giro</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.empresa}</td>
                  <td>{dato.giro}</td>
                  <td>{dato.email}</td>
                  <td>{dato.telefono}</td>
                  <td>{dato.accion}</td>
                  
                  <td>
                    <button
                      className='button-editar'
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </button>{" "}
                    <button className='button-eliminar' onClick={()=> this.eliminar(dato)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input
                className="form-control"
                name="empresa"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.empresa}
              />
            </FormGroup>
            <FormGroup>
              <label>Giro</label>
              <input
               type="text"
               className='form-control'
               name='giro'
               onChange={this.handleChange}
               value={this.state.form.giro}
                />
            </FormGroup>
            <FormGroup>
              <label>Email</label>
              <input
               type="text"
               className='form-control'
               name='emsil'
               onChange={this.handleChange}
               value={this.state.form.email}
                />
            </FormGroup>
            <FormGroup>
              <label>Telefono</label>
              <input 
              type="text"
              className='form-control'
              name='telefono'
              onChange={this.handleChange}
              value={this.state.form.telefono}
              />
            </FormGroup>
            <FormGroup>
              <label>Acción</label>
             <select name="accion" id="accion-form" onChange={this.handleChange} value={this.state.form.accion}>
               <option value="activo">Activo</option>   
               <option value="inactivo">Inactivo</option>   
               <option value="contactado">Contactado</option>   
               
             </select>
             
                
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar nombre</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input
                className="form-control"
                name="empresa"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Giro: 
              </label>
              <input
                className="form-control"
                name="giro"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Email: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Telefono: 
              </label>
              <input
                className="form-control"
                name="telefono"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Acción: 
              </label>
              <select name="accion" id="accion-modal" onChange={this.handleChange}>
               <option value="activo">Activo</option>   
               <option value="inactivo">Inactivo</option>   
               <option value="contactado">Contactado</option>   
             </select>
            </FormGroup>  
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}    
export default CrmEstado;