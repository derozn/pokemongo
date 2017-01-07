import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/* Main component */
import MainComponent from '../components/Main';

/* Views */
import HomeView from '../views/Home';
import PokemonDetailsView from '../views/PokemonDetails';
import AboutView from '../views/About';

let routes = (

	<Router history={hashHistory}>
		<Route path='/' component={MainComponent}>
			<IndexRoute component={HomeView} />
			<Route path='pokemondetails/:id' component={PokemonDetailsView} />
			<Route path='about' component={AboutView} />
		</Route>
	</Router>
	
);

export default routes;
