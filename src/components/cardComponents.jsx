import { calcularTotal } from './calcularTotal'
import { CloseButton } from './closeButton'
import { Contador } from './contador'

export const TitleAndClose = ({ nombre, elementId, deleteElement }) => {
	return (
		<div className="flex items-center w-full">
			<div className="text-3xl text-green-700 flex items-center justify-center w-full">
				{nombre}
			</div>
			<CloseButton elementId={elementId} deleteElement={deleteElement} />
		</div>
	)
}

export const TotalYContador = ({
	cantidad,
	cambiar,
	precio,
	promo,
	elementId,
}) => {
	return (
		<div className="flex items-center justify-between w-full p-4">
			<div className="text-green-600 text-2xl">
				{'$ ' + calcularTotal({ cantidad, precio, promo })}
			</div>
			<Contador cantidad={cantidad} cambiar={cambiar} elementId={elementId} />
		</div>
	)
}
