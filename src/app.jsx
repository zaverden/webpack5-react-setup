import styled from "@emotion/styled";
import { Fragment, useCallback, useState } from "react";

const Button = styled.button`
  color: hotpink;
`;
export function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1));
  console.log(count);
  return (
    <Fragment>
      <h2>Clicks: {count}</h2>
      <Button onClick={increment}>Click Me MORE!!!</Button>
    </Fragment>
  );
}
