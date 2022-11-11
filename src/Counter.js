// useState 복습
// import React, {useState} from 'react';

// const Counter = () => {
//     const [value, setValue] = useState(0);

//     return (
//         <>
//             <p>
//                 현재 카운터 값은 <b>{value}</b>입니다.
//             </p>
//             <button onClick={() => setValue(value + 1)}>+1</button>
//             <button onClick={() => setValue(value - 1)}>-1</button>            
//         </>
//     );
// };

// export default Counter;

// useReducer: useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook.
// 리듀서: 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수.
//        ㄴ 반드시 불변성을 지켜주어야 함.
// 카운터 구현하기
import React, {useReducer} from 'react';

function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            // 아무것도 해당되지 않을 때 기존 상태 반환
            return state;    
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.                
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </>
    );
};

export default Counter;