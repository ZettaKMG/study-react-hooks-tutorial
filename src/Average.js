// useMemo: 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있음.
// import React, {useState} from 'react';

// const getAverage = numbers => {
//     console.log('평균값 계산 중..');
//     if (numbers.length === 0) return 0;
//     const sum = numbers.reduce((a, b) => a + b);
//     return sum / numbers.length;
// };

// const Average = () => {
//     const [list, setList] = useState([]);
//     const [number, setNumber] = useState('');

//     const onChange = e => {
//         setNumber(e.target.value);
//     };
//     const onInsert = e => {
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     };
    
//     return (
//         <>
//             <input value={number} onChange={onChange} />
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value, index) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <>
//                 <b>평균값:</b> {getAverage(list)}
//             </>
//         </>
//     );
// };

// export default Average;

// 인풋 내용이 바뀔 때는 평균값 다시 계산할 필요가 없으므로 이 부분을 최적화.
// 렌더링 과정 중에서 특정 값이 바뀌었을 때만 연산 실행, 원하는 값이 안 바뀌었으면 이전 연산 결과 그대로 쓰기.
// import React, {useState, useMemo} from 'react';

// const getAverage = numbers => {
//     console.log('평균값 계산 중..');
//     if (numbers.length === 0) return 0;
//     const sum = numbers.reduce((a, b) => a + b);
//     return sum / numbers.length;
// };

// const Average = () => {
//     const [list, setList] = useState([]);
//     const [number, setNumber] = useState('');

//     const onChange = e => {
//         setNumber(e.target.value);
//     };
//     const onInsert = e => {
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     };

//     const avg = useMemo(() => getAverage(list), [list]);
    
//     return (
//         <>
//             <input value={number} onChange={onChange} />
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value, index) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <>
//                 <b>평균값:</b> {avg}
//             </>
//         </>
//     );
// };

// export default Average;

// useCallback: useMemo와 유사. 만들어놨던 함수를 재사용할 수 있게 해줌.
// 첫 번째 파라미터에는 생성하고 싶은 함수를, 두 번째 파라미터에는 배열을 넣으면 됨.
// 두 번째 파라미터에 넣는 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지를 명시.
// ㄴ 빈 배열을 넣게 되면 컴포넌트 렌더링 시 만들었던 함수를 계속 사용함.
// ㄴ 함수 내부에서 상태 값에 의존할 경우, 그 값을 반드시 두 번째 파라미터 안에 포함시킬 것.
// import React, {useState, useMemo, useCallback} from 'react';

// const getAverage = numbers => {
//     console.log('평균값 계산 중..');
//     if (numbers.length === 0) return 0;
//     const sum = numbers.reduce((a, b) => a + b);
//     return sum / numbers.length;
// };

// const Average = () => {
//     const [list, setList] = useState([]);
//     const [number, setNumber] = useState('');

//     const onChange = useCallback(e => {
//         setNumber(e.target.value);
//     }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

//     const onInsert = useCallback(() => {    
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     }, [number, list]); // nunber or list가 바뀌었을 때만 함수 생성

//     const avg = useMemo(() => getAverage(list), [list]);
    
//     return (
//         <>
//             <input value={number} onChange={onChange} />
//             <button onClick={onInsert}>등록</button>
//             <ul>
//                 {list.map((value, index) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <>
//                 <b>평균값:</b> {avg}
//             </>
//         </>
//     );
// };

// export default Average;

// useRef Hook: 함수형 컴포넌트에서 ref를 사용하기 쉽게 해줌.
// Average 컴포넌트에서 등록 버튼을 눌렀을 때 포커스가 인풋 쪽으로 넘어가게 하는 코드 작성.
import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {    
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // nunber or list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
        <>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <>
                <b>평균값:</b> {avg}
            </>
        </>
    );
};

export default Average;