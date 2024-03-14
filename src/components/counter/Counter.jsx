import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import CounterContext from "../../context/CounterCountext";
import { useContext } from "react";



const Counter = () => {

const {counter,increment,decrement} = useContext(CounterContext)



  return (
    <>

      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1>My counter: {counter} </h1>
          <button className="btn btn-success" onClick={increment} >
            <AiFillPlusCircle />
          </button>

          <button className="btn btn-warning" onClick={decrement}>
            <AiFillMinusCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
