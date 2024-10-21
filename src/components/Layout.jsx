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
                <div className="left"><button onClick={toggleTheme}>  {dark ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-stars-fill" style={{ color: 'black', }}></i>} </button>
                    <button onClick={handleLang}> {dark ? <i className="bi bi-translate"></i> : <i className="bi bi-translate" style={{ color: 'black', }}></i>} </button> </div>

                <div className="right">
                    {/*                     <Link to={'/Aboutme'} className='links' >  {dark ? <i className="bi bi-person-lines-fill"> {lang.aboutme} </i> : <i className="bi bi-person-lines-fill" style={{ color: 'black', }}> {lang.aboutme} </i>} </Link>
 */}                    <Link to={'/Contact'} className='links' activeClassName="active-link"> {dark ? <i className="bi bi-person-fill-add" > {lang.contact} </i> : <i className="bi bi-person-fill-add" style={{ color: 'black', }}> {lang.contact} </i>}</Link>
                    <Link to={'/Cvpage'} className='links' activeClassName="active-link"> {dark ? <i className="bi bi-file-earmark-person-fill" > {lang.cv} </i> : <i className="bi bi-file-earmark-person-fill" style={{ color: 'black', }}> {lang.cv} </i>}</Link>
                    <Link to={'/Proyects'} className='links' activeClassName="active-link"> {dark ? <i className="bi bi-terminal" > {lang.pro} </i> : <i className="bi bi-terminal" style={{ color: 'black', }}> {lang.pro} </i>}</Link>
                    <Link to={'/'} className='links' activeClassName="active-link"> {dark ? <i className="bi bi-house-fill" > </i> : <i className="bi bi-house-fill" style={{ color: 'black', }}> </i>}</Link >
                </div >
            </div>
            <Outlet />
        </div>
    )
}
export default Layout