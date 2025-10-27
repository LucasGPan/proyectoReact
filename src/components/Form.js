import React from "react";
class Form extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Id incidencia:</label>
                        <input type="number" name="id" placeholder="Introduce el id de la incidencia" /> 
                    </div>
                    <div>
                        <label>Usuario:</label>
                        <input type="text" name="titulo" placeholder="Introduce el titulo de la incidencia" />
                    </div>
                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descripcion" placeholder="Describe la incidencia" />
                    </div>
                    <div>
                        <label>Categoria:</label>
                        <input type="select" name="categoria" placeholder="Introduce la categoria de la incidencia" >
                            <option value="Abierta">Informatica</option>
                            <option value="En curso">Recursos Humanos</option>
                            <option value="Resuelta">Mantenimiento</option>
                            <option value="Cerrada">Limpieza</option>
                        </input>
                    </div>
                    <div>
                        <label>Nivel de urgencia:</label>
                        <input type="text" name="nivel_urgencia" placeholder="Indica el nivel de urgencia" />
                    </div>
                    <div>
                        <label>Fecha de registro:</label>
                        <input type="date" name="fecha_registro" placeholder="Selecciona la fecha de registro" />
                    </div>
                    <div>
                        <label>Estado:</label>
                        <input type="text" name="estado" placeholder="Indica el estado de la incidencia" />
                    </div>
                    <div>
                        <label>Ubicacion:</label>
                        <input type="text" name="ubicacion" placeholder="Indica la ubicacion de la incidencia" />
                    </div>
                    <button type="submit">Enviar</button>
                </form>    
            </div>
        );
    }
}
export default Form;