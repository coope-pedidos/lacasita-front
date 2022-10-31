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
		}
	}
	openFoodPage(food) {
		this.setState({
			currentPage: <FoodPage food={food} />,
		})
	}
	openMainMenu() {
		this.setState({
			currentPage: <MainMenu onClick={i => this.openFoodPage(i)} />,
		})
	}
	render() {
		return (
			<>
				<Navbar onClickMenu={() => this.openMainMenu()} />
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
