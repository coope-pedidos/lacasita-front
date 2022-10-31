import { comidas } from "./comidas"

export function MainMenu(props) {
	return (
		<>
			<h1 className="font-bold text-center mb-16 mt-10 text-5xl text-green-700 text-shadow-sm shadow-green-400">
				La Coope Pedidos
			</h1>
			<MenuBtns onClick={i => props.onClick(i)} />
		</>
	)
}

function MenuBtns(props) {
	return (
		<ul className="w-11/12 md:w-1/2 lg:w-1/3">
			{comidas.map(food => {
				return (
					<button
						key={food.id}
						className={`relative w-full h-24 border-4 z-10 overflow-hidden
            flex items-center justify-center
            rounded-2xl border-green-100 hover:border-green-300  
            drop-shadow-lg cursor-pointer 
            text-shadow hover:shadow-green-600 shadow-green-900 my-6  
             `}
						onClick={() => props.onClick(food)}>
						<img
							src={`/images/${food.img}`}
							className="absolute z-0 w-full"></img>
						<p className="z-20 font-bold text-white text-4xl">{food.nombre}</p>
					</button>
				)
			})}
		</ul>
	)
}
