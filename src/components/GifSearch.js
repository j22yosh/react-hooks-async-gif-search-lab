import React, {useState} from 'react'

function GifSearch({onSearchFormSubmit}) {
    //render a form
    const [inputValue, setInputValue] = useState("")
    //invoke the callback prop
   
    const handleChange = (e) =>{
        
        setInputValue(e.target.value)
        console.log(inputValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearchFormSubmit(inputValue)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>What would you like to search for?</label>
            <input type="text" value={inputValue} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default GifSearch