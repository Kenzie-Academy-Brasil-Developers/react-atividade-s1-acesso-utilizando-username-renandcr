import { useState } from "react";
import "./index.css";

function WelcomePage({ login, logout, isLoggedIn }) {
  const [user, setUser] = useState("");
  return (
    <div>
      {isLoggedIn ? (
        <div className="div-greetings">
          <h1 className="h1-greetings">Seja bem vindo {user}!</h1>
          <button className="button-logout" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div className="div-form">
          <form action="">
            <input
              className="input-login"
              type="text"
              placeholder="Insira seu nome"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <button className="button-login" onClick={login}>
              Acessar com o nome
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default WelcomePage;
