import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, cuenta: "Naruto", contacto: "Naruto", prioridad:"", sector:"", nomina:"" },
  { id: 2, cuenta: "Goku", contacto: "Dragon Ball", prioridad:"", sector:"", nomina:"" },
  { id: 3, cuenta: "Kenshin Himura", contacto: "Rurouni Kenshin", prioridad:"", sector:"", nomina:"" },
  { id: 4, cuenta: "Monkey D. Luffy", contacto: "One Piece", prioridad:"", sector:"", nomina:"" },
  { id: 5, cuenta: "Edward Elric", contacto: "Fullmetal Alchemist: Brotherhood", prioridad:"", sector:"", nomina:""},
  { id: 6, cuenta: "Seto Kaiba", contacto: "Yu-Gi-Oh!", prioridad:"", sector:"", nomina:"" },
];

class Cuentas extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      cuenta: "",
      contacto: "",
      prioridad: "",
      sector:"",
      nomina:"",

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
        arreglo[contador].cuenta = dato.cuenta;
        arreglo[contador].contacto = dato.contacto;
        arreglo[contador].prioridad = dato.prioridad;
        arreglo[contador].sector = dato.sector;
        arreglo[contador].nomina = dato.nomina;
       
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
        <h2>Cuentas:</h2>
        <p>¡Te damos la bienvenida al tablero de cuentas! Aquí puedes almacenar y gestionar todos las cuentas y su nivel de PRIORIDAD.</p>
       </section>
        <Container>
        <br />
          <button className="button-crear" onClick={()=>this.mostrarModalInsertar()}>Agregar cuenta</button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cuenta</th>
                <th>Contacto</th>
                <th>Prioridad</th>
                <th>Sector</th>
                <th>Nómina</th>
                <th>Editar</th>
               
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.cuenta}</td>
                  <td>{dato.contacto}</td>
                  <td> {dato.prioridad} </td>
                  <td> {dato.sector} </td>
                  <td> {dato.nomina} </td>
                 
                  <td>
                    <button
                      className='button-editar'
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </button>{" "}
                    <button className='button-eliminar'  onClick={()=> this.eliminar(dato)}>Eliminar</button>
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
                Cuenta: 
              </label>
              <input
                className="form-control"
                name="cuenta"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cuenta}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Contacto: 
              </label>
              <input
                className="form-control"
                name="contacto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.contacto}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Prioridad: 
              </label>
              <select name="prioridad" id="prioridad-form" onChange={this.handleChange} value={this.state.form.prioridad}>
               <option value="alta">Alta</option>   
               <option value="media">Media</option>   
               <option value="baja">Baja</option>   
               
             </select>
            </FormGroup>
            <FormGroup>
              <label>
                Sector: 
              </label>
              <input
                className="form-control"
                name="sector"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.sector}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Nómina: 
              </label>
              <input
                className="form-control"
                name="nomina"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nomina}
              />
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
           <div><h3>Insertar cuenta</h3></div>
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
                Cuenta: 
              </label>
              <input
                className="form-control"
                name="cuenta"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Contacto: 
              </label>
              <input
                className="form-control"
                name="contacto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Prioridad: 
              </label>
              <select name="prioridad" id="prioridad-modal" onChange={this.handleChange}>
               <option value="alta">Alta</option>   
               <option value="media">Media</option>   
               <option value="baja">Baja</option>   
             </select>
            </FormGroup>
            <FormGroup>
              <label> 
                Sector: 
              </label>
              <input
                className="form-control"
                name="sector"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Nómina: 
              </label>
              <input
                className="form-control"
                name="nomina"
                type="text"
                onChange={this.handleChange}
              />
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
export default Cuentas;