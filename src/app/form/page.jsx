'use client'

import { usarContextoCarro } from '@/context/cartContext'

export default function Form() {
	const { cart, setCart } = usarContextoCarro()

	return (
		<div className="pt-32 flex flex-col">
			<TextInput type={'text'} placeholder={'Nombre...'} />
			<TextInput type={'text'} placeholder={'Apellido...'} />
			<TextInput type={'tel'} placeholder={'Numero de telefono (Whatsapp)'} />
		</div>
	)
}
const TextInput = ({ placeholder, type }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="input input-bordered input-primary w-full max-w-xs mb-4"
		/>
	)
}
