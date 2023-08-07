export function calcularTotal({ cantidad, precio, promo }) {
	if (!promo) return cantidad * precio
	return cantidad % 2 === 0
		? (cantidad * promo) / 2
		: cantidad > 2
		? ((cantidad - 1) * promo) / 2 + precio
		: cantidad * precio
}
