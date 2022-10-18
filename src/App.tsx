
import Links from './components/Links'
import FooterText from './components/FooterText'
import './App.css'

function App() {
  return (
    <div className="App bg-gradient">
      <div className="w-full h-auto md:h-auto xl:h-auto 2xl:h-auto full:h-auto p-5">
          <figure>
            <img src="https://res.cloudinary.com/dynrld3nm/image/upload/w_175,q_50/v1665681568/tree/thumb.webp" className="drop-shadow-xl rounded-full w-[175px] ml-auto mr-auto" alt="GuntxJakka's portrait" />
          </figure>
          <h1 className="font-rbt text-bg text-center my-3 text-[2.9rem] drop-shadow-xl">GuntxJakka</h1>
          <Links />
          <FooterText />
      </div>
    </div>
  )
}

export default App
