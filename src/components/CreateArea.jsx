import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  // give the component a variable to determine whether or not to expand the area
  const [isExpanded, setExpanded] = useState(false);
  function expand(event) {
    // toggle expansion
    setExpanded(prevExpanded => {
      return !prevExpanded;
    });
  };
  // hold the user input as a note to submit when the user submits
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    // pick up the name and value of the edited field
    const {name, value} = event.target;
    // change the chosen field to the chosen value
    setNote(prevNote => {
      return {...prevNote,[name]: value};
    });
  };

  function submitNote(event) {
    event.preventDefault();
    setNote(prevNote => {
      return {title: "", content: ""};
    });
    props.submitFunction(note);
  };
  return (
    <div>
      <form className="create-note">
        // display the title field if expanded
        {isExpanded && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        // submit button if expanded
        {isExpanded && <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
