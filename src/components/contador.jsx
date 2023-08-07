import { contadorStyles } from '@/app/styles'

export const Contador = ({ cantidad, cambiar, elementId }) => {
	return (
		<div className={contadorStyles.contadorOuter}>
			<div
				className={contadorStyles.contadorMasMenos}
				onClick={() =>
					cambiar(false, typeof elementId !== 'undefined' && elementId)
				}>
				-
			</div>
			<div className="flex items-center justify-center font-bold text-xl">
				{cantidad}
			</div>
			<div
				className={contadorStyles.contadorMasMenos}
				onClick={() =>
					cambiar(true, typeof elementId !== 'undefined' && elementId)
				}>
				+
			</div>
		</div>
	)
}
