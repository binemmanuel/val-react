import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import HomePage, { getProfile } from "./pages/HomePage";
import LoginPage, {
	loader as loginLoader,
	login,
} from "./pages/auth/LoginPage";
import PageNotFound from "./pages/PageNotFound";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/:id",
		loader: getProfile,
		element: <HomePage />,
		errorElement: <PageNotFound />,
	},
	{
		path: "login",
		action: login,
		loader: loginLoader,
		element: <LoginPage />,
		errorElement: <LoginPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
