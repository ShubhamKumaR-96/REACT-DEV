import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { counterAtom } from "./store/atoms/counter";

function App() {
  return (
    <RecoilRoot>
      <CounterApp />
    </RecoilRoot>
  );
}

function CounterApp() {
  return (
    <div>
      <CurrentCount />
      <Increment />
      <Decrement /> 
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Increment() {
  const setCount = useSetRecoilState(counterAtom);

  function inc() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={inc}>Increment</button>
    </div>
  );
}

function Decrement() {  
  const setCount = useSetRecoilState(counterAtom);
  function dec() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;