import React from "react"
import { foods } from "/components/foods.js"

export class MainMenu extends React.Component {
  render() {
    return (
      <main className="flex flex-col start items-center bg-green-200 w-screen h-screen">
        <h1 className="font-bold text-center my-20 text-5xl text-green-900">
          La Coope Pedidos
        </h1>
        <MenuBtns onClick={i => this.props.onClick(i)} />
      </main>
    )
  }
}

function MenuBtns(props) {
  return (
    <ul>
      {foods.map(food => {
        return (
          <li
            key={food.id}
            className={`bg-${food.keyword} h-20 cursor-pointer text-shadow shadow-green-900 m-5 w-80 text-white text-4xl rounded-lg font-bold bg-center bg-cover flex items-center justify-center`}
            onClick={() => props.onClick(food.id)}
          >
            {food.name}
          </li>
        )
      })}
    </ul>
  )
}
