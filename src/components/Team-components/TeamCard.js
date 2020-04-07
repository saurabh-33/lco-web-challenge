import React from "react";
// import memberPlaceholderImg from "../assets/team-member-placeholder.jpg";

const TeamCard = props => {
	return (
		<div className="team-card unfade-animation">
			<div className="pic-container">
				<img src={props.pic} alt={`${props.name}`} />
			</div>
			<div className="name">
				<span>{props.name}</span>
			</div>
			<div className="details">{props.details}</div>
		</div>
	);
};

export default TeamCard;
