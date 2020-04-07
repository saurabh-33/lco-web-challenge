import React, { Component } from "react";
import "../styles/About.css";
import aboutDecorativeImg from "../assets/about-background-mobile-768X1024.png";

class About extends Component {
	render() {
		return (
			<section className="About">
				<article className="content">
					<div className="wrapper">
						<section className="main-content separate-main-content-animate">
							<h2>about us</h2>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
								dolores obcaecati amet, molestias eligendi nostrum numquam quas
								maiores alias! Esse suscipit ratione sequi facilis debitis.
								Nihil numquam possimus vero rem fugiat incidunt neque. Pariatur
								a esse beatae repudiandae libero, facilis quos repellat. Quis,
								adipisci quod? Quo, nisi? Dolores eius officia eaque totam,
								error adipisci maiores perspiciatis rem laboriosam beatae modi,
								veritatis consequuntur aperiam fugit distinctio commodi
								repudiandae, itaque at nobis iusto quam alias! Magnam iste quia
								placeat quo, autem cumque incidunt ducimus accusantium, sed
								minus earum voluptas quaerat atque eveniet iusto enim porro odit
								dolores? Dolore ducimus corrupti soluta voluptatibus?.
							</p>
						</section>
						<figure
							aria-hidden="true"
							role="presentation"
							className="background-img-container separate-img-animate"
						>
							<img src={aboutDecorativeImg} alt="" />
						</figure>
					</div>
				</article>
			</section>
		);
	}
}

export default About;
