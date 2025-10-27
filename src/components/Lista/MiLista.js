import React,{useState} from "react";

function MiLista (props){
    
        return(
        <div className="lista">
            <ul>
                {
                    props.incidencias.map((i) => (
                        <li ><strong>ID i:</strong> {i.titulo},<br/>
                            <strong>Descripcion:</strong> {i.descripcion},<br/>
                            <strong>Usuario:</strong> {i.id_usuario},<br/>
                            <strong>Nivel de urgencia:</strong> {i.nivel_urgencia},<br/>
                            <strong>Fecha de registro:</strong> {i.fecha_registro},<br/>
                            <strong>Categoria:</strong> {i.categoria},<br/>
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