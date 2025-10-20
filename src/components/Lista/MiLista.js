import React from "react"
class MiLista extends React.Component{
    incidencias = [
        {
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
            titulo: "Fuga de agua en el baño",
            descripcion: "Se ha detectado una fuga de agua en el baño de la planta baja, se necesita reparación urgente",
            categoria: "",
            nivel_urgencia: "Alta",
            fecha_registro: "2024-06-02",
            estado: "En progreso",
            ubicacion: "Planta baja"

        },
        {
            id_incidencia: 3,
            id_usuario: 12,
            titulo: "Problemas con la conexión Wi-Fi",
            descripcion: "La conexión Wi-Fi en la sala de conferencias es inestable, afecta las reuniones virtuales",
            categoria: "",
            nivel_urgencia: "Media",
            fecha_registro: "2024-06-03",
            estado: "Cerrada",
            ubicacion: "Sala de conferencias"

        }
    ]
    render(){
        return(
        <div className="lista">
            <ul>
                {
                    this.incidencias.map((incidencia, index)
                     => <li key={index}>
                        ID incidencia: {incidencia.titulo}<br/>
                        Descripcion:{incidencia.descripcion}<br/>
                        Usuario: {incidencia.id_usuario}<br/>
                        Nivel de urgencia: {incidencia.nivel_urgencia}<br/>
                        Fecha de registro: {incidencia.fecha_registro}<br/>
                        Estado: {incidencia.estado}<br/>
                        Ubicacion: {incidencia.ubicacion}<br/>
                        </li>)
                }
            </ul>
        </div>
        )
    }
}
export default MiLista