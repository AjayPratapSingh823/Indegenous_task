import React, { useState, } from 'react';
import axios from 'axios';
import FetchFromApi from '../utils/FetchFromApi';
import Feed from '../Feed/Feed';

function Search() {
  const [functionExecuted, setFunctionExecuted] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(null);
  
  
     const handleSearch = async (keyword) => {
      const key = document.getElementById("keywordInput").value
      let data = JSON.stringify({
        keyword: `${key}`,
        limit: '15',
      });
      console.log(key)
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.gyanibooks.com/search_publication/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      try {
        const response = await axios.request(config);
        // console.log(response?.data);
        
        setSearchResults(response?.data);
      } catch (error) {
        setError(error);
      }
      setFunctionExecuted(true);
    };

    let array = [searchResults.data];
      Object.values(array);
      console.log(array);
     
      const [first]=array
      
      const handleReadMoreClick = (e, index) => {
        e.preventDefault();
        const fullAbstractElement = document.querySelector(`.result-card:nth-child(${index + 1}) .full-abstract`);
        if (fullAbstractElement) {
          fullAbstractElement.style.display = fullAbstractElement.style.display === 'none' ? 'block' : 'none';
        }
      };
      
      const handleReload = ()=>{

        window. location. reload(); 

      }

  return (
    <div className='main'>
    <h1>Research Paper Search Tool</h1>
      <input type='text' placeholder="Enter Your key" id="keywordInput"value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
      {functionExecuted ? (
        <div>
        <button className='btn' onClick={handleReload}>Refresh</button>
       <Feed first={first} handleReadMoreClick={handleReadMoreClick}/>
       </div>
      ) : (
        <FetchFromApi handleSearch={handleSearch} />
      )}
    </div>
  );
}
export default Search;







