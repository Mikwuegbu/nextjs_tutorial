import { InferGetStaticPropsType } from "next";

type Data = {
	id: number;
	title: string;
};

export default function Home({
	data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<main>
			{data.map((item) => (
				<li key={item.id}>{item.title}</li>
			))}
		</main>
	);
}

export const getStaticProps = () => {
	const data: Data[] = [
		{ id: 1, title: "First Post" },
		{ id: 2, title: "Second Post" },
	];
	return {
		props: {
			data,
		}, // will be passed to the page component as props
	};
};

// export function getStaticProps() {
// 	return {
// 		props: {
// 			data: [
// 				{ id: 1, title: "First Post" },
// 				{ id: 2, title: "Second Post" },
// 			],
// 		}, // will be passed to the page component as props
// 	};
// }
