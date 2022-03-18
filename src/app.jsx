import { h } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Helmet from "preact-helmet";

import Header from './components/header';
import Home from './routes/home';
//import Contact from './routes/contact';
//import Blog from './routes/blog';

const App = () => (
	<>
		<Header />
		<Router>
			<Home path="/" />
			<AsyncRoute 
				path="/contact"
				getComponent={() => import('./routes/contact').then(module => module.default)}
			/>
			<AsyncRoute 
				path="/blog"
			    getComponent={() => import('./routes/blog').then(module => module.default)}
			/>
		</Router>
	</>
)

export default App;
