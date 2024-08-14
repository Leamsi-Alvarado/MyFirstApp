import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {
const {count, increaseBy} = useCounter({
  initialValue: 5
});
  return (
    <>
        <h3>Contador: <small> {count}</small></h3>
        <button onClick={() => increaseBy(+1)}>+1</button>
        <br />
        <button onClick={() => increaseBy(-1)}>-1</button>
    </>
  )
}
  