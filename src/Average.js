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
import React, {useState, useMemo} from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    const avg = useMemo(() => getAverage(list), [list]);
    
    return (
        <>
            <input value={number} onChange={onChange} />
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