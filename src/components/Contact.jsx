import React from 'react'

function Contact({ lang, dark }) {


    return (
        <>
            <div id='pagescontent' >
                <div className='block'>
                    <p className='contactinfo'>Bautista Forciniti Molina</p>
                    <p className='contactinfo'>bauti.forci@gmail.com</p>
                    <p className='contactinfo'>+54 9 11 5134-9075</p>
                    <a href="https://github.com/Bauti4ci" className='contactlogos' target='_'>{dark ? <i className="bi bi-github" style={{ color: 'white', }} ></i> : <i className="bi bi-github" style={{ color: 'black', }}> </i>}</a>
                    <a href="https://www.linkedin.com/in/bautista-forciniti-400374296/" className='contactlogos' target='_'>{dark ? <i className="bi bi-linkedin" style={{ color: 'white', }}></i> : <i className="bi bi-linkedin" style={{ color: 'black', }} > </i>}</a>

                </div>
            </div>
        </>
    )
}

export default Contact