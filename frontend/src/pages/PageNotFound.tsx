import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
	const error = useRouteError();
	console.log(error.message);

	return (
		<div className="bg-black text-white font-bold flex justify-center items-center h-screen">
			<div className="text-center">
				<h1 className="text-4xl text-red-600">404</h1>
				<p>Page not found</p>
				<p>🚧😔🚫</p>
			</div>
		</div>
	);
};

export default PageNotFound;
