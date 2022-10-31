export function Navbar(props) {
	return (
		<nav className="z-10 drop-shadow-md shadow-black fixed flex w-screen h-10 bg-green-700 p-1 justify-between">
			<div
				className="flex basis-24 items-center bg-red-500 cursor-pointer"
				onClick={() => props.onClickMenu()}>
				<img src="/images/logo.png" className="h-full cursor-pointer" />
				<p className="ml-1 text-white font-bold text-shadow-sm shadow-green-500">
					Menu
				</p>
			</div>
			<div
				className="flex justify-end bg-blue-500 basis-10"
				onClick={() => props.onClickCart()}>
				<img src="/images/cart.png" className="cursor-pointer" />
			</div>
		</nav>
	)
}
