import Header from '@/components/Header/Header'
import Films from '@/components/page-screens/Films/Films'
import Hero from '@/components/page-screens/Hero/Hero'

export default function Home() {
	const number = 5

	return (
		<main className="">
			<Hero />
			<Films />
		</main>
	)
}
