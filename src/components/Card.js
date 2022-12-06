import React from 'react';

const Card = ({ country }) => {
  return (
    <div class="card col-md-2">
      <img
        src={country.flags.svg}
        alt={`drapeau ${country.translations.fra.common}`}
      />
      <div class="card-body">
        <h5 class="card-title">{country.translations.fra.common}</h5>
        <p class="card-text">{country.capital}</p>
      </div>
    </div>
  );
};

export default Card;
