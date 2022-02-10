import React from 'react';
import {increment, decrement, incrementByAmount} from "../stores/counter";
import {useDispatch, useSelector} from "react-redux";


function CounterActions(props) {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=> dispatch(decrement())}>Azalt</button>
            <button onClick={()=> dispatch(increment())}>Arttir</button>
            <button onClick={()=> dispatch(incrementByAmount(4))}>Arttir4</button>
        </div>
    );
}

export default CounterActions;
