import { Form, Label, Button } from "./../styles/AppStyles";
import { useState } from "react";

export function NewSubscription({ history }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch("https://sheetdb.io/api/v1/yj4ottmcbpj2r", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              id: "INCREMENT",
              name,
              price_per_month: price,
              billing_period: billingPeriod,
            },
          ],
        }),
      });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1> New Subscription</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Netflix"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <Label htmlFor="price">Price:</Label>
        <input
          type="text"
          name="price"
          id="price"
          placeholder="20"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <Label htmlFor="billing_period">Billing Period:</Label>
        <select
          name="billing_period"
          id="billing_period"
          value={billingPeriod}
          onChange={(e) => setBillingPeriod(e.target.value)}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <Button id="submit" type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
