import React from 'react'


function Proyects({ lang, dark }) {

    return (
        <>
            <h1 id='titulo2' className='cuerpo'>{lang.pro}</h1>
            <div className='pagescontent2'>
                <div className='blockt2'> <a href={'https://github.com/Bauti4ci/Calculadora-JS'} className="links" target='_' > {dark ? <i className="bi bi-git">Calculadora JS</i> : <i className="bi bi-git" style={{ color: 'black', }}>Calculadora JS</i>} </a>
                </div>
                <br />
                <div className='blockt2'> <a href={'https://github.com/Bauti4ci/proyecto-kps'} className="links" target='_'> {dark ? <i className="bi bi-git">Registro pacientes</i> : <i className="bi bi-git" style={{ color: 'black', }}>Registro pacientes</i>} </a>
                </div>
                <br />
                <div className='blockt2'> <a href={'https://github.com/Bauti4ci/Calculadora_de_cambio'} className="links" target='_'> {dark ? <i className="bi bi-git">Calculadora de cambio</i> : <i className="bi bi-git" style={{ color: 'black', }}>Calculadora de cambio</i>} </a>
                </div>
            </div >
        </>
    )
}

export default Proyects