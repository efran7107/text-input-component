import { useState } from 'react';
import './App.css';
import { TextInput } from './TextInput';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [sloganInput, setSloganInput] = useState('');

  const reset = () => {
    setNameInput('');
    setAgeInput('');
    setSloganInput('');
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            nameInput,
            ageInput,
            sloganInput,
          });
          reset();
        }}
      >
        <h3>Information form</h3>
        <TextInput
          labelText={'Name'}
          inputProps={{
            onChange: (e) => {
              setNameInput(e.target.value);
            },
            value: nameInput,
            placeholder: 'john smith',
          }}
        />
        <TextInput
          labelText={'age'}
          inputProps={{
            onChange: (e) => {
              setAgeInput(e.target.value);
            },
            value: ageInput,
            placeholder: '17',
          }}
        />
        <TextInput
          labelText={'Slogan'}
          inputProps={{
            onChange: (e) => {
              setSloganInput(e.target.value);
            },
            value: sloganInput,
            placeholder: 'john smith',
          }}
        />
        <input type='submit' value='submit' />
      </form>
    </>
  );
}

export default App;
