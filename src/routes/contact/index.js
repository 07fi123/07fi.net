import { h } from 'preact';
import { useState } from 'preact/hooks';

import style from './style.scss';
//import Morgen from '../../components/widgets/morgen'
const Contact = () => {
	const [email,showEmail] = useState(false);
	return (
	<div class={style.home}>
		<h1>A few ways to say Hello! 👋</h1>
		<div class={style.fixedWidth1000}>
			<div class={style.columns}>
				<div class={style.column}>
					<h3>Send an email
						{!email && <button class={style.notRobot} onClick={(e) => showEmail(!email)}>
						after I check that you're not a robot 🤖
					</button>}
						{email && <ShowEmail />}
                    or setup a meeting. Click to <a class={style.book} href="https://book.morgen.so/07fi12392/open-hours">book a consultation.</a></h3>
				</div>
			</div>
		</div>
	</div>
);
}

const ShowEmail = () => {
	return (
		<span> to <a class={style.book} href="mailto:contact@07fi.net">contact@07fi.net</a> </span>
	)
}


export default Contact;
