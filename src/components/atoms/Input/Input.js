import React, { useState } from 'react';
import { TextInput } from 'react-native';

const Input = ({ name, handleSubmitInput }) => {
  const [text, setText] = useState(name);
  return (
    <TextInput
      style={{ height: 25 }}
      onChangeText={setText}
      value={text}
      onSubmitEditing={event => handleSubmitInput(event.nativeEvent.text)}
    />
  )
};

export default Input;
