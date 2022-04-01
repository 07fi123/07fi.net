import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.module.scss';

const Header = () => (
	<header class={style.header}>
		<h1>07fi.net</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Hello</Link>
			<Link activeClassName={style.active} href="/contact">Contact</Link>
			<Link activeClassName={style.active} href="/blog">Blog</Link>
			<a activeClassName={style.active} href="https://github.com/07fi123">Github</a>
		</nav>
	</header>
);

export default Header;
