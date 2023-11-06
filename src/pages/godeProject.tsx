
import GodeLinks from '../components/GodeLinks'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../App.css'

function GodeProjectPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#013247] to-slate-900 min-h-screen">
      <div className="w-full h-auto md:h-auto xl:h-auto 2xl:h-auto full:h-auto p-5">
          <LazyLoadImage src={`https://res.cloudinary.com/dynrld3nm/image/upload/tree/gode_n5gsne.png`}
            width={175} height={175}
            className="drop-shadow-xl rounded-full ml-auto mr-auto"
            alt="g;ode's Thumbnail"
          />
          <h1 className="font-rbt text-white text-center my-3 text-[2.9rem] drop-shadow-xl">g;ode Project</h1>
          <GodeLinks />
      </div>
    </div>
  )
}

export default GodeProjectPage
