import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { layoutStyles } from './styles'
import { ProveedorDeContexto } from '@/context/cartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'La Casita Coope Pedidos',
}

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<ProveedorDeContexto>
					<Navbar />
					<main className={layoutStyles.main}>{children}</main>
				</ProveedorDeContexto>
			</body>
		</html>
	)
}
