import React from 'react';
import { useSelector,  } from 'react-redux'

function Counter(props) {
    const count = useSelector(state => state.counter.value)

    return (
        <div>
            {count}
        </div>
    );
}

export default Counter;
