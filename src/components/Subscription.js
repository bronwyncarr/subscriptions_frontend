import { useEffect, useState } from "react";
import { Card } from "./../styles/AppStyles";
import { Link } from "react-router-dom";

export function Subscription(props) {
  const [sub, setSub] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://sheetdb.io/api/v1/yj4ottmcbpj2r/search?id=${id}`
      );
      const [data] = await res.json();
      setSub(data);
    };
    fetchData();
  }, [id]);

  return (
    sub && (
      <>
        <h1>Subscription</h1>
        <Card>
          <h2>Name: {sub.name}</h2>
          <p>Price: {sub.price_per_month}</p>
          <p>Billing period: {sub.billing_period}</p>
          <Link to="/" onClick={(e) => props.history.goBack}>
            Back
          </Link>
        </Card>
      </>
    )
  );
}
