import React from "react"
import { foods } from "/components/foods.js"

export class MainMenu extends React.Component {
  render() {
    return (
      <main className="border-4 overflow-scroll fixed border-black flex flex-col items-center bg-green-100 w-screen h-screen">
        <h1 className="font-bold text-center my-16 text-5xl text-green-900">
          La Coope Pedidos
        </h1>
        <MenuBtns onClick={i => this.props.onClick(i)} />
      </main>
    )
  }
}

function MenuBtns(props) {
  return (
    <ul className="w-11/12 md:w-1/2 lg:w-1/3">
      {foods.map(food => {
        return (
          <button
            key={food.id}
            className={`w-full h-24 border-4 border-green-100 hover:border-green-300  relative z-10 overflow-hidden drop-shadow-lg cursor-pointer text-shadow hover:shadow-green-600 shadow-green-900 my-6 text-white text-4xl rounded-2xl font-bold bg-center bg-cover flex items-center justify-center`}
            onClick={() => props.onClick(food.id)}
          >
            <img
              src={`/images/${food.img}`}
              className="absolute z-0 w-full"
            ></img>
            <p className="z-20">{food.name}</p>
          </button>
        )
      })}
    </ul>
  )
}
