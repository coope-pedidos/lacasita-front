import Link from "next/link"
import { Comidas, Paginas } from "../../config"
import { Button } from "@/components/button"
import { menuStyles } from "./styles"

export default function Home() {
	return (
		<>
			<h1 className={menuStyles.title}>La Coope Pedidos</h1>
			<nav className={menuStyles.btnList}>
				{Comidas.map(comida => {
					return (
						<Link href={`${Paginas.Comida}/${[comida.id]}`} key={comida.id}>
							<Button imagen={comida.img} titulo={comida.nombre} />
						</Link>
					)
				})}
			</nav>
		</>
	)
}
