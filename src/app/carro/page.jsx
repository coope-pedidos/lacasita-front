'use client'
import { Card } from '@/components/cartCards'
import { usarContextoCarro } from '@/context/cartContext'

export default function Cart() {
	const { cart, setCart } = usarContextoCarro()

	const handleDelete = foodId => {
		setCart(current => {
			const { [foodId]: oldId, ...rest } = current
			return rest
		})
	}
	const handleChange = (bool, foodId) => {
		if (bool) {
			if (cart[foodId] > 24) return

			setCart({ ...cart, [foodId]: cart[foodId] + 1 })
		} else {
			if (cart[foodId] === 1) return
			setCart({ ...cart, [foodId]: cart[foodId] - 1 })
		}
	}
	return (
		<div className="pt-20 flex flex-col items-center w-full">
			{Object.keys(cart).length ? (
				Object.keys(cart).map(cartElementKey => {
					return (
						<Card
							id={cartElementKey}
							deleteElement={id => handleDelete(id)}
							key={cartElementKey}
							cantidad={cart[cartElementKey]}
							cambiar={handleChange}
						/>
					)
				})
			) : (
				<div className="text-green-800 font-semibold text-3xl">
					El carro está vacio!!
				</div>
			)}
		</div>
	)
}
