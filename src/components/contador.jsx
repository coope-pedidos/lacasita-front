import { contadorStyles } from '@/app/styles'

export const Contador = ({ cantidad, cambiar, elementId, card }) => {
	return (
		<div className={contadorStyles.contadorOuter}>
			<MasMenos
				bool={false}
				card={card}
				cambiar={cambiar}
				elementId={elementId}
			/>
			<div
				className={
					card
						? 'text-green-700 ' + contadorStyles.contadorCant
						: contadorStyles.contadorCant
				}>
				{cantidad}
			</div>
			<MasMenos
				bool={true}
				card={card}
				cambiar={cambiar}
				elementId={elementId}
			/>
		</div>
	)
}

const MasMenos = ({ bool, card, elementId, cambiar }) => {
	return (
		<div
			className={`${contadorStyles.contadorMasMenos} ${
				card && contadorStyles.contadorMasMenosCard
			}`}
			onClick={() =>
				cambiar(bool, typeof elementId !== 'undefined' && elementId)
			}>
			{bool ? '+' : '-'}
		</div>
	)
}
