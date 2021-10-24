import '../stylesheets/App.css';

import Header from './Header';
import NavBar from './NavBar';
import MainScreen from './MainScreen';
import Footer from './Footer';

import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import SkillsPage from './SkillsPage';
import LinksPage from './LinksPage';

import {BrowserRouter as Router} from "react-router-dom";


export const TABS = [
	{
		"name": "About",
		"component": HomePage,
		"route": ""
	},
	{
		"name": "Projects",
		"component": ProjectsPage,
		"route": "projects"
	},
	{
		"name": "Skills",
		"component": SkillsPage,
		"route": "skills"
	},
	{
		"name": "Links",
		"component": LinksPage,
		"route": "links"
	}
]

function App() {
    return (
		<Router >
            <Header/>
            <NavBar/>
            <MainScreen/>
			<Footer/>
		</Router>
    );
}

export default App;
