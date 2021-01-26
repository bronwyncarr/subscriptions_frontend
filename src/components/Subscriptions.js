import React, { useState, useEffect } from "react";
import { Card, SubWrapper } from "../styles/AppStyles";
import { Link } from "react-router-dom";

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
      <h1>Subscriptions</h1>
      <SubWrapper>
        {subscriptions.map((sub, index) => {
          return (
            <Card key={index}>
              <h2>Name: {sub.name}</h2>
              <p>Price: ${sub.price_per_month}</p>
              <p>Billing period: {sub.billing_period}</p>
              <Link to={`/subscriptions/${sub.id}`}>Details</Link>
            </Card>
          );
        })}
      </SubWrapper>
    </>
  );
}
