// useState를 여러 번 사용하기
import React, {useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

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