const PythonIcon = () => {
    return (
        <svg width={30} height={30} className="mr-1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40">
            <rect x="10" y="0" width="20" height="40" rx="10" ry="5" fill="white"/>
            <rect x="0" y="10" width="40" height="20" rx="5" ry="10" fill="white"/>
            <circle cx="14.5" cy="5" r="1.85" fill="#4584b6"/>
            <circle cx="25.5" cy="35" r="1.85" fill="#4584b6"/>
            <line x1="10" y1="9.5" x2="20" y2="9.5" stroke="#4584b6"/>
            <line x1="20" y1="30.5" x2="30" y2="30.5" stroke="#4584b6"/>
            {/* <path d="m 9.5,30 c 0,-10 2.5,-10 10,-10 8.5,0 11,0 11,-10" stroke="white" fill="none"/> */}
        </svg>
    )
}

export default PythonIcon