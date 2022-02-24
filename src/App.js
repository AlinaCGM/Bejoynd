
import './App.css'
import Poems from './Poems'
import Typewriter from 'typewriter-effect'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <div className='type'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hi, I am Alina')
                .pauseFor(500)
                .deleteAll()
                .typeString('I have noticed that this position is on-site in Växjö')
                .deleteAll()
                .typeString('I live in Stockholm')
                .deleteAll()
                .typeString('If you would consider this position remotely, I would be glad to join.')
                .deleteAll()
                .typeString('It was fun doing this assignment anyway.')
                .start()
                
            }}
          />
        </div>
        <p>
          <Poems />
        </p>
      </header>
    </div>
  )
}

export default App
