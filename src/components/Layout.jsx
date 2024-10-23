import React from 'react'
import { Fragment, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import languages from '../lang';



function Layout({ lang, dark, setDark, setLang }) {

    console.log('dark :', dark);

    const handleLang = () => {
        if (lang.KEY === 'ES') setLang(languages.english);
        if (lang.KEY === 'EN') setLang(languages.spanish);
    };

    const toggleTheme = () => {
        setDark(!dark);
    };
    return (
        <div id='texto' className={`app ${dark ? 'dark' : 'light'}`}>
            <div className="nav">
                <div className="left"><button onClick={toggleTheme}>  {dark ? <i className="bi bi-sun-fill"tyle={{ color: 'black' }}></i> : <i className="bi bi-moon-stars-fill" style={{ color: 'black', }}></i>} </button>
                    <button onClick={handleLang}> {dark ? <i className="bi bi-translate" tyle={{ color: 'black'}}></i> : <i className="bi bi-translate" style={{ color: 'black', }}></i>} </button> </div>

                <div className="right">
                    {/*<Link to={'/Aboutme'} className='links' >  {dark ? <i className="bi bi-person-lines-fill"> {lang.aboutme} </i> : <i className="bi bi-person-lines-fill" style={{ color: 'black', }}> {lang.aboutme} </i>} </Link>*/}                   
 
                    <Link to={'/Contact'} className={`links ${dark ? 'dark-link' : 'light-link'}`}>
                        <i className={`bi bi-person-fill-add ${dark ? 'dark-icon' : 'light-icon'}`}>
                            {lang.contact}
                        </i>
                    </Link>
                    <Link to={'/Cvpage'} className={`links ${dark ? 'dark-link' : 'light-link'}`}>
                        <i className={`bi bi-file-earmark-person-fill ${dark ? 'dark-icon' : 'light-icon'}`}>
                            {lang.cv}
                        </i>
                    </Link>  
                    <Link to={'/Proyects'} className={`links ${dark ? 'dark-link' : 'light-link'}`}>
                        <i className={`bi bi-terminal ${dark ? 'dark-icon' : 'light-icon'}`}>
                            {lang.contact}
                        </i>
                    </Link>  
                    <Link to={'/'} className={`links ${dark ? 'dark-link' : 'light-link'}`}>
                        <i className={`bi bi-house-fill ${dark ? 'dark-icon' : 'light-icon'}`}>
                            {lang.contact}
                        </i>
                    </Link>
                    </div >
            </div>
            <Outlet />
        </div>
    )
}
export default Layout