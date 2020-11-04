import React,{ useEffect } from 'react';
import './App.css';
import './App.scss';
import JumbotronContent from './components/jumbotron-content/jumbotron.component';
import UploadPhotos from './components/upload-photos/upload-photos.component';
import OurTeam from './components/our-team/our-team.component';
import Header from './components/header/header.component';
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from 'react-particles-js';

function App() {
	useEffect(() => {
		AOS.init();
    	AOS.refresh();
	},[])
	return (
		<div className="app">
			<Particles />
			<Header/>
			<JumbotronContent/>
			<UploadPhotos/>
			<OurTeam/>
		</div>
	);
}

export default App;
