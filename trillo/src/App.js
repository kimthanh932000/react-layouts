import Header from './components/header/Header'
import SideNav from './components/sidenav/SideNav'
import './App.scss'
import Gallery from './components/gallery/Gallery'

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header/>
				<div className="content">
					<SideNav/>
					<main className="hotel-view">
						<Gallery/>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
