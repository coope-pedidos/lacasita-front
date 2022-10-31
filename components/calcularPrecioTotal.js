export function calcularPrecioTotal(ammount, food) {
	if (food.promo && ammount % 2 == 0) {
		return (ammount / 2) * food.promo
	} else if (food.promo && ammount > 1) {
		const promoPrice = ((ammount - 1) / 2) * food.promo
		return promoPrice + food.precio
	} else {
		return ammount * food.precio
	}
}
