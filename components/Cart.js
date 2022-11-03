import Image from "next/image"
import { calcularPrecioTotal } from "./calcularPrecioTotal"
import { CantidadDeProducto } from "./FoodPage"

export function Cart(props) {
	return (
		<>
			{props.cartElements.map(comida => {
				return (
					<CartElement
						key={comida.id}
						nombre={comida.nombre}
						imgSrc={comida.img}
						precioUnidad={comida.precioUnidad}
						precioPromo={comida.precioPromo}
						cantidad={comida.cantidad}
					/>
				)
			})}
		</>
	)
}

function CartElement(props) {
	return (
		<div className="flex w-11/12 h-32 relative shadow-lg rounded-xl overflow-hidden mb-5">
			<div className="shrink-0 bg-red-500 w-32 overflow-x-hidden relative">
				<Image
					src={`/images/${props.imgSrc}`}
					objectFit="cover"
					layout="fill"
					alt="Img of food"
				/>
			</div>
			<div className="w-full flex-col bg-green-100 ">
				<div className="w-full flex items-top justify-left pl-3 pt-3 h-1/2">
					<p className="text-lg text-green-900 font-bold">{props.nombre}</p>
					<button
						type="button"
						className="bg-green-100 absolute right-2 top-2 rounded-full p-1 inline-flex items-center justify-center text-red-300 hover:text-gray-500  focus:outline-none focus:ring-2  focus:ring-inset focus:ring-green-500">
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div className="flex items-center bg-red-100 h-1/2">
					<div className="w-1/2 flex items-center justify-center">
						{props.cantidad}
					</div>
					<div className="text-right">
						{calcularPrecioTotal(props.cantidad, {
							precio: props.precioUnidad,
							promo: props.precioPromo,
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
