import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faEnvelope,
	faKey,
	faEye,
	faTimes
} from "@fortawesome/free-solid-svg-icons";
import "../styles/SignUpModal.css";

class SignUpModal extends Component {
	state = {
		isPasswordVisible: false,
		shouldModalHide: false,
		shouldEnableCloseClick: true
	};

	hideSignUpModal = e => {
		if (this.state.shouldEnableCloseClick) {
			this.setState({
				shouldEnableCloseClick: false,
				shouldModalHide: true
			});
			setTimeout(() => {
				this.setState({
					shouldEnableCloseClick: true,
					shouldModalHide: false
				});
				this.props.toggleSignUpModal();
			}, 500);
		}
	};

	changePasswordVisibility = e => {
		this.setState({
			isPasswordVisible: this.state.isPasswordVisible ? false : true
		});
	};

	render() {
		return (
			<div
				className={
					this.props.isSignUpModalActive
						? "signup-modal-container active"
						: "signup-modal-container"
				}
				aria-hidden="true"
			>
				<div
					className={
						this.props.isSignUpModalActive
							? this.state.shouldModalHide
								? "signup-modal active hide-animation"
								: "signup-modal active"
							: "signup-modal"
					}
				>
					<header>
						sign up
						<span className="signup-modal-close" onClick={this.hideSignUpModal}>
							<FontAwesomeIcon icon={faTimes} />
						</span>
					</header>
					<article>
						<form>
							<label htmlFor="signup-email">
								<span className="label-text">Username:</span>
								<div className="input-container">
									<FontAwesomeIcon icon={faEnvelope} />
									<input type="email" id="signup-email" name="email" required />
								</div>
							</label>
							<label htmlFor="signup-username">
								<span className="label-text">Username:</span>
								<div className="input-container">
									<FontAwesomeIcon icon={faUser} />
									<input
										type="text"
										id="signup-username"
										name="username"
										required
									/>
								</div>
							</label>
							<label htmlFor="signup-password">
								<span className="label-text">Password:</span>
								<div className="input-container">
									<FontAwesomeIcon icon={faKey} />
									<input
										type={this.state.isPasswordVisible ? "text" : "password"}
										id="signup-password"
										name="password"
										required
									/>
									<FontAwesomeIcon
										icon={faEye}
										className={
											this.state.isPasswordVisible
												? "password-visibility-icon active"
												: "password-visibility-icon"
										}
										onClick={this.changePasswordVisibility}
									/>
								</div>
							</label>
						</form>
					</article>
					<footer>
						<button>submit</button>
					</footer>
				</div>
			</div>
		);
	}
}
export default SignUpModal;
