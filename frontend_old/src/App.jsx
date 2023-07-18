import "./App.css";
import { AuthProvider } from "./hooks/useAuth";
import LoginPage from "./pages/auth/LoginPage";

function App() {
	return (
		<AuthProvider>
			<LoginPage />
		</AuthProvider>
	);
}

export default App;
