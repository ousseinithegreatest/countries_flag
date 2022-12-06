import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container px-4 mt-3">
      <div className="row gx-3">
        {data.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
