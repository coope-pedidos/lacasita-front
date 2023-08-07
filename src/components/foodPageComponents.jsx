import { foodPageStyles } from '@/app/styles'
import { calcularTotal } from './calcularTotal'

export const TituloComida = ({ nombre }) => {
	return <h1 className={foodPageStyles.title}>{nombre}</h1>
}

export const DescripcionVariedades = ({ desc, tipo }) => {
	return (
		<div className={foodPageStyles.description}>
			{tipo === 'variedades' && <p className="font-semibold">Variedades:</p>}
			{tipo === 'variedades' ? desc.map((v, i) => <li key={i}>{v}</li>) : desc}
		</div>
	)
}
export const Precio = ({ precio, promo }) => {
	return (
		<div className={promo ? foodPageStyles.precio : foodPageStyles.promo}>
			$ {precio}
		</div>
	)
}
export const Promo = ({ promo }) => {
	return <div className={foodPageStyles.promo}>2 x $ {promo}</div>
}

export const Dias = ({ dias }) => {
	return <div className={foodPageStyles.dias}>Todos los {dias}!</div>
}
export const Total = ({ cantidad, precio, promo }) => {
	return (
		<div className={foodPageStyles.total}>
			$ {calcularTotal({ cantidad, precio, promo })}
		</div>
	)
}

export function BotonPedir({ pedir }) {
	return (
		<div className="flex items-center justify-center text-2xl font-semibold cursor-pointer hover:text-lime-200 h-1/2">
			<div
				onClick={pedir}
				className="rounded-lg border-green-900 border-2 w-full h-full flex items-center justify-center hover:border-green-300">
				Agregar al carro!
			</div>
		</div>
	)
}
