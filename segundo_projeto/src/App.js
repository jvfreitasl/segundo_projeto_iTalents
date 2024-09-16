import React, { useState } from "react";
import dados from "./dados";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = dados.filter((item) =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="titulo">
      <h1>Clima Brasileiro</h1>
      <div className="pesquisa">
        <input
          type="text"
          required
          placeholder="Buscar por cidade..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {searchTerm && (
        <ul className="lista">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div className="resultado">
                <li key={index}>
                  {item.nome} - {item.temp} - {item.previsao}
                </li>
              </div>
            ))
          ) : (
            <li>Nenhum resultado encontrado</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
