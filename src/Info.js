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
import React, {useEffect, useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        });
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <>
            <>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
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