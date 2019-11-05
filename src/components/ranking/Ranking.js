import { h } from 'preact';
import style from './Ranking.css';

const teams = {
	'Sky High': { team_color: 'Black' },
	'Blue Steel': { team_color: 'Blue' }
};

const renderPortrait = (team_color, rider_type) => {
    if (rider_type) {
        return (
            <div class={style['Ranking-left']}>
                <img
                    src={`../assets/images/rider-portraits/${team_color.toLowerCase()}-${rider_type.toLowerCase()}.png`}
                    alt={`${team_color} ${rider_type}`}
                />
            </div>
        );
    } else {
        return (
            <div class={style['Ranking-left']} data-team={true}>
                <img
                    src={`../assets/images/rider-portraits/${team_color.toLowerCase()}-sprinter.png`}
                    alt={`${team_color} Sprinter`}
                />
                <img
                    src={`../assets/images/rider-portraits/${team_color.toLowerCase()}-rouleur.png`}
                    alt={`${team_color} Rouleur`}
                />
            </div>
        );
    }
}

const renderTitle = (position, team_name, rider_type, cups) => {
    return (
        <div class={style['Ranking-center']}>
            <h3>{position}. {team_name}{rider_type ? `'s ${rider_type}` : ''}</h3>
            <ul>
                {Object.entries(cups).map(([ key, value ]) => {
                    return (
                        <li>
                            <img src={`../assets/icons/${key}-trophy-icon.svg`} alt={key} />
                            <span>x {value}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const renderResult = (position, split_time, points) => {
    return (
        <div class={style['Ranking-right']}>
            {typeof split_time !== 'undefined'
                ? position === 1
                    ? (
                        <img
                            src="../assets/icons/yellow-jersey-icon.svg"
                            alt="Yellow Jersey"
                        />
                    ) : (
                        <span>+{split_time}"</span>
                    )
                : (
                    <span>{points}</span>
                )
            }
        </div>
    );
}

const Ranking = ({ title, ranks }) => (
	<div class={style.Ranking}>
		<h2>{title} Ranking</h2>
		<ul>
			{ranks.map((rank, index) => {
				let { team_name, rider_type, cups, split_time, points } = rank;
                let { team_color } = teams[team_name];
                
				return (
					<li>
                        {renderPortrait(team_color, rider_type)}
						{renderTitle(index + 1, team_name, rider_type, cups)}
						{renderResult(index + 1, split_time, points)}
					</li>
				);
			})}
		</ul>
	</div>
);

export default Ranking;
