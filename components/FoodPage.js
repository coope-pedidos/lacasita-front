import React from "react"
import { foods } from "/components/foods.js"

export class FoodPage extends React.Component {
  render() {
    const food = foods.find(food => food.id == this.props.foodId)
    const multipleDays = food.dias.length > 1 ? true : false
    return (
      <main className="flex flex-col justify-start items-center bg-green-200 w-screen h-screen">
        <h1 className="font-bold text-5xl my-5 text-green-900 text-center h-fit">
          {food.name}
        </h1>
        <img
          src={`/images/${food.img}`}
          className="w-11/12 rounded-lg shadow-md my-5"
        ></img>
        <p className="text-3xl text-center">{`Disponible el proximo ${
          !multipleDays.days
            ? food.dias[0].charAt(0).toUpperCase() + food.dias[0].slice(1)
            : "fecha patria"
        }.`}</p>
        {food.desc.map((paragraph, index) => {
          console.log(index)
          return (
            <p key={index} className="m-5">
              {paragraph}
            </p>
          )
        })}
      </main>
    )
  }
}
