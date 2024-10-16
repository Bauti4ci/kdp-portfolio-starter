import React from 'react'

function Home({ lang }) {



    return (
        <>
            <h1 id='titulo' className='cuerpo'>{lang.title}</h1>
            <p id='body' className='cuerpo'> {lang.whatido}</p>
            <p id="pie" className="cuerpo"> | HTML | CSS | JS | React |</p>
        </>
    )
}

export default Home