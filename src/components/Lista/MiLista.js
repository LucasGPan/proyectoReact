import React,{useState} from "react";

function MiLista (){
    const [incidencias,setIncidencias] = useState([{
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
        },
        {
            id_incidencia: 4,
            id_usuario: 34,
            titulo: "Falla en el sistema de climatización",
            descripcion: "El sistema de climatización en la oficina principal no funciona correctamente, se requiere revisión.",
            categoria: "",
            nivel_urgencia: "Alta",
            fecha_registro: "2024-06-04",
            estado: "Abierta",
            ubicacion: "Oficina principal"
        },
        {
            id_incidencia: 5,
            id_usuario: 56,
            titulo: "Robo de equipo informático",
            descripcion: "Se ha reportado el robo de un ordenador portátil en la oficina de IT.",
            categoria: "",
            nivel_urgencia: "Alta",
            fecha_registro: "2024-06-05",
            estado: "Abierta",
            ubicacion: "Oficina de IT"
        },
        {
            id_incidencia: 6,
            id_usuario: 78,
            titulo: "Problemas con el sistema de iluminación",
            descripcion: "Se ha reportado un fallo en el sistema de iluminación de la oficina, se requiere revisión.",
            categoria: "",
            nivel_urgencia: "Media",
            fecha_registro: "2024-06-06",
            estado: "Abierta",
            ubicacion: "Oficina"
        }])

        return(
        <div className="lista">
            <ul>
                {
                    incidencias.map((i) => (
                        <li ><strong>ID i:</strong> {i.titulo},<br/>
                            <strong>Descripcion:</strong> {i.descripcion},<br/>
                            <strong>Usuario:</strong> {i.id_usuario},<br/>
                            <strong>Nivel de urgencia:</strong> {i.nivel_urgencia},<br/>
                            <strong>Fecha de registro:</strong> {i.fecha_registro},<br/>
                            <strong>Estado:</strong> {i.estado},<br/>
                            <strong>Ubicacion:</strong> {i.ubicacion}<br/><br/>
                        </li>
                    ))
}
            </ul>
        </div>
        )
}

export default MiLista;