import React, { type JSX } from "react";
// if we have much props we can use an interface to make things easier for us
interface GreeterProps {
  person: string;
}
export default function Greeter({ person }: GreeterProps): JSX.Element {
  // the infer type here is optional because ts knows it's a ts element
  return <h1>Greeter,{person}!</h1>;
}
