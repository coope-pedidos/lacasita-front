import * as React from "react"
import { MainMenu } from "../components/MainMenu"
import { FoodPage } from "../components/FoodPage"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: <MainMenu onClick={i => this.changePage(i)} />,
    }
  }
  changePage(foodId) {
    this.setState({
      currentPage: <FoodPage foodId={foodId} />,
    })
  }
  render() {
    return this.state.currentPage
  }
}
export default function Home() {
  return <Main />
}
