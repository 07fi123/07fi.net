import { h } from 'preact';
import style from './style.scss';
//import Morgen from '../../components/widgets/morgen'
const Home = () => (
	<div class={style.home}>
		<h1>Hello, My name is Austin.</h1>
		<img src="/assets/mug.jpeg"/>
		<p>I build excellent software for organizations and individuals.<br/> What could I build <span class={style.forYou}>for you?</span></p>
		<p><a class={style.book} href="https://book.morgen.so/07fi12392/open-hours">Book a Consultation</a></p>
	</div>
);


export default Home;
