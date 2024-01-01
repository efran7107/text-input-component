export const TextInput = (labelText: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string) => {
  return (
    <div>
      <label htmlFor='name'>{labelText}:</label>
      <input type='text' placeholder='john smith' onChange={onChange} value={value} />
    </div>
  );
};
