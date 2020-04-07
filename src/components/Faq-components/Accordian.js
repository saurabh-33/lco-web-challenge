import React, { Component, createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Accordian extends Component {
	state = {
		isAccordianActive: false,
		answerMaxHeight: `0px`
	};

	answerNode = createRef();

	toggleAccordian = e => {
		this.setState({
			isAccordianActive: this.state.isAccordianActive ? false : true,
			answerMaxHeight:
				this.state.answerMaxHeight === `0px`
					? `${this.answerNode.current.scrollHeight}px`
					: `0px`
		});
	};

	render() {
		return (
			<div className="accordian">
				<button
					className={
						this.state.isAccordianActive
							? "question-container active"
							: "question-container"
					}
					onClick={this.toggleAccordian}
				>
					<span className="question">{this.props.question}</span>
					<FontAwesomeIcon
						icon={faChevronRight}
						className={
							this.state.isAccordianActive ? "chevron active" : "chevron"
						}
					/>
				</button>
				<div
					className="answer"
					ref={this.answerNode}
					style={{ maxHeight: this.state.answerMaxHeight }}
				>
					<p>{this.props.answer}</p>
				</div>
			</div>
		);
	}
}

export default Accordian;
