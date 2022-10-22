import React from "react"
import { foods } from "/components/foods.js"

export class FoodPage extends React.Component {
  render() {
    const food = foods.find(food => food.id == this.props.foodId)
    const multipleDays = food.dias.length > 1 ? true : false
    return (
      <main className="flex flex-col justify-start items-center bg-green-100 w-screen h-screen">
        <h1 className="font-bold text-5xl my-5 text-green-900 text-center h-fit">
          {food.name}
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={`/images/${food.img}`}
            className="w-11/12 rounded-2xl shadow-lg drop-shadow-lg border-2 my-5 md:w-2/3 md:self-start md:mx-5 md:skew-x-3 md:-skew-y-3"
          ></img>
          <div>
            <p className="text-3xl text-center md:text-justify md:mx-5">{`Disponible el proximo ${
              !multipleDays.days
                ? food.dias[0].charAt(0).toUpperCase() + food.dias[0].slice(1)
                : "fecha patria"
            }.`}</p>
            {food.desc.map((paragraph, index) => {
              console.log(index)
              return (
                <p key={index} className="m-5 md:mx-5">
                  {paragraph}
                </p>
              )
            })}
            <p className="text-right text-xl45 mx-5 font-bold text-orange-500 text-shadow shadow-black">
              {food.precio + "$"}
            </p>
            <p className="text-right text-5xl mx-5 font-bold text-red-500 text-shadow shadow-black">
              {"2 x " + food.promo + "$"}
            </p>
          </div>
        </div>
      </main>
    )
  }
}
