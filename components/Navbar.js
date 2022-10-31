export function Navbar(props) {
	return (
		<nav className="z-10 drop-shadow-md shadow-black fixed flex w-screen h-10 bg-green-700 p-1 justify-between">
			<div className="flex basis-24 items-center  ">
				<img src="/images/logo.png" className="h-full cursor-pointer" />
				<p
					onClick={() => props.onClickMenu()}
					className="cursor-pointer ml-1 text-white font-bold text-shadow-sm shadow-green-500">
					Menu
				</p>
			</div>
			<div className="flex justify-end ">
				<img src="/images/cart.png" className="cursor-pointer" />
			</div>
		</nav>
	)
}
