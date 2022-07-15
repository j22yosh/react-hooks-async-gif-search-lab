// import userEvent from '@testing-library/user-event'
import React,{useState, useEffect} from 'react'
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    //create state to store the first three elements from our fetch
    const[gifs, setGifs] = useState([])
    //fetch the data
    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=IwsOEylG6m4S2GWeoILv6sM5SYYU9K1o&rating=g")
        .then(resp =>{
            return resp.json()
        })
        .then(({data}) => {
            console.log(data.slice(0,3))
           const newData = data.slice(0,3).map(gif =>{
          return  {url:gif.images.original.url}})
          console.log(newData)
            setGifs(newData)
        })
    }, [])
    // key = 


    //pass the data
    //pass the 3 elements to GifList-complete
    //Render Gifsearch component-complete
    //create a handler function to pass to Gifsearch as props
    const onSearchFormSubmit = (userInput) => {
        console.log(userInput)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=IwsOEylG6m4S2GWeoILv6sM5SYYU9K1o&rating=g`)
        .then(resp =>{
            return resp.json()
        })
        .then(({data}) => {
            console.log(data.slice(0,3))
           const newData = data.slice(0,3).map(gif =>{
          return  {url:gif.images.original.url}})
          console.log(newData)
            setGifs(newData)
        })
    }
  return (
    <div>
        <GifSearch onSearchFormSubmit={onSearchFormSubmit}/>
        <GifList gifs={gifs}/>
        
    </div>
  )
}

export default GifListContainer