'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Paginas } from '../../config'
import { navbarStyles } from '@/app/styles'
import { useEffect } from 'react'
import { usarContextoCarro } from '@/context/cartContext'

function Navbar() {
	const { cart, setCart } = usarContextoCarro()
	let elements = Object.values(cart).length
		? Object.values(cart).reduce((a, v) => parseInt(a) + parseInt(v))
		: null
	useEffect(() => {
		if (!Object.values(cart).length) return
		elements = Object.values(cart).reduce((a, v) => parseInt(a) + parseInt(v))
	}, [cart])
	return (
		<nav className={navbarStyles.bar}>
			<Link href={Paginas.Menu} className={navbarStyles.menuContainer}>
				<Image
					src="/logo.png"
					className={navbarStyles.menuImg}
					height={50}
					width={35}
					alt="Logo"
				/>
				<p className={navbarStyles.menuText}>Menu</p>
			</Link>
			<Link href={Paginas.Carro} className={navbarStyles.cartContainer}>
				{Object.values(cart).length > 0 && (
					<div className=" rounded-full w-4 h-4 bg-blue-400 absolute top-0 right-0 flex items-center justify-center text-sm font-medium">
						{elements}
					</div>
				)}
				<Image
					src="/cart.png"
					className={navbarStyles.cartImg}
					height={50}
					width={35}
					alt="Cart image"
				/>
			</Link>
		</nav>
	)
}
export default Navbar
