import React, { useState, useEffect } from "react";

export function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://sheetdb.io/api/v1/yj4ottmcbpj2r");
      const data = await result.json();
      setSubscriptions(data);
    };
    fetchData();
  }, []);
  return (
    <>
      {subscriptions.map((sub, index) => {
        return (
          <div key={index}>
            <h2>Name: {sub.name}</h2>
            <p>Price: {sub.price_per_month}</p>
            <p>Billing period: {sub.billing_period}</p>
          </div>
        );
      })}
    </>
  );
}
