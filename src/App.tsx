
import Links from './components/Links'
import FooterText from './components/FooterText'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './App.css'

function App() {
  return (
    <div className="App bg-gradient">
      <div className="w-full h-auto md:h-auto xl:h-auto 2xl:h-auto full:h-auto p-5">
          <LazyLoadImage src={`https://res.cloudinary.com/dynrld3nm/image/upload/w_175,q_50/v1665681568/tree/thumb.webp`}
            width={175} height={175}
            className="drop-shadow-xl rounded-full ml-auto mr-auto"
            alt="Jakka's Thumbnail"
          />
          <h1 className="font-rbt text-bg text-center my-3 text-[2.9rem] drop-shadow-xl">GuntxJakka</h1>
          <Links />
          <FooterText />
      </div>
    </div>
  )
}

export default App
