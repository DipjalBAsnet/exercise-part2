const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <ul>
      <li key={note.id} className="note">
        {note.content}
      </li>
      <button onClick={toggleImportance}>{label}</button>
    </ul>
  );
};

export default Note;
