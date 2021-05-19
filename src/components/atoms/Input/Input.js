import React, {useState} from 'react';
import {TextInput} from 'react-native';

const Input = name => {
  const [text, setText] = useState(name.name);
  console.log(text);
  return <TextInput style={{height: 25}} onChangeText={setText} value={text} />;
};

export default Input;
