import Card from "@/components/Card";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col items-center gap-8 text-6xl row-start-2 items-center ">
				Hello World
				<Card
					title={"Hello"}
					ID={1369}
					body={"I am a body here and there and everywhere!"}
				/>
			</main>
		</div>
	);
}
