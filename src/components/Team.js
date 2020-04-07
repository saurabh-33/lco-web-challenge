import React from "react";
import TeamCard from "./Team-components/TeamCard";
import "../styles/Team.css";

const Team = () => {
	const cardsContent = [
		{
			name: "player_name 1",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet tempora, expedita perspiciatis nostrum rem sint reiciendis, molestias vero, ex debitis repudiandae dolorem? Exercitationem architecto harum magnam reiciendis laborum quod quisquam natus magni ipsa nisi. Maiores odit, dolorem odio ipsum optio expedita suscipit ratione blanditiis. Eveniet voluptatum cum officiis? Expedita?"
		},
		{
			name: "player_name 2",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet tempora, expedita perspiciatis nostrum rem sint reiciendis, molestias vero, ex debitis repudiandae dolorem? Exercitationem architecto harum magnam reiciendis laborum quod quisquam natus magni ipsa nisi. Maiores odit, dolorem odio ipsum optio expedita suscipit ratione blanditiis. Eveniet voluptatum cum officiis? Expedita?"
		},
		{
			name: "player_name 3",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet tempora, expedita perspiciatis nostrum rem sint reiciendis, molestias vero, ex debitis repudiandae dolorem? Exercitationem architecto harum magnam reiciendis laborum quod quisquam natus magni ipsa nisi. Maiores odit, dolorem odio ipsum optio expedita suscipit ratione blanditiis. Eveniet voluptatum cum officiis? Expedita?"
		},
		{
			name: "player_name 4",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet tempora, expedita perspiciatis nostrum rem sint reiciendis, molestias vero, ex debitis repudiandae dolorem? Exercitationem architecto harum magnam reiciendis laborum quod quisquam natus magni ipsa nisi. Maiores odit, dolorem odio ipsum optio expedita suscipit ratione blanditiis. Eveniet voluptatum cum officiis? Expedita?"
		},
		{
			name: "player_name 5",
			details:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A amet tempora, expedita perspiciatis nostrum rem sint reiciendis, molestias vero, ex debitis repudiandae dolorem? Exercitationem architecto harum magnam reiciendis laborum quod quisquam natus magni ipsa nisi. Maiores odit, dolorem odio ipsum optio expedita suscipit ratione blanditiis. Eveniet voluptatum cum officiis? Expedita?"
		}
	];
	cardsContent.forEach((card, index) => {
		card.pic = require(`../assets/profile-pics/${index + 1}.jpg`);
		card.key = `team-card-pic-${index + 1}`;
	});

	return (
		<section className="Team">
			<section className="content">
				<header>
					<h2>our team</h2>
				</header>
				<div className="team-cards-container unfade-animation">
					{cardsContent.map(({ pic, name, details, key }) => (
						<TeamCard pic={pic} name={name} details={details} key={key} />
					))}
				</div>
			</section>
		</section>
	);
};

export default Team;
