import { h } from 'preact';
import style from './Home.css';

import Ranking from '../../components/ranking/Ranking';

const stages = [
	{
		time_ranking: [
			{
				team_name: 'Sky High',
				rider_type: 'Sprinter',
				cups: {
					gold: 1,
					silver: 1,
					bronze: 1,
				},
				split_time: 0
			},
			{
				team_name: 'Blue Steel',
				rider_type: 'Rouleur',
				cups: {
					gold: 1,
					silver: 1,
					bronze: 1,
				},
				split_time: 10
			}
		],
		team_ranking: [
			{
				team_name: 'Sky High',
				cups: {
					gold: 1,
					silver: 1,
					bronze: 1,
				},
				points: 0
			},
		]
	},
	{},
	null,
	null,
	null
];

const Home = () => (
	<div class={style.Home}>
		<img src="../assets/images/flamme-rouge-logo.svg" alt="Flamme Rouge" />
        <h1>Le Petit Tour 2019</h1>
        <nav>
            <ul>
				{stages.map((stage, index) => {
					return <li data-complete={!!stage}>Stage {index + 1}</li>;
				})}
            </ul>
        </nav>
		<main>
			<Ranking title="time" ranks={stages[0].time_ranking} />
			<hr />
			<Ranking title="team" ranks={stages[0].team_ranking} />
		</main>
	</div>
);

export default Home;
