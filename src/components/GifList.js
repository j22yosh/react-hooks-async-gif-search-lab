import React from 'react'

function GifList({gifs}) {
    //take in props
    //render a top level <ul>, each gif as an <li>
    console.log(gifs)
  return (
    <ul>{gifs.map((gif, index) => <li key={index}><img alt='gif' src={gif.url}></img></li>)}</ul>
  )
}

export default GifList