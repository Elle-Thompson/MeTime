import Header from "./Header";
import { useState, useEffect } from "react";

const Journal = () => {
  const [journal, setJournal] = useState();





  return (
    <div className="journal-div">
      <Header />

      <div className="unwind-banner">
        <h1 className="journal-title">  MeTime </h1>
      </div>
      {/* <h2 className="journal">Journal</h2> */}
      <div>
        <textarea
          className="journal-input"
          placeholder="Dear Journal, "
          rows="4"
          cols="50"
        ></textarea>

        <div className="button-div">
          <button className="buttons">Save</button>
          <button className="buttons">New Entry</button>
          <button className="buttons">Old Entries</button>
        </div>
        <div className="dropdown">
          <ul>
            <li>Previous date (placeholder)</li>
            <li>Previous date (placeholder)</li>
            <li>Previous date (placeholder)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Journal;
