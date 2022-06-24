// ACA hago la conexion entre el front y el back
import axios from 'axios';

export function Frase(id) {
  return async function (dispatch) {
    try {
      var json = await axios(`https://www.grupozerafias.com/gonza/add_movimiento.php?data=${id}`);
      dispatch({
        type: "FRASE",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("Error obteniendo datos del videojuego", error);
    }
  };
}