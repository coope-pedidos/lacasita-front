'use client'
import { createContext, useContext, useState } from 'react'

const ContextoCarro = createContext({})

export const ProveedorDeContexto = ({ children }) => {
	const [cart, setCart] = useState({})

	return (
		<ContextoCarro.Provider value={{ cart, setCart: setCart }}>
			{children}
		</ContextoCarro.Provider>
	)
}

export const usarContextoCarro = () => useContext(ContextoCarro)
