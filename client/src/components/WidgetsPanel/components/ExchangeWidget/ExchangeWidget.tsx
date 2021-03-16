import React, { useEffect, useState } from 'react';
import styles from './ExchangeWidget.module.css';

const ExchangeWidget = ({ currency }: { currency: string }) => {
  const [eur, setEur] = useState(0);
  const [usd, setUsd] = useState(0);
  const [rub, setRub] = useState(0);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/918d60db00608b42af4e8eb4/pair/EUR/${currency}`)
      .then((res) => res.json())
      .then((result) => setEur(result.conversion_rate));
  }, []);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/918d60db00608b42af4e8eb4/pair/USD/${currency}`)
      .then((res) => res.json())
      .then((result) => setUsd(result.conversion_rate));
  }, []);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/918d60db00608b42af4e8eb4/pair/RUB/${currency}`)
      .then((res) => res.json())
      .then((result) => setRub(result.conversion_rate));
  }, []);

  return (
    <div className={styles.container}>
      <p>{`EUR: ${eur.toFixed(2)}`}</p>
      <p>{`USD: ${usd.toFixed(2)}`}</p>
      <p>{`RUB: ${rub.toFixed(2)}`}</p>
    </div>
  );
};

export default ExchangeWidget;
