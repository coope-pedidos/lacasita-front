'use client'
import seleccionarComida from '@/components/seleccionarComida'
import {
	TituloComida,
	DescripcionVariedades,
	Precio,
	Promo,
	Dias,
	BotonPedir,
	Total,
} from '@/components/foodPageComponents'
import { Contador } from '@/components/contador'
import { foodPageStyles } from '@/app/styles'
import { useState } from 'react'
import { ProveedorDeContexto, usarContextoCarro } from '@/context/cartContext'

export default function Comida({ params }) {
	const { nombre, img, desc, variedades, precio, promo, dias, id } =
		seleccionarComida(params.FoodId)
	const { cart, setCart } = usarContextoCarro()
	const [cantidad, setCantidad] = useState(0)

	const handleChange = bool => {
		if (bool) {
			if (cantidad > 24) return
			setCantidad(cantidad + 1)
		} else {
			if (cantidad === 0) return
			setCantidad(cantidad - 1)
		}
	}
	const handleClick = () => {
		if (!cart[id]) {
			setCart({ ...cart, [id]: cantidad })
		} else {
			setCart({ ...cart, [id]: cart[id] + cantidad })
		}
	}
	return (
		<ProveedorDeContexto>
			<div
				className={foodPageStyles.outer}
				style={{ backgroundImage: `url(/${img})` }}>
				<div className={foodPageStyles.overlay}></div>
				<div className={foodPageStyles.column}>
					<TituloComida nombre={nombre} />
					{desc.length > 0 && <DescripcionVariedades desc={desc} tipo={desc} />}
					{variedades.length > 0 && (
						<DescripcionVariedades desc={variedades} tipo={'variedades'} />
					)}
					<div className={foodPageStyles.precioYPromoCont}>
						<Precio precio={precio} promo={promo} />
						{promo > 0 && <Promo promo={promo} />}
					</div>
					<Dias dias={dias} />
					<div className="h-24"></div>
				</div>

				<div className={foodPageStyles.bottomDiv}>
					<div className="flex items-center justify-between h-full">
						<Total cantidad={cantidad} precio={precio} promo={promo} />
						<Contador cantidad={cantidad} cambiar={bool => handleChange(bool)} />
					</div>
					<BotonPedir pedir={handleClick} />
				</div>
			</div>
		</ProveedorDeContexto>
	)
}
