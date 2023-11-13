import "./App.css";
import BugTable from "./BugTable";
// import { BugPriority, IBug } from "./IBug";
import { v4 as uuid } from "uuid";
import { FormEvent, useState } from "react";

function App() {
  const [newBugDescription, setNewBugDescription] = useState("");
  const [newBugPriority, setNewBugPriority] = useState("Medium");
  const [bugList, setBugList] = useState([]);

  const addBug = (event) => {
    event.preventDefault();
    const newBug = {
      id: uuid(),
      description: newBugDescription,
      priority: newBugPriority,
    }

    setBugList(
      [
        ...bugList,
        newBug,
      ]
    );

    setNewBugDescription('');
    setNewBugPriority('Medium');
  };

  const deleteBug = (id) => {
    const bugs = bugList.filter(bug => bug.id !== id);

    setBugList(bugs);
  }

  return (
    <div className="app">
      <h1>Bug Tracker</h1>
      <BugTable bugs={bugList} onDeleteBug={(id) => deleteBug(id)}></BugTable>
      <form className="add-new-bug-form" onSubmit={addBug}>
        <label htmlFor="newBugDescription">New Bug Description: </label>
        <input data-testid="newbug-description" id="newBugDescription" type="text" onChange={event => setNewBugDescription(event.target.value)} value={newBugDescription} />
        <label htmlFor="newBugPriority">New Bug Priority: </label>
        <select onChange={event => setNewBugPriority(event.target.value)} value={newBugPriority}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button data-testid="add-bug" type="submit">Add New Bug</button>
      </form>
    </div>
  );
}

export default App;
