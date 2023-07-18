import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
	const { username, password, setUsername, setPassword, login } = useAuth();

	const handleSubmit = (event) => {
		event.preventDefault();

		login();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<input type="submit" />
		</form>
	);
};

export default LoginPage;
