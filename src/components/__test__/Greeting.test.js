// src/components/__tests__/Greeting.test.js
import React from "react";
import { render } from "@testing-library/react";
import Greeting from "../Greeting";

test("muestra un saludo con el nombre correcto", () => {
  const { getByText } = render(<Greeting name="Abdel" />);
  expect(getByText("Hello, Abdel!")).toBeInTheDocument();
});
test('muestra un saludo sin poner ningún parámetro',
()=>{
  const {getByText}=render(<Greeting />)
  expect(getByText("Hello, Invitado!") ).toBeInTheDocument()
}

);


