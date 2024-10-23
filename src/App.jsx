
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
import languages from './lang';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Home from './components/Home'
import Layout from './components/Layout';
import Cvpage from './components/Cvpage';
import Proyects from './components/Proyects';


function App() {
	const [lang, setLang] = useState(languages.spanish);
	const [dark, setDark] = useState(false);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout lang={lang} dark={dark} setLang={setLang} setDark={setDark} />}>
					<Route index element={<Home lang={lang} dark={dark} />} />
					<Route path="Aboutme" element={<Aboutme lang={lang} dark={dark} />} />
					<Route path="Contact" element={<Contact lang={lang} dark={dark} />} />
					<Route path="Cvpage" element={<Cvpage lang={lang} dark={dark} />} />
					<Route path="Proyects" element={<Proyects lang={lang} dark={dark} />} />
				</Route>
			</Routes>

		</>
	);
}
export default App;
