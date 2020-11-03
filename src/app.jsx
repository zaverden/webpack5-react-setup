import styled from "@emotion/styled";
import { Fragment, useCallback, useEffect, useState } from "react";

const Button = styled.button`
  color: blue;
  margin-left: auto;
  margin-right: auto;
`;
export function Counter({ delta = 1 }) {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + delta));
  useEffect(() => {
    if (count % 2 !== 0) {
      setCount((c) => c + 3);
    }
  }, [count, setCount]);
  console.log(count);
  return (
    <Fragment>
      <h2>Clicks count: {count}</h2>
      <Button onClick={increment}>Click Me MORE!!!</Button>
    </Fragment>
  );
}

export function App() {
  return (
    <Fragment>
      <Counter />
      <hr />
      <Counter delta={-1111} />
    </Fragment>
  );
}
