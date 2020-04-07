import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.css";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="Home">
					<article className="content">
						<header>
							<h2>Home</h2>
						</header>
						<section className="jumbotron unfade-animation">
							<div className="jumbotron-content unfade-animation">
								<blockquote>Go fight for it team !</blockquote>
								<div className="action-btn-container">
									<button
										className="login-btn"
										onClick={this.props.toggleLoginModal}
									>
										login
									</button>
									<button
										className="sign-up-btn"
										onClick={this.props.toggleSignUpModal}
									>
										sign up
									</button>
								</div>
							</div>
							<div className="jumbotron-link unfade-animation">
								<a href="#who_are_we">
									<FontAwesomeIcon icon={faHandPointRight} />
									who are we ?
								</a>
							</div>
						</section>
						<section id="who_are_we">
							<header>
								<h3>
									We are <strong>LCO basketball team</strong>
								</h3>
							</header>
							<section>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Veniam delectus consectetur fugit ullam similique laudantium
									exercitationem provident dicta ipsa! Accusantium!
								</p>
							</section>
						</section>
					</article>
				</section>
			</React.Fragment>
		);
	}
}

export default Home;
