// import "./sass/main.scss";
import Header from './components/header/Header'
import SideBar from './components/sidebar/SideBar'
import './App.scss'

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header/>
				<div className="content">
					<SideBar/>
					<main className="hotel-view">Hotel view</main>
				</div>
			</div>
		</div>
	);
}

export default App;
