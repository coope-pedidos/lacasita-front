import React from "react"
import { calculateTotalPrice } from "./calculateTotalPrice"

export class FoodPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentAmmount: 0,
			total: 0,
		}
	}
	setTotal(ammount, food) {
		this.setState({
			total: calculateTotalPrice(ammount, food),
		})
	}
	updateAmmount(boolean) {
		if (!boolean && !this.state.currentAmmount) return
		this.setState({
			currentAmmount: boolean
				? (this.state.currentAmmount += 1)
				: (this.state.currentAmmount -= 1),
		})
	}
	render() {
		const food = this.props.food
		return (
			<>
				<TituloComida food={food} />
				<div className="flex flex-col md:flex-row w-full pb-20">
					<Imagen food={food} />
					<div className="px-10">
						<Dias food={food} />
						<p className="m-5 md:mx-5">{food.desc}</p>
						<Variedades variedades={food.variedades} />
						<Precio food={food} />
						<Promo food={food} />
						<CantidadDeProducto
							food={food}
							currentAmmount={this.state.currentAmmount}
							updateAmmount={i => {
								this.updateAmmount(i)
							}}
							setTotal={(a, b) => {
								this.setTotal(a, b)
							}}
						/>
					</div>
				</div>
				<Total total={this.state.total} />
				<AgregarPedido />
			</>
		)
	}
}
function TituloComida(props) {
	return (
		<h1 className="font-bold text-5xl my-5 text-green-700 text-center h-fit">
			{props.food.nombre}
		</h1>
	)
}
function Imagen(props) {
	return (
		<img
			src={`/images/${props.food.img}`}
			className="w-11/12 my-5 rounded-2xl shadow-lg drop-shadow-lg self-center
            border-2 md:w-2/3 md:self-start md:mx-5 md:skew-x-3 md:-skew-y-3"
		/>
	)
}
function Dias(props) {
	return (
		<p className="text-3xl text-center md:text-left md:mx-5">
			{props.food.dias.length <= 1
				? `Todos los ${
						props.food.dias[0].charAt(0).toUpperCase() +
						props.food.dias[0].slice(1)
				  }`
				: "Proximo: fecha patria"}
		</p>
	)
}
function Variedades(props) {
	if (props.variedades.length) {
		return (
			<p className="self-start">
				<p>Variedades:</p>
				<br />

				{props.variedades.map((paragraph, index) => {
					return (
						<>
							{paragraph}
							<br />
						</>
					)
				})}
				<br />
			</p>
		)
	}
}
function Precio(props) {
	return (
		<p
			className={`text-right text-xl45 font-bold ${
				props.food.promo ? "text-orange-600" : "text-red-600"
			}
text-shadow shadow-gray-600`}>
			{"$" + props.food.precio}
		</p>
	)
}
function Promo(props) {
	return (
		<p
			className="
text-right text-5xl font-bold text-red-600 
text-shadow shadow-gray-600">
			{props.food.promo ? "2 x " + "$" + props.food.promo : ""}
		</p>
	)
}
function CantidadDeProducto(props) {
	return (
		<div className="flex flex-col items-end my-5 ">
			<div className="flex items-center">
				<p className="mr-5">Agregar:</p>
				<button
					onClick={() => {
						props.updateAmmount(false)
						props.setTotal(
							props.currentAmmount
								? props.currentAmmount - 1
								: props.currentAmmount,
							props.food
						)
					}}
					className="w-6  text-xl bg-green-600 font-bold text-white rounded-lg border border-green-300 ">
					<p>-</p>
				</button>
				<input
					className="w-8 bg-green-100 p-1 text-center"
					type="text"
					value={props.currentAmmount}
					readOnly></input>
				<button
					onClick={() => {
						props.updateAmmount(true)
						props.setTotal(props.currentAmmount + 1, props.food)
					}}
					className="w-6 text-xl bg-green-600 font-bold text-white rounded-lg border border-green-300 ">
					+
				</button>
			</div>
		</div>
	)
}
function Total(props) {
	return (
		<div className="fixed w-screen h-8 bg-orange-300 bottom-10 left-0 font-bold flex items-center justify-between text-xl text-white text-shadow-brd shadow-red-900 px-5">
			<p>Total:</p>
			<p>{"$ " + props.total}</p>
		</div>
	)
}
function AgregarPedido(props) {
	return (
		<div className="fixed w-screen h-10 bg-green-400 bottom-0 left-0 font-bold flex items-center justify-center text-xl text-white text-shadow-brd shadow-green-900 cursor-pointer">
			Agregar Pedido
		</div>
	)
}
