import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faEye,
	faKey,
	faTimes
} from "@fortawesome/free-solid-svg-icons";
import "../styles/LoginModal.css";

class LoginModal extends Component {
	state = {
		isPasswordVisible: false,
		shouldModalHide: false,
		shouldEnableCloseClick: true
	};

	hideLoginModal = e => {
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
				this.props.toggleLoginModal();
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
					this.props.isLoginModalActive
						? "login-modal-container active"
						: "login-modal-container"
				}
				aria-hidden="true"
			>
				<div
					className={
						this.props.isLoginModalActive
							? this.state.shouldModalHide
								? "login-modal active hide-animation"
								: "login-modal active"
							: "login-modal"
					}
				>
					<header>
						login
						<span className="login-modal-close" onClick={this.hideLoginModal}>
							<FontAwesomeIcon icon={faTimes} />
						</span>
					</header>
					<article>
						<form>
							<label htmlFor="login-username">
								<span className="label-text">Username:</span>
								<div className="input-container">
									<FontAwesomeIcon icon={faUser} />
									<input
										type="text"
										id="login-username"
										name="username"
										required
									/>
								</div>
							</label>
							<label htmlFor="login-password">
								<span className="label-text">Password:</span>
								<div className="input-container">
									<FontAwesomeIcon icon={faKey} />
									<input
										type={this.state.isPasswordVisible ? "text" : "password"}
										id="login-password"
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
export default LoginModal;
