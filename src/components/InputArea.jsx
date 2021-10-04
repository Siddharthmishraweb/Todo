import React , {useState} from 'react'


function InputArea(props){
    const [inputTExt ,setInputTExt] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInputTExt(newValue);
    
    }
    



    return(
        <div className = "form">
            <input onChange = {handleChange} typ = "text" value = {inputTExt} />
            <button 
            onClick = {()=>{
                props.onAdd(inputTExt);
                setInputTExt("");
            }}
            
            
            >
                <span>Add</span>
            </button>
        </div>
    );
}
export default InputArea;