import React from 'react'
import CvIncompleto from '../assets/background/CvIncompleto.pdf'

function Cvpage({ lang, dark }) {

    return (
        <>
            <div id='pagescontent' >
                <div className='block'>
                    <p>{lang.dcv}</p>
                    <hr style={{ color: '#00000000', }} />
                    <a href={CvIncompleto} download="CvIncomleto.pdf" > {dark ? <i className="bi bi-file-earmark-arrow-down-fill" style={{ color: 'white', }}></i> : <i className="bi bi-file-earmark-arrow-down-fill" style={{ color: 'black', }} > </i>}</a>
                </div>
            </div>
        </>
    )
}

export default Cvpage