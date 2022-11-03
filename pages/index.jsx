import * as React from "react"
import { MainMenu } from "../components/MainMenu"
import { FoodPage } from "../components/FoodPage"
import { Navbar } from "../components/Navbar"
import { Cart } from "../components/Cart"

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: <MainMenu onClick={i => this.openFoodPage(i)} />,
			cartElements: [],
			subTotal: 0,
		}
	}
	agregarAlCarro(id, nombre, img, precioUnidad, precioPromo, cantidad) {
		if (!cantidad) return
		if (!this.state.cartElements.length) {
			this.setState({
				cartElements: [
					{
						id,
						nombre,
						img,
						precioUnidad,
						precioPromo,
						cantidad,
					},
				],
			})
		} else if (!this.state.cartElements.some(obj => obj.id === id)) {
			this.state.cartElements.push({
				id,
				nombre,
				img,
				precioUnidad,
				precioPromo,
				cantidad,
			})
		} else {
			this.state.cartElements.find(o => o.id === id).cantidad += cantidad
		}
	}
	eliminarDelCarro(id, removerTodo = false) {
		if (!removerTodo) {
			if (this.state.cartElements.find(o => o.id === id).cantidad <= 1) return
			this.state.cartElements.find(o => o.id === id).cantidad -= cantidad
		} else {
			this.state.cartElements.splice(
				this.state.cartElements.findIndex(e => e.id === id)
			)
		}
	}
	openFoodPage(food) {
		this.setState({
			currentPage: (
				<FoodPage
					food={food}
					agregarAlCarro={(
						id,
						nombre,
						img,
						precioUnidad,
						precioPromo,
						cantidad
					) =>
						this.agregarAlCarro(
							id,
							nombre,
							img,
							precioUnidad,
							precioPromo,
							cantidad
						)
					}
				/>
			),
		})
	}
	openMainMenu() {
		this.setState({
			currentPage: <MainMenu onClick={i => this.openFoodPage(i)} />,
		})
	}
	openCartPage() {
		this.setState({
			currentPage: <Cart cartElements={this.state.cartElements} />,
		})
	}
	render() {
		return (
			<>
				<Navbar
					onClickMenu={() => this.openMainMenu()}
					onClickCart={() => this.openCartPage()}
				/>
				<main
					className="
          pt-16 flex flex-col items-center overflow-scroll fixed   
          w-screen h-screen bg-green-100">
					{this.state.currentPage}
				</main>
			</>
		)
	}
}
export default function Home() {
	return <Main />
}
