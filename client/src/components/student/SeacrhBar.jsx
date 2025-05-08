import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => {

  const navigate = useNavigate()
               // If data is not passed, set it to an empty string
  // If data is passed, set it to the value of data, otherwise set it to an empty string
  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e) => {
    e.preventDefault()
    // it help to prevent the default behavior of the form submission, which is to refresh the page.

    navigate('/course-list/' + input)

  }

  return (
    <form onSubmit={onSearchHandler} className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded">
      <img className="md:w-auto w-10 px-3" src={assets.search_icon} alt="search_icon" />
      {  /*setInput is use to set the value of input to the value of the input field.
        setInput is a function that updates the state of input when the value of the input field changes. */}
      <input onChange={e => setInput(e.target.value)} value={input} type="text" className="w-full h-full outline-none text-gray-500/80" placeholder="Search for courses" />
      <button type='submit' className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1">Search</button>
    </form>
  )
}

export default SearchBar