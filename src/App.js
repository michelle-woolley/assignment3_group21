import React from 'react'
import Search from './Components/Search';
import './App.css';
import Typography from '@material-ui/core/Typography'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class App extends React.Component {

	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar variant="dense">
						<IconButton edge="start">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit">
							Toxins
					</Typography>
					</Toolbar>
				</AppBar>
				<div id="app-container">
					<Search />
				</div>
			</div>
		);
	}
}
export default App;

