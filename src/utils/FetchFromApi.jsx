import React from 'react'


const FetchFromApi = ({handleSearch}) => {
  return (
    <div>
    <button onClick={handleSearch} className='btn'>Search</button>
    </div>
  )
}

export default FetchFromApi
