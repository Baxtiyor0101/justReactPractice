import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title, id: 4 }]);
  };
  const [age, setAge] = useState(20);
  useEffect(() => {
    console.log("useeffect ran ", songs);
  }, [songs]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age:{age}</button>
    </div>
  );
};
export default SongList;
