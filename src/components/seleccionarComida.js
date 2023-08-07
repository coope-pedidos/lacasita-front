import { Comidas } from "../../config"

export default function seleccionarComida(idDeComida) {
	return Comidas.filter(comida => comida.id === parseInt(idDeComida)).shift()
}
