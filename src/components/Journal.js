import Header from "./Header";
// import { useState } from "react";
import { useEffect } from "react";
import { Alert } from 'react-alert'

const Journal = () => {
  // const [journal, setJournal] = useState();

useEffect (() => {
  Alert("This component will be functional in V2. For now you can enjoy the game :)")
})




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
        
        <form className="sign-up">
        <h2>Sign Up </h2>
          <input type="text" placeholder="Enter Username"/>
          <br/>
          <br/>
          <input type="password" placeholder="Enter Password"/>
          <br/> 
          <br/>
          <button>Submit</button>
        </form>
        
        <form className="sign-in">
          <h2>Sign In </h2>
          <input type="text" placeholder="Enter Username"/>
          <br/>
          <br/>
          <input type="password" placeholder="Enter Password"/>
          <br/> 
          <br/>
          <button>Submit</button>
        </form>
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
