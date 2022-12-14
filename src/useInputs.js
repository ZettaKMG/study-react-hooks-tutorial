// 커스텀 Hooks 만들기
// 여러 컴포넌트에서 비슷한 기능을 공유할 경우, 이를 커스터마이징한 Hook르로 작성하여 로직을 재사용 가능.
// useReducer로 작성했던 로직을 useInputs라는 Hook으로 분리.
import {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];    
}