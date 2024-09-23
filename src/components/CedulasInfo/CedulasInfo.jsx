import React from 'react';

function CedulasInfo({ cedulas, totalCedulas }) {
  return (
    cedulas && (
      <div>
        <h2>Lista de Cédulas:</h2>
        <p>{cedulas}</p>
        <p>Total de Cédulas: {totalCedulas}</p>
      </div>
    )
  );
}

export default CedulasInfo;
