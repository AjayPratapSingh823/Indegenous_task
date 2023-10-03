import React from 'react'

const Feed = ({first, handleReadMoreClick}) => {
  return (
    <div className='feed'>
          <ul>
           
          {first.map((item, index) => (
  <li key={index} className="result-card">
    <h2>{item.title}</h2>
    {typeof item.abstract === 'string' && item.abstract.length > 150 ? (
  <div className="abstract-container">
    <p className="abstract">
      <span className="abstract-text">{item.abstract.slice(0, 150) + '...'}</span>
    </p>
    <a href="#" onClick={(e) => handleReadMoreClick(e, index)} className="read-more">
      Read more
    </a>
    <p className="full-abstract" style={{ display: 'none' }}>
      {item.abstract}
    </p>
  </div>
) : (
  <p className="full-abstract">{item.abstract}</p>
)}

    {typeof item.url === 'string' && (
      <div className="url-card">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="external-link">
          {item.url}
        </a>
      </div>
    )}
  </li>
))}     
          </ul>
        </div>
  )
}

export default Feed
