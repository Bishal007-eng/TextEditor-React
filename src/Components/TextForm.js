import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {

  const[text, setText] = useState(""); // text here is simplyt a variable and setText is a update variable of text
  const[wordArray, setWordArray] = useState([]);

  const handleUpClick = () =>{
      // console.log("Uppercase triggered !!" + text);
      const newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted To UpperCase" ,"success");
  }

  const handleLoClick = () =>{
    // console.log("LowerCase triggered !!" + text);
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase" ,"success");

}

  const handleOnchange = (event) =>{
    console.log("#");
    setText(event.target.value)
}

const handleRedoClick = () => {
  const words = text.split(' ');
  setWordArray(words);
  setText('');
  props.showAlert("Redo Complete !" ,"success");

};

const handleClear = () =>{
  setText('');
  props.showAlert("Clear Complete !" ,"success");

};

const handleExtraSpace = () => {
  let newText = text.split(/[ ]+/); //this will split the text with 1 or more spaces
  setText(newText.join(" ")) //this will join the splitted words from above function with once space
  props.showAlert("Extra Spaces has been removed !" ,"success");

};

  // text = "New text"; //this is incorrect way to change the state
  // setText("New text") ; //this is correct way to change the state
  return (

    <>
      <div className="container mt-3" style={{color: props.mode==='light' ? '#3d3d3d' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 mt-3">
          {/* <label for="textBox" className="form-label">Text below...</label> */}
          <textarea className="form-control" value={text} onChange={handleOnchange} placeholder="Enter Text Here..." 
            style={{background: props.mode==='dark' ? '#3d3d3d' : 'white' , color: props.mode==='light' ? '#3d3d3d' : 'white'}} 
              id="textBox" rows="8"/>
        </div>
        <button className="btn btn-success me-auto mx-2 mb-2" onClick={handleUpClick}>Convert to UpperCase </button>
        <button className="btn btn-danger me-auto mx-2 mb-2" onClick={handleLoClick}>Convert to LowerCase </button>
        <button className="btn btn-warning me-auto mx-2 mb-2" onClick={handleRedoClick}>Redo</button>
        <button className="btn btn-primary me-auto mx-2 mb-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-info me-auto mx-2 mb-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <div>
          {wordArray.map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </div>
      </div>  




      <div className="container mt-4" style={{color: props.mode==='light' ? '#3d3d3d' : 'white'}}>
          <h1>Text Summary...</h1>
          <p>Total Character : {text.length}</p>
          <p>Total Words : {text.split(" ").length}</p>
          <p>Minutes to read : {0.008 * text.split(" ").length}</p>
          <br />
          <h3>Preview</h3>
          <p>{text.length>0?text:'Enter something in the TextBox above to Preview...'}</p>
      </div>  
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
}

