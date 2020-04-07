import React, { Component } from "react";
import logo from "../assets/sports-logo-transparent-250X250.png";
import menuBtnBackgroundImg from "../assets/basketball-for-menu-200X200.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import Home from "./Home";
import About from "./About";
import Tournament from "./Tournament";
import Team from "./Team";
import Video from "./Video";
import Faq from "./Faq";
import Contact from "./Contact";
import NotFound from "./NotFound";

class Appbar extends Component {
	state = {
		isMenuActive: false,
		shouldBallSpin: true,
		isLoginModalActive: false,
		isSignUpModalActive: false
	};

	toggleMenu = e => {
		this.setState({
			isMenuActive: this.state.isMenuActive ? false : true
		});
	};

	handleBallSpin = e => {
		this.setState({
			shouldBallSpin: this.state.shouldBallSpin ? false : true
		});
	};

	toggleLoginModal = e => {
		this.setState({
			isLoginModalActive: this.state.isLoginModalActive ? false : true
		});
	};

	toggleSignUpModal = e => {
		this.setState({
			isSignUpModalActive: this.state.isSignUpModalActive ? false : true
		});
	};

	render() {
		return (
			<BrowserRouter>
				<header className="main-header">
					<h1 className="website-title">LCO basketball tournament</h1>
					<div className="appbar-header" role="presentation" aria-hidden="true">
						<div
							className={
								this.state.isMenuActive
									? "upper-cover-div"
									: "upper-cover-div active"
							}
						></div>
						<img className="logo" src={logo} alt="" />
						<div
							className={
								this.state.isMenuActive ? "menu-btn" : "menu-btn active"
							}
							onClick={this.toggleMenu}
							onMouseEnter={this.handleBallSpin}
							onMouseLeave={this.handleBallSpin}
						>
							<img
								className={
									this.state.shouldBallSpin
										? "menu-btn-background-img play"
										: "menu-btn-background-img"
								}
								src={menuBtnBackgroundImg}
								alt=""
							/>
							<span className="menu-btn-text">MENU</span>
							<div
								className={
									this.state.isMenuActive
										? "close-menu-btn active"
										: "close-menu-btn"
								}
							>
								<FontAwesomeIcon icon={faTimes} />
							</div>
						</div>
					</div>
					<nav
						className={
							this.state.isMenuActive ? "expanded-menu active" : "expanded-menu"
						}
					>
						<ul className="member-actions-container">
							<li>
								<button id="login" onClick={this.toggleLoginModal}>
									login
								</button>
							</li>
							<li>
								<button id="signup" onClick={this.toggleSignUpModal}>
									sign up
								</button>
							</li>
						</ul>
						<ul className="navlinks">
							<li>
								<NavLink
									exact
									to="/lco-web-challenge"
									onClick={this.toggleMenu}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/lco-web-challenge/About"
									onClick={this.toggleMenu}
								>
									About Us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/lco-web-challenge/Tournament"
									onClick={this.toggleMenu}
								>
									Tournament
								</NavLink>
							</li>
							<li>
								<NavLink to="/lco-web-challenge/Team" onClick={this.toggleMenu}>
									Team
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/lco-web-challenge/Video"
									onClick={this.toggleMenu}
								>
									Video
								</NavLink>
							</li>
							<li>
								<NavLink to="/lco-web-challenge/Faq" onClick={this.toggleMenu}>
									FAQ
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/lco-web-challenge/Contact"
									onClick={this.toggleMenu}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
					<LoginModal
						toggleLoginModal={this.toggleLoginModal}
						isLoginModalActive={this.state.isLoginModalActive}
					/>
					<SignUpModal
						toggleSignUpModal={this.toggleSignUpModal}
						isSignUpModalActive={this.state.isSignUpModalActive}
					/>
					<Switch>
						<Route
							exact
							path="/lco-web-challenge"
							render={() => (
								<Home
									toggleLoginModal={this.toggleLoginModal}
									toggleSignUpModal={this.toggleSignUpModal}
								/>
							)}
						/>
						<Route path="/lco-web-challenge/About" component={About} />
						<Route
							path="/lco-web-challenge/Tournament"
							component={Tournament}
						/>
						<Route path="/lco-web-challenge/Team" component={Team} />
						<Route path="/lco-web-challenge/Video" component={Video} />
						<Route path="/lco-web-challenge/Faq" component={Faq} />
						<Route path="/lco-web-challenge/Contact" component={Contact} />
						<Route component={NotFound} />
					</Switch>
				</header>
			</BrowserRouter>
		);
	}
}
export default Appbar;
