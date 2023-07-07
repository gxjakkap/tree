import BerealIcon from "./svgs/Bereal"
import ClubhouseIcon from "./svgs/Clubhouse"
import VeroIcon from "./svgs/Vero"
import ThreadsIcon from "./svgs/Threads"

const openInNewTab = (url: string) => {
    window.open(url)
}

const Links = () =>  {
    return (
        <div className="grid grid-cols-1 w-1/3 xs:w-3/4 sm:w-3/4 md:w1/3 lg:w1/3 xl:w1/3 2xl:w1/3 gap-4 ml-auto mr-auto pt-2">
            <button className="btn btn-block ltbtn bg-blue-600 hover:bg-blue-500" onClick={() => openInNewTab('https://www.guntxjakka.me')}><i className="bi bi-globe mx-2 text-lg"></i>My Website</button>
            <button className="btn btn-block ltbtn bg-black hover:bg-gray-800" onClick={() => openInNewTab('mailto:gunt@guntxjakka.me')}><i className="bi bi-envelope mx-2 text-lg"></i>Email</button>
            <button className="btn btn-block ltbtn igbtn" onClick={() => openInNewTab('https://instagram.com/guntxjakka')}><i className="bi bi-instagram mx-2 text-lg"></i>Instagram</button>
            <button className="btn btn-block ltbtn bg-black hover:bg-gray-800" onClick={() => openInNewTab('https://github.com/gxjakkap')}><i className="bi bi-github mx-2 text-lg"></i>GitHub</button>
            <button className="btn btn-block ltbtn bg-[#1c9bf1] hover:bg-[#41aef7]" onClick={() => openInNewTab('https://twitter.com/guntxjakka')}><i className="bi bi-twitter mx-2 text-lg"></i>Twitter</button>
            <button className="btn btn-block ltbtn bg-[#020202] hover:bg-[#1a1919]" onClick={() => openInNewTab('https://threads.net/@guntxjakka')}><ThreadsIcon />Threads</button>
            <button className="btn btn-block ltbtn bg-[#5c4ee5] hover:bg-[#6262fc]" onClick={() => openInNewTab('https://mastodon.social/@jakka')}><i className="bi bi-mastodon mx-2 text-lg"></i>Mastodon</button>
            <button className="btn btn-block ltbtn bg-[#9046ff] hover:bg-[#9558f0]" onClick={() => openInNewTab('https://twitch.tv/guntxjakka')}><i className="bi bi-twitch mx-2 text-lg"></i>Twitch</button>
            <button className="btn btn-block ltbtn bg-[#fe0100] hover:bg-[#fa3f3f]" onClick={() => openInNewTab('https://www.youtube.com/channel/UCuhb0ovLdYPxw-K0a6d3Dzw')}><i className="bi bi-youtube mx-2 text-lg"></i>Youtube (Vlog)</button>
            <button className="btn btn-block ltbtn bg-[#fe0100] hover:bg-[#fa3f3f]" onClick={() => openInNewTab('https://www.youtube.com/c/GuntxJakkaGaming')}><i className="bi bi-youtube mx-2 text-lg"></i>Youtube (Gaming)</button>
            <button className="btn btn-block ltbtn bg-black hover:bg-gray-800]" onClick={() => openInNewTab('https://bere.al/jakkaphat')}><BerealIcon />Bereal</button>
            <button className="btn btn-block ltbtn bg-[#1976f2] hover:bg-[#3588f5]" onClick={() => openInNewTab('https://fb.me/guntchalermphanaphan')}><i className="bi bi-facebook mx-2 text-lg"></i>Facebook</button>
            <button className="btn btn-block ltbtn verobtn text-center" onClick={() => openInNewTab('https://vero.co/jakka')}><VeroIcon/> Vero</button>
            <button className="btn btn-block ltbtn bg-[#f2eee5] hover:bg-[#fdf8f2] text-center text-[#1f1f1a]" onClick={() => openInNewTab('https://www.clubhouse.com/@guntxjakka')}><ClubhouseIcon /> Clubhouse</button>
            <button className="btn btn-block ltbtn bg-[#203257] hover:bg-[#2f4268]" onClick={() => openInNewTab('https://steamcommunity.com/id/autumness_')}><i className="bi bi-steam mx-2 text-lg"></i>Steam</button>
        </div>
    )
}

export default Links