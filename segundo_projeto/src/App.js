import React, { useState } from "react";
import dados from "./dados";
import "./App.css";

function App() {
  const [procurarDados, setprocurarDados] = useState("");

  const handleSearchChange = (event) => {
    setprocurarDados(event.target.value.toLowerCase());
  };

  const dadosCidades = dados.filter((item) =>
    item.nome.toLowerCase().includes(procurarDados)
  );

  return (
    <div className="boxCompleta">
      <h1>Clima Brasileiro</h1>
      <div className="pesquisa">
        <input
          type="text"
          required
          placeholder="Buscar por cidade..."
          value={procurarDados}
          onChange={handleSearchChange}
        />
      </div>
      {procurarDados && (
        <ul className="lista">
          {dadosCidades.length > 0 ? (
            dadosCidades.map((item, index) => (
              <div className="resultado" key={index}>
                <li>
                  {item.nome} - {item.temp} - {item.previsao}
                </li>
              </div>
            ))
          ) : (
            <li className="resultado">Nenhum resultado encontrado</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;