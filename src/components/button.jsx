import { menuStyles } from '@/app/styles'
import Image from 'next/image'
export function Button({ imagen, titulo }) {
	return (
		<button className={menuStyles.button}>
			<Image
				src={`/${imagen}`}
				fill={true}
				style={{ objectFit: 'cover' }}
				alt="Picture of food"
				sizes="(max-width: 768px) 100vw (min-width:1200px) 30vw"
			/>
			<p className={menuStyles.btnText}>{titulo}</p>
		</button>
	)
}
