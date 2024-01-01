import { useState } from 'react';
import './App.css';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [sloganInput, setSloganInput] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3>Information form</h3>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            placeholder='john smith'
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            value={nameInput}
          />
        </div>
      </form>
    </>
  );
}

export default App;
