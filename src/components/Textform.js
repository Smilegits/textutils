import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase for "+text);
    let newtext = text.toUpperCase();
    setText(newtext); 
    props.showAlert("Converted to Upper Case","success");
  }
  const handleLoClick=()=>{
    let newtext = text.toLowerCase();
    setText(newtext); 
    props.showAlert("Converted to Lower Case","success");

  }
  const handleclrClick=()=>{
    let newtext = '';
    setText(newtext);
    props.showAlert("Text is cleared","danger"); 
  }
  const handleSentClick=()=>{
    let newtext = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});
    setText(newtext); 
    props.showAlert("Converted to Sentence Case","success");
  }
  const handleCaptClick=()=>{
    const newtext=text.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
    setText(newtext); 
    props.showAlert("Converted to Capitalize Case","success");
  }
  const handleAltClick=()=>{
    var words=text.toLowerCase().split("");
    for(var i=0;i<words.length;i+=2){
      words[i]=words[i].toUpperCase();
    }
    const newtext=words.join("");
    setText(newtext);
    props.showAlert("Converted to Alternating Case","success");
  }
  const handleinvClick=()=>{
    const newtext=text.toUpperCase().replace( /\b./g, function(a){ return a.toLowerCase(); } );
    setText(newtext);
    props.showAlert("Converted to Inverse Case","success");
  }
  const handleCopy=()=>{
    const newtext=document.getElementById("myBox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Text is copied to clipboard","info");
  }
  const handleremovespc=()=>{
    const newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra space is removed","success");
  }
  const handleOnChange=(event)=>{
    //console.log("On change");
   setText(event.target.value);
  }
  const[text,setText] = useState('');
  return (
    <>
    <div>
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleSentClick}>Convert to SentenceCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCaptClick}>Convert to CaptializeCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleAltClick}>Convert to AlternatingCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleinvClick}>Convert to InverseCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleremovespc}>Remove extra space</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text to Clipboard</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleclrClick}>Clear Text</button>
   </div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
    <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
   </div>
   </>
  )
}
