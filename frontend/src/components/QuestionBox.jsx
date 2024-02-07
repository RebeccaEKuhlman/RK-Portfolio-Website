import React, { useState } from 'react';
// edited from generated template

export const QuestionBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    console.log("handleSubmit " + query)
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about Rebecca..."
        className="form-control"
      />
    <br />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};
