// useState를 여러 번 사용하기
// import React, {useState} from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     const onChangeName = e => {
//         setName(e.target.value);
//     };

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     };

//     return (
//         <>
//             <>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </>
//             <br />
//             <>
//              <>
//                 <b>이름:</b> {name}
//              </>
//              <br />
//              <>
//                 <b>닉네임:</b> {nickname}
//              </>
//             </>
//         </>
//     );
// };

// export default Info;

// useEffect: 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook.
// componentDidMount + componentDidUpdate 라고 봐도 무방함.
// import React, {useEffect, useState} from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//         console.log('렌더링이 완료되었습니다!');
//         console.log({
//             name,
//             nickname
//         });
//     });

//     const onChangeName = e => {
//         setName(e.target.value);
//     };

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     };

//     return (
//         <>
//             <>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </>
//             <br />
//             <>
//              <>
//                 <b>이름:</b> {name}
//              </>
//              <br />
//              <>
//                 <b>닉네임:</b> {nickname}
//              </>
//             </>
//         </>
//     );
// };

// export default Info;

// 마운트될 때만 실행하고 싶을 때
// import React, {useEffect, useState} from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//         console.log('마운트될 때만 실행됩니다.');        
//     }, []);

//     const onChangeName = e => {
//         setName(e.target.value);
//     };

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     };

//     return (
//         <>
//             <>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </>
//             <br />
//             <>
//              <>
//                 <b>이름:</b> {name}
//              </>
//              <br />
//              <>
//                 <b>닉네임:</b> {nickname}
//              </>
//             </>
//         </>
//     );
// };

// export default Info;

// 특정 값이 업데이트될 때만 실행하고 싶을 때
// import React, {useEffect, useState} from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//         console.log(name);        
//     }, [name]);

//     const onChangeName = e => {
//         setName(e.target.value);
//     };

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     };

//     return (
//         <>
//             <>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </>
//             <br />
//             <>
//              <>
//                 <b>이름:</b> {name}
//              </>
//              <br />
//              <>
//                 <b>닉네임:</b> {nickname}
//              </>
//             </>
//         </>
//     );
// };

// export default Info;

// 뒷정리하기
// 컴포넌트가 언마운트되기 전 or 업데이트되기 직전에 작업을 수행하고 싶을 때, 뒷정리(cleanup) 함수 반환.
// import React, {useEffect, useState} from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//         console.log('effect');
//         console.log(name);
//         return () => {
//             console.log('cleanup');
//             console.log(name);
//         };        
//     }, [name]);

//     const onChangeName = e => {
//         setName(e.target.value);
//     };

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     };

//     return (
//         <>
//             <>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </>
//             <br />
//             <>
//              <>
//                 <b>이름:</b> {name}
//              </>
//              <br />
//              <>
//                 <b>닉네임:</b> {nickname}
//              </>
//             </>
//         </>
//     );
// };

// export default Info;

// 오직 언마운트될 때만 뒷정리 함수 호출
// import React, {useEffect, useState} from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//         console.log('effect');
//         console.log(name);
//         return () => {
//             console.log('cleanup');
//             console.log(name);
//         };        
//     }, []); // useEffect 함수 두 번째 파라미터에 비어있는 배열 넣으면 됨.

//     const onChangeName = e => {
//         setName(e.target.value);
//     };

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     };

//     return (
//         <>
//             <>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </>
//             <br />
//             <>
//              <>
//                 <b>이름:</b> {name}
//              </>
//              <br />
//              <>
//                 <b>닉네임:</b> {nickname}
//              </>
//             </>
//         </>
//     );
// };

// export default Info;

// 인풋 상태 관리하기
// import React, {useReducer} from 'react';

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]: action.value
//     };
// }

// const Info = () => {
//     const [state, dispatch] = useReducer(reducer, {
//         name: '',
//         nickname: ''
//     });
//     const {name, nickname} = state;
//     const onChange = e => {
//         dispatch(e.target);
//     };
    
//     return (
//         <>
//             <>
//                 <input name='name' value={name} onChange={onChange} />
//                 <input name='nickname' value={nickname} onChange={onChange} />
//             </>
//             <br />
//             <>
//                 <>
//                     <b>이름:</b> {name}
//                 </>
//                 <br />
//                 <>
//                     <b>닉네임:</b> {nickname}
//                 </>
//             </>
//         </>
//     );
// };

// export default Info;

// 커스터마이징 Hook 사용하기
import React from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;
    
    return (
        <>
            <>
                <input name='name' value={name} onChange={onChange} />
                <input name='nickname' value={nickname} onChange={onChange} />
            </>
            <br />
            <>
                <>
                    <b>이름:</b> {name}
                </>
                <br />
                <>
                    <b>닉네임:</b> {nickname}
                </>
            </>
        </>
    );
};

export default Info;