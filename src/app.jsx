import styled from "@emotion/styled";
import { Fragment, useCallback, useEffect, useState } from "react";

const Button = styled.button`
  color: red;
`;
export function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 10));
  useEffect(() => {
    if (count % 2 !== 0) {
      setCount((c) => c + 3);
    }
  }, [count, increment]);
  console.log(count);
  return (
    <Fragment>
      <h2>Clicks: {count}</h2>
      <Button onClick={increment}>Click Me MORE!!!</Button>
    </Fragment>
  );
}
