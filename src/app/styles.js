export const navbarStyles = {
	bar: 'z-10 drop-shadow-md shadow-black fixed flex w-screen h-10 bg-gradient-to-r from-green-600 to-green-700 p-1 px-3 justify-between',
	menuContainer: 'flex basis-24 items-center  cursor-pointer',
	menuImg: 'h-full cursor-pointer',
	menuText: 'ml-1 text-white font-bold text-shadow-sm shadow-green-500',
	cartContainer: 'flex justify-end basis-10 relative',
	cartImg: 'cursor-pointer',
}
export const layoutStyles = {
	main: 'flex flex-col items-center overflow-scroll fixed w-screen h-screen bg-gradient-to-br from-green-200 to-green-300 overflow-x-hidden',
}
export const menuStyles = {
	title:
		'mt-20 font-bold text-center mb-16 text-5xl text-green-700 drop-shadow-md shadow-green-900',
	btnList: 'w-11/12 md:w-1/2 lg:w-1/3',
	button: `relative w-full h-24 border-4 z-10 overflow-hidden flex items-center
         justify-center rounded-2xl border-green-100 hover:border-white 
         drop-shadow-lg cursor-pointer text-white text-shadow shadow-green-900 my-6 hover:text-green-100 hover:opacity-90`,
	btnText:
		'relative z-20 font-bold drop-shadow-[0px_0px_3px_rgba(0,0,0,0.8)] text-4xl ',
}
export const foodPageStyles = {
	outer: 'hero min-h-screen overflow-y-scroll',
	overlay:
		'hero-overlay bg-opacity-30 bg-gradient-to-br from-green-200 via-transparent to-green-900/80',
	title:
		'h-fit font-bold text-6xl py-5 drop-shadow-titleBW bg-gradient-to-br from-lime-400 to-green-500 text-transparent bg-clip-text text-center min-h-20',
	column: 'self-start mt-10 w-5/6 h-3/5 flex flex-col justify-between',
	description:
		'mb-5 max-w-lg self-center font-medium backdrop-blur-xl  bg-opacity-70 border-2 border-green-300 rounded-lg p-2',
	precioYPromoCont: 'self-end flex flex-col justify-between items-end',
	precio:
		'bg-gradient-to-br from-orange-200 to-orange-500 text-transparent bg-clip-text text-4xl font-bold',
	promo:
		'bg-gradient-to-br from-lime-200 to-green-400 text-transparent bg-clip-text text-5xl font-bold',
	dias: 'self-end text-2xl text-lime-100',
	bottomDiv:
		'p-2 fixed bottom-0 left-0 w-full h-1/6 bg-gradient-to-br from-green-500 to-green-800 flex flex-col items-stretch justify-items-stretch',
	total: 'flex items-center justify-center text-2xl font-bold',
}

export const contadorStyles = {
	contadorOuter: 'flex justify-between items-center h-full w-1/5',
	contadorMasMenos:
		'h-2/3 flex w-1/3 justify-center drop-shadow-md shadow-green-900 items-center font-bold text-3xl border-2 border-green-900 cursor-pointer rounded-lg hover:border-green-300 hover:text-lime-200',
	contadorMasMenosCard: 'bg-green-500',
	contadorCant: 'flex items-center justify-center font-bold text-xl',
}

export const closeButtonStyles = {
	wrapper: 'w-7 h-10 overflow-hidden m-2',
	button: 'btn btn-circle btn-outline btn-error w-full priority:h-7 min-h-0',
}
