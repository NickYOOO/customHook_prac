import React, { useState } from 'react';
import useInput from './hooks/useInput';

function App() {
  const [name, onChangeNameHandler] = useInput();
  const [pw, onChangePWHandler] = useInput();

  // const [name, setName] = useState('');
  // const [pw, setPw] = useState('');

  // const onChangeNameHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangePWHandler = (e) => {
  //   setPw(e.target.value);
  // };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input type="password" value={pw} onChange={onChangePWHandler} />
    </div>
  );
}

export default App;
