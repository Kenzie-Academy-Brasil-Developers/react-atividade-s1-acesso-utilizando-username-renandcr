import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const HandleLogin = () => {
    return setIsLoggedIn(!isLoggedIn);
  };

  const HandleLogout = () => {
    return setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage
          login={HandleLogin}
          logout={HandleLogout}
          isLoggedIn={isLoggedIn}
        />
      </header>
    </div>
  );
}

export default App;
