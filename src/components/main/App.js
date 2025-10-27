import React from 'react'
import './App.css'
import MiLista from '../Lista/MiLista.js'
import Form from '../Form.js'

class App extends React.Component{
state = {incidencias:[{
    id_incidencia: 1,
    id_usuario: 23,
    titulo: "Un bebe ha nacido en la oficina",
    descripcion: "Un bebe ha nacido en la oficina de recursos humanos, todos estan felices",
    categoria: "",
    nivel_urgencia: "Baja",
    fecha_registro: "2024-06-01",
    estado: "Abierta",
    ubicacion: "B675"

},
{
    id_incidencia: 2,
    id_usuario: 45,
    titulo: "El ordenador no enciende",
    descripcion: "Mi ordenador no enciende desde esta mañana, necesito ayuda urgente",
    categoria: "",
    nivel_urgencia: "Alta",
    fecha_registro: "2024-06-02",
    estado: "En curso",
    ubicacion: "A123"

},
{
    id_incidencia: 3,
    id_usuario: 67,
    titulo: "Fuga de agua en el baño",
    descripcion: "Hay una fuga de agua en el baño de la primera planta, el suelo está mojado",
    categoria: "",
    nivel_urgencia: "Media",
    fecha_registro: "2024-06-03",
    estado: "Resuelta",
    ubicacion: "B234"

}]}
  render(){
    return (
      <div>
      <h2>Mi aplicacion</h2>
        <div classname='parrafo'>
          <p>Este es mi primer contenido de la pagina:</p>
          <MiLista incidencias={this.state.incidencias}/>
          <Form/>
        </div>
      </div>
    )
  }
}



export default App;
