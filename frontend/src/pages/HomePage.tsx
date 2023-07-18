import { Link, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
	console.log("Params:", params);

	await new Promise((res) => {
		setTimeout(res, 1000);
	});

	return null;
};

export const getProfile = async () => {
	// const id = params.id ?? '';

	// Use the ID to get the profile
	return {
		username: "johndoe",
		fullname: "John Doe",
	};
};

const HomePage = () => {
	const profile = useLoaderData();

	console.log(profile);

	return (
		<div className="h-screen flex flex-col justify-center items-center ">
			<Link to="/login" className="text-blue-500 underline">
				Login
			</Link>

			<h1 className="font-bold text-3xl pt-2">Home Page</h1>
		</div>
	);
};

export default HomePage;
