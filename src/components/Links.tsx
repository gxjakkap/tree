import ClubhouseIcon from "./svgs/Clubhouse"
import VeroIcon from "./svgs/Vero"

const openInNewTab = (url: string) => {
    window.open(url)
}

const Links = () =>  {
    return (
        <div class="grid grid-cols-1 w-1/3 xs:w-3/4 sm:w-3/4 md:w1/3 lg:w1/3 xl:w1/3 2xl:w1/3 gap-4 ml-auto mr-auto pt-2">
            <button class="btn btn-block ltbtn bg-blue-600 hover:bg-blue-500" onClick={() => openInNewTab('https://www.guntxjakka.me')}><i class="bi bi-globe mx-2 text-lg"></i>My Website</button>
            <button class="btn btn-block ltbtn bg-black hover:bg-gray-800" onClick={() => openInNewTab('mailto:gunt@guntxjakka.me')}><i class="bi bi-envelope mx-2 text-lg"></i>Email</button>
            <button class="btn btn-block ltbtn igbtn" onClick={() => openInNewTab('https://instagram.com/guntxjakka')}><i class="bi bi-instagram mx-2 text-lg"></i>Instagram</button>
            <button class="btn btn-block ltbtn bg-black hover:bg-gray-800" onClick={() => openInNewTab('https://github.com/gxjakkap')}><i class="bi bi-github mx-2 text-lg"></i>GitHub</button>
            <button class="btn btn-block ltbtn bg-[#1c9bf1] hover:bg-[#41aef7]" onClick={() => openInNewTab('https://twitter.com/guntxjakka')}><i class="bi bi-twitter mx-2 text-lg"></i>Twitter</button>
            <button class="btn btn-block ltbtn bg-[#9046ff] hover:bg-[#9558f0]" onClick={() => openInNewTab('https://twitch.tv/guntxjakka')}><i class="bi bi-twitch mx-2 text-lg"></i>Twitch</button>
            <button class="btn btn-block ltbtn bg-[#fe0100] hover:bg-[#fa3f3f]" onClick={() => openInNewTab('https://www.youtube.com/channel/UCuhb0ovLdYPxw-K0a6d3Dzw')}><i class="bi bi-youtube mx-2 text-lg"></i>Youtube (Vlog)</button>
            <button class="btn btn-block ltbtn bg-[#fe0100] hover:bg-[#fa3f3f]" onClick={() => openInNewTab('https://www.youtube.com/c/GuntxJakkaGaming')}><i class="bi bi-youtube mx-2 text-lg"></i>Youtube (Gaming)</button>
            <button class="btn btn-block ltbtn bg-[#1976f2] hover:bg-[#3588f5]" onClick={() => openInNewTab('https://fb.me/guntchalermphanaphan')}><i class="bi bi-facebook mx-2 text-lg"></i>Facebook</button>
            <button class="btn btn-block ltbtn verobtn text-center" onClick={() => openInNewTab('https://vero.co/jakka')}><VeroIcon/> Vero</button>
            <button class="btn btn-block ltbtn bg-[#f2eee5] hover:bg-[#fdf8f2] text-center text-[#1f1f1a]" onClick={() => openInNewTab('https://www.clubhouse.com/@guntxjakka')}><ClubhouseIcon /> Clubhouse</button>
            <button class="btn btn-block ltbtn bg-[#203257] hover:bg-[#2f4268]" onClick={() => openInNewTab('https://steamcommunity.com/id/autumness_')}><i class="bi bi-steam mx-2 text-lg"></i>Steam</button>
        </div>
    )
}

export default Links