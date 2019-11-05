import { h } from 'preact';
import style from './Home.css';

import Ranking from '../../components/ranking/Ranking';

import data from '../../assets/data';

const Home = () => {
	let { completed, total } = data.stage;

	let stages = [];
	for (let stage = 1; stage <= total; stage++) {
		stages.push(<li data-complete={stage <= completed}>Stage {stage}</li>);
	}
	

	return (
		<div class={style.Home}>
			<img src="../assets/images/flamme-rouge-logo.svg" alt="Flamme Rouge" />
			<h1>Le Petit Tour 2019</h1>
			<nav>
				<ul>{stages}</ul>
			</nav>
			<main>
				<Ranking title="time" ranks={data.time_ranking} />
				<hr />
				<Ranking title="team" ranks={data.team_ranking} />
			</main>
		</div>
	)
};

export default Home;
