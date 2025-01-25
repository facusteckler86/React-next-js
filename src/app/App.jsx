import "./App.jsx";
import { useState } from "react";

function App() {
  const [user, setUser] = useState('Facundo');
  const handleClick = () => {
    setUser("Pedrito");
  };

  return (
    <>
      <section className="container">
        <h1
          style={{
            backgroundColor: "ffffff",
            fontSize: "50%",
            fontFamily: "cursive",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            borderBlockColor: "black",
          }}
        >
          Esta es mi primer aplicación de React, realizada por {user}
        </h1>
        <button onClick={handleClick}>Cambio de nombre</button>
      </section>
    </>
  );
}

export default App;
