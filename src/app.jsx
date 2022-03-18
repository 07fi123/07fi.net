import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';

// Code-splitting is automated for `routes` directory
import Home from './routes/home';
import Contact from './routes/contact';
import Blog from './routes/blog';

const App = () => (
	<>
		<Header />
		<Router>
			<Home path="/" />
			<Contact path="/contact"/>
			<Blog path="/blog"/>
		</Router>
	</>
)

export default App;
