/* eslint-disable react-refresh/only-export-components */
import axios, { AxiosError } from "axios";
import {
	ActionFunction,
	Form,
	redirect,
	useRouteError,
} from "react-router-dom";

interface AuthData {
	username: string;
	password: string;
}

export const login: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const payload = Object.fromEntries(formData);

	console.log("Submitting...", payload);

	(await axios.post("http://localhost:8080/auth/login", payload)).data;

	return redirect("/");
};

export function loader(): AuthData {
	return { username: "", password: "" };
}

const LoginPage = () => {
	const routeError = useRouteError() as AxiosError;
	const errorResponse = routeError?.response?.data as {
		error: boolean;
		message: string;
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<Form method="POST" className="flex flex-col w-4/5 sm:w-96">
				{errorResponse?.error && (
					<div className="bg-red-300 px-5 py-2 mb-5">
						{errorResponse?.message}
					</div>
				)}

				<input
					type="text"
					placeholder="Username"
					name="username"
					className="rounded placeholder-shown:border-gray-500 mb-4"
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="rounded placeholder-shown:border-gray-500 mb-6"
				/>

				<input type="submit" className="btn btn-blue cursor-pointer" />
			</Form>
		</div>
	);
};

export default LoginPage;
