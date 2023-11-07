import NpmIcon from "./svgs/Npm"
import PythonIcon from "./svgs/Python"

const openInNewTab = (url: string) => {
    window.open(url)
}

const h = "h-20 sm:h-20 md:h-20 lg:h-12 xl:h-12 2xl:h-12"

const GodeLinks = () =>  {
    return (
        <div className="grid grid-cols-1 w-1/3 xs:w-3/4 sm:w-3/4 md:w1/3 lg:w1/3 xl:w1/3 2xl:w1/3 gap-4 ml-auto mr-auto pt-2">
            <button className={`btn btn-block ${h} ltbtn bg-blue-600 hover:bg-blue-500`} onClick={() => openInNewTab('https://gode.app')}><span className="mx-2 lowercase font-mali text-lg">g;</span>gode.app (เว็บแปลงข้อความ)</button>
            <button className={`btn btn-block ${h} ltbtn bg-black hover:bg-gray-800`} onClick={() => openInNewTab('https://github.com/godeProject/godeAPI')}><i className="bi bi-github mx-2 text-lg"></i>godeAPI (Rest API)</button>
            <button className={`btn btn-block ${h} ltbtn bg-[#cc3534] hover:bg-[#d04f4f]`} onClick={() => openInNewTab('https://www.npmjs.com/package/gode.js')}><NpmIcon />gode.js (ไลบรารีภาษา Javascript)</button>
            <button className={`btn btn-block ${h} ltbtn bg-[#4584b6] hover:bg-[#5097d1]`} onClick={() => openInNewTab('https://pypi.org/project/pygode')}><PythonIcon />pygode (ไลบรารีภาษา Python)</button>
            <button className={`btn btn-block ${h} ltbtn bg-black hover:bg-gray-800`} onClick={() => openInNewTab('https://github.com/godeProject')}><i className="bi bi-github mx-2 text-lg"></i>GitHub (รวม Repo ทั้งหมดเกี่ยวกับ g;ode)</button>
            <button className={`btn btn-block ${h} ltbtn bg-[#1c9bf1] hover:bg-[#41aef7]`} onClick={() => openInNewTab('https://twitter.com/godeProject')}><i className="bi bi-twitter mx-2 text-lg"></i>Twitter</button>
        </div>
    )
}

export default GodeLinks