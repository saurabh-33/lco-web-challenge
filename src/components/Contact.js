import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";

const Contact = () => {
	return (
		<section className="Contact">
			<article className="content">
				<h2 className="slide-paper-right-animate">contact</h2>
				<section className="phone slide-paper-left-animate">
					<div className="container">
						<header>
							<h3>call at</h3>
							<FontAwesomeIcon icon={faPhone} className="phone-animate" />
						</header>
						<p>
							XXXX-XXXX-XX <br />
							OR <br />
							XXXX-XXXX-XX
						</p>
					</div>
				</section>
				<section className="address slide-paper-right-animate">
					<div className="container">
						<header>
							<h3>address</h3>
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								className="map-marker-alt-animate"
							/>
						</header>
						<p>
							LCO Basketball ground, 55 ficticious road, Ficticious lake, India
						</p>
					</div>
				</section>
			</article>
		</section>
	);
};

export default Contact;
