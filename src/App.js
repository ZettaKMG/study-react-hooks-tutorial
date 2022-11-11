// Counter 컴포넌트 렌더링
// import React from 'react';
// import Counter from './Counter';

// const App = () => {
//   return <Counter />;
// };

// export default App;

// Info 컴포넌트 렌더링
// import React from 'react';
// import Info from './Info';

// const App = () => {
//   return <Info />;
// };

// export default App;

// useEffect 뒷정리 함수 렌더링
// import React, {useState} from 'react';
// import Info from './Info';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? '숨기기' : '보이기'}  
//       </button>  
//       <hr />
//       {visible && <Info />}
//     </>
//   );
// };

// export default App;

// useReducer로 카운터 구현한 것을 렌더링
// import React from 'react';
// import Counter from './Counter';

// const App = () => {
//   return <Counter />;
// };

// export default App;

// 인풋 상태 관리하기 Info 컴포넌트 렌더링
import React from 'react';
import Info from './Info';

const App = () => {
  return <Info />;
};

export default App;