import * as React from 'react';
import { useState } from 'react';

export const SearchBar = props => {
  const [input, setInput] = useState('Seattle, WA');

  return (
    <label htmlFor='location'>
      Location
      <input
        id='location'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Location'
      />
    </label>
  );
};
