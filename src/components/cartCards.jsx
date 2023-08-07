import { Comidas } from '../../config'
import Image from 'next/image'

import { TitleAndClose, TotalYContador } from './cardComponents'

export const Card = ({ id, deleteElement, cantidad, cambiar }) => {
	const comida = Comidas.find(c => c.id == id)

	return (
		<div className="shadow-lg bg-gradient-to-br from-green-50 to-green-200 rounded-3xl h-48 w-2/3  mb-4 flex overflow-hidden">
			<div className="w-2/4 min-h-full overflow-hidden relative bg-red-400">
				<Image src={`/${comida.img}`} fill={true} alt="Imagen de comida" />
			</div>
			<div className="flex flex-col items-center w-full justify-between">
				<TitleAndClose
					elementId={id}
					nombre={comida.nombre}
					deleteElement={deleteElement}
				/>
				<TotalYContador
					cantidad={cantidad}
					promo={comida.promo}
					precio={comida.precio}
					cambiar={cambiar}
					elementId={id}
				/>
			</div>
		</div>
	)
}
