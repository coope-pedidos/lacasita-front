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
	agregarAlCarro(comida, cantidad, total) {
		if (!this.state.cartElements.some(obj => obj.nombre === comida)) {
			this.setState({
				cartElements: [
					{
						nombre: comida,
						cantidad: cantidad,
						total: total,
					},
				],
			})
		} else {
			this.state.cartElements.find(o => o.nombre === comida).cantidad +=
				cantidad
			this.state.cartElements.find(o => o.nombre === comida).total += total
		}
	}
	openFoodPage(food) {
		this.setState({
			currentPage: (
				<FoodPage
					food={food}
					agregarAlCarro={(comida, cantidad, total) =>
						this.agregarAlCarro(comida, cantidad, total)
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
			currentPage: <Cart />,
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
