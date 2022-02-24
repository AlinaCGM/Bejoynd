import { useState, useEffect } from 'react';
import './Poems.css'

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
 
  const [clicked, setClicked] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [clickFavorites, setClickFavorites] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://poetrydb.org/random/20`)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        const actualData = await response.json()
        setData(actualData)
      
        console.log(data)

      } catch (err) {
      
        setData(null)
      } finally {
        setLoading(false)
      }
      
    }
    
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleFavorites = () => {
    setClickFavorites(!clickFavorites)
  }

  let listData = favorites.map((fav) => <p>{fav}</p>)

  const PoemsData = data.map((poems, index) => (
    <>
      <>
        <h2
          key={index}
          onClick={() =>
            setSelectedItem(poems.title === selectedItem ? null : poems.title)
          }
          style={{ cursor: 'pointer' }}
        >
          Title: {poems.title}
        </h2>

        <p>Author: {poems.author}</p>
        {selectedItem === poems.title && <>{poems.lines.map(lines=>(<p className='lines'>{lines}</p>))}</>}
        <button
          key={index}
          onClick={() => setFavorites([...favorites, poems.title])}
        >
          Add to Favorites
        </button>
      </>
    </>
  ))

  return (
    <div className='poems'>
   {/* <div className='main-title'><p > Click me</p></div>  */}
      {loading}
      {!clicked ? (
        <div >
          <>
            {clickFavorites ? (
              <div className='list'>
                <p>Favorite Titles:{listData}</p>
                <button onClick={handleFavorites}>Hide</button>
                <button onClick={() => setFavorites([])}>Clear</button>
              </div>
            ) : (
              <button onClick={handleFavorites}>Favorites list</button>
            )}
          </>
          {PoemsData}
          <p>
            <button onClick={handleClick}>UnFetch</button>
          </p>
        </div>
      ) : (
        <button onClick={handleClick}>Fetch</button>
      )}
    </div>
  )
}
