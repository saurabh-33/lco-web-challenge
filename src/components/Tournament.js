import React from "react";
import tournamentImg from "../assets/tournament-background-600X450.png";
import "../styles/Tournament.css";

const Tournament = () => {
	return (
		<section className="Tournament">
			<article className="content unfade-animation">
				<header>
					<h2>Tournament</h2>
				</header>
				<section className="tournament-container">
					<img src={tournamentImg} alt="" />
					<h3>
						big tournament
						<br />
						<strong>coming soon</strong> !
					</h3>
				</section>
			</article>
		</section>
	);
};

export default Tournament;
