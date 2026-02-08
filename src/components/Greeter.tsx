import React, { type JSX } from "react";

export default function Greeter(): JSX.Element {
  // the infer type here is optional because ts knows it's a ts element
  return <h1>Greeter!</h1>;
}
