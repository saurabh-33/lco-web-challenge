import React from "react";
import Accordian from "./Faq-components/Accordian";
import "../styles/Faq.css";

const Faq = () => {
	const questionString =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam provident aperiam ducimus tempore dolorem ad harum sunt vitae quaerat ?";
	const answerString =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum accusantium molestiae libero eaque quod voluptas culpa iste neque a dolores quasi quia adipisci accusamus, optio explicabo deleniti natus, asperiores enim ipsa laborum facere necessitatibus. Ipsam impedit vel in a.";

	return (
		<section className="Faq">
			<article className="content faq-animate">
				<header>
					<h2>FAQ</h2>
				</header>
				<section>
					<ol>
						<li>
							<Accordian question={questionString} answer={answerString} />
						</li>
						<li>
							<Accordian question={questionString} answer={answerString} />
						</li>
						<li>
							<Accordian question={questionString} answer={answerString} />
						</li>
						<li>
							<Accordian question={questionString} answer={answerString} />
						</li>
					</ol>
				</section>
			</article>
		</section>
	);
};

export default Faq;
