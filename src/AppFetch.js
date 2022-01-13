import React, { useEffect, useState } from "react";

export const AppFetch = () => {
  const [state, setState] = useState([]);
  const [newstate, newsetState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);
  const onSelect = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`)
      .then((res) => res.json())
      .then((res) => newsetState(res));
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        {state.map(({ id, body, name, email }) => (
          <div>
            <h1>
              ID{id} {name}
            </h1>
            <h2>Email{email}</h2>
            <h2>Body{body}</h2>
            <button onClick={() => onSelect(id)}>select</button>
          </div>
        ))}
      </div>
      <div>
        <h1>Selected</h1>
        {newstate.map(({ id, body, name, email }) => (
          <div>
            <h1>
              ID{id} {name}
            </h1>
            <h2>Email{email}</h2>
            <h2>Body{body}</h2>
            <button onClick={() => onSelect(id)}>select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppFetch;
