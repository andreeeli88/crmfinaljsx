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
  { id: 1, actividad: "Naruto", responsable: "Naruto", estado:"", tipo:"" },
  { id: 2, actividad: "Goku", responsable: "Dragon Ball", estado:"", tipo:"" },
  { id: 3, actividad: "Kenshin Himura", responsable: "Rurouni Kenshin", estado:"", tipo:"" },
  { id: 4, actividad: "Monkey D. Luffy", responsable: "One Piece", estado:"", tipo:"", nomina:"" },
  { id: 5, actividad: "Edward Elric", responsable: "Fullmetal Alchemist: Brotherhood", estado:"", tipo:""},
  { id: 6, actividad: "Seto Kaiba", responsable: "Yu-Gi-Oh!", estado:"", tipo:""},
];

class Actividades extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      actividad: "",
      responsable: "",
      estado: "",
      tipo:"",
      

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
        arreglo[contador].actividad = dato.actividad;
        arreglo[contador].responsable = dato.responsable;
        arreglo[contador].estado = dato.estado;
        arreglo[contador].tipo = dato.tipo;
        
       
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
        <h2>Actividades:</h2>
        <p>¡Te damos la bienvenida al tablero de actividades! Aquí puedes almacenar y gestionar todos las actividades y sus distintos estados</p>
       </section>
        <Container>
        <br />
          <button className="button-crear" onClick={()=>this.mostrarModalInsertar()}>Agregar actividad</button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Actividad</th>
                <th>Responsable</th>
                <th>Estado</th>
                <th>Tipo</th>
                
                <th>Editar</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.actividad}</td>
                  <td>{dato.responsable}</td>
                  <td> {dato.estado} </td>
                  <td> {dato.tipo} </td>
                 
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
                actividad: 
              </label>
              <input
                className="form-control"
                name="actividad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.actividad}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                responsable: 
              </label>
              <input
                className="form-control"
                name="responsable"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.responsable}
              />
            </FormGroup>
            <FormGroup>
              <label>
                estado: 
              </label>
              <select name="estado" id="estado-form" onChange={this.handleChange} value={this.state.form.estado}>
               <option value="abierto">Abierto</option>   
               <option value="listo">Listo</option>   
               <option value="pendiente">Pendiente</option>   
               
             </select>
            </FormGroup>
            <FormGroup>
              <label>
                tipo: 
              </label>
              <input
                className="form-control"
                name="tipo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tipo}
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
           <div><h3>Insertar actividad</h3></div>
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
                actividad: 
              </label>
              <select name="actividad" id="actividad-modal" onChange={this.handleChange}>
              <option value="abierto">Abierto</option>   
               <option value="listo">Listo</option>   
               <option value="pendiente">Pendiente</option>    
             </select>
            </FormGroup>
            
            <FormGroup>
              <label>
                responsable: 
              </label>
              <input
                className="form-control"
                name="responsable"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                estado: 
              </label>
              <input
                className="form-control"
                name="estado"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                tipo: 
              </label>
              <input
                className="form-control"
                name="tipo"
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
export default Actividades;