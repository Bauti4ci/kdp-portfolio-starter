import React from 'react'


function Proyects({ lang, dark }) {

    return (
        <>
            <h1 id='titulo2' className='cuerpo'>{lang.pro}</h1>
            <div className='pagescontent2'>
                <div className='blockt2'>  {/* <a href={KpsCalculadora} download="KpsCalculadora.rar" > */} <p>Calculadora JS</p>
                    {dark ? <i className="bi bi-file-earmark-arrow-down-fill" style={{ color: 'white', }}></i> : <i className="bi bi-file-earmark-arrow-down-fill" style={{ color: 'black', }} > </i>}  {/* </a> */}
                </div>
                <br />
                <div className='blockt2'>  {/* <a href={KpsRegistroPacientes.rar} download="KpsRegistroPacientes.rar" > */} <p>Registro de pacientes</p>
                    {dark ? <i className="bi bi-file-earmark-arrow-down-fill" style={{ color: 'white', }}></i> : <i className="bi bi-file-earmark-arrow-down-fill" style={{ color: 'black', }} > </i>} {/*  </a> */}
                </div>
                <br />
                <div className='blockt2'>  {/* <a href={KpsCalculadoraDeCambio} download="KpsCalculadoraDeCambio.rar" > */} <p>Calculadora de cambio USD-ARS</p>
                    {dark ? <i className="bi bi-file-earmark-arrow-down-fill" style={{ color: 'white', }}></i> : <i className="bi bi-file-earmark-arrow-down-fill" style={{ color: 'black', }} > </i>} {/*  </a> */}
                </div>
            </div>
        </>
    )
}

export default Proyects