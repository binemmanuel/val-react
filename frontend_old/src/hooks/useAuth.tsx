import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [loginToken, setLoginToken] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const login = async () => {
		try {
			/* if (!username) {
				return setUsernameError("Please enter a username");
			}

			if (!password) {
				return setPasswordError("Please enter a password");
			} */

			const payload = {
				username,
				password,
			};

			// login

			const response = await axios.post(
				"http://localhost:8080/auth/login",
				payload
			);

			return response.data;
			// const response = (
			// 	await axios.post("http://localhost:8080/auth/login", payload)
			// ).data;

			// console.log(response);
		} catch (error) {
			console.log(error.response.data);
			// console.log(error.data.response.data);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				// Getter
				username,
				password,
				loginToken,

				// Setters
				setUsername,
				setPassword,

				// Auth Error
				usernameError,
				passwordError,

				// Auth Functions
				login,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
