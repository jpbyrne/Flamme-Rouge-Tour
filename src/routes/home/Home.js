import { h } from 'preact';
import style from './Home.css';

const teams = {
	'Sky High': { team_color: 'Black' },
	'Blue Steel': { team_color: 'Blue' }
};

const stages = [
	{
		time_ranking: [
			{
				team_name: 'Sky High',
				rider_type: 'Sprinter',
				split_time: 0
			},
			{
				team_name: 'Blue Steel',
				rider_type: 'Rouleur',
				split_time: 0
			}
		],
		team_ranking: [
			
		]
	},
	{},
	null,
	null,
	null
];

const Home = () => (
	<div class={style.Home}>
		<img src="../assets/images/logo.svg" alt="Flamme Rouge" />
        <h1>Le Petit Tour 2019</h1>
        <nav>
            <ul>
				{stages.map((stage, index) => {
					return <li data-complete={!!stage}>Stage {index + 1}</li>;
				})}
            </ul>
        </nav>
		<main>
			<section>
				<h2>Time Ranking</h2>
				<ul>
					{stages[0].time_ranking.map((rider, index) => {
						let { team_name, rider_type, split_time } = rider;
						let { team_color } = teams[team_name];

						return (
							<li>
								<img
									src={`../assets/images/rider-portraits/${team_color.toLowerCase()}-${rider_type.toLowerCase()}.png`}
									alt={`${team_color} ${rider_type}`}
								/>
								<h3>{index + 1}. {team_name}'s {rider_type}</h3>
								{!index ? (
									<img
										src="../assets/icons/yellow-jersey-icon.svg"
										alt="Yellow Jersey"
									/>
								) : (
									<span>+{split_time}"</span>
								)}
							</li>
						);
					})}
				</ul>
			</section>
			<hr />
			<section>
				<h2>Team Ranking</h2>
			</section>
		</main>
	</div>
);

export default Home;
