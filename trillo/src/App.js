import './App.scss'
import Header from './components/header/Header'
import SideNav from './components/sidenav/SideNav'
import Gallery from './components/gallery/Gallery'
import Overview from "./components/overview/Overview";
import Main from './components/main/Main'

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header/>
				<div className="content">
					<SideNav/>
					<Main>
						<Gallery/>
						<Overview/>
					</Main>
				</div>
			</div>
		</div>
	);
}

export default App;
