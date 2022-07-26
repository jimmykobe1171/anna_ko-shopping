import { useState } from 'react'

export default function SearchBar({  }) {
  const [text, setText] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    // gifFetch(text);
    setText("");
  }

  function handleChange(evt) {
    setText(evt.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <h1>Search your favorite Designers</h1>
        <label>
          
          <input
            type="search"
            value={text}
            placeholder={text}
            onChange={handleChange}
            name="name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

