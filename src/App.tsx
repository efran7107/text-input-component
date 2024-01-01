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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNameInput(e.target.value);
          }}
          value={nameInput}
          labelText={'Name'}
        />
        {/* <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            placeholder='john smith'
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            value={nameInput}
          />
        </div> */}
        <div>
          <label htmlFor='age'>Age:</label>
          <input
            type='text'
            placeholder='17'
            onChange={(e) => {
              setAgeInput(e.target.value);
            }}
            value={ageInput}
          />
        </div>
        <div>
          <label htmlFor='slogan'>slogan:</label>
          <input
            type='text'
            placeholder='I love to kick butt and take names'
            onChange={(e) => {
              setSloganInput(e.target.value);
            }}
            value={sloganInput}
          />
        </div>
      </form>
    </>
  );
}

export default App;
