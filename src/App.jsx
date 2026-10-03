import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/AuthContext";


function App() {
  
  return (
    <AuthProvider>
      <Header/>
      <Home/>
      <Profile/>
    </AuthProvider>
  
  );
}

export default App
