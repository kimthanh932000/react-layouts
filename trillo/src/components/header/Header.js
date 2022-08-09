import React from 'react'
import logo from "../../img/logo.png";
import svgSprite from "../../img/sprite.svg";
import userPhoto from "../../img/user.jpg";
import './header.scss';

const Header = () => {

	return (
		<header className="header">
			<img src={logo} alt="trillo logo" className="logo" />

			<form action="#" className="search">
				<input
					type="text"
					className="search__input"
					placeholder="Search hotels"
				/>
				<button className="search__button">
					<svg className="search__icon">
						<use href={`${svgSprite}#icon-magnifying-glass`}></use>
					</svg>
				</button>
			</form>

			<nav className="user-nav">
				<div className="user-nav__icon-box">
					<svg className="user-nav__icon">
						<use href={`${svgSprite}#icon-bookmark`}></use>
					</svg>
					<span className="user-nav__notification">7</span>
				</div>
				<div className="user-nav__icon-box">
					<svg className="user-nav__icon">
						<use href={`${svgSprite}#icon-chat`}></use>
					</svg>
					<span className="user-nav__notification">13</span>
				</div>
				<div className="user-nav__user">
					<img src={userPhoto} alt="user avatar" className="user-nav__user-photo"/>
					<span className="user-nav__user-name">Jonas</span>
				</div>
			</nav>
		</header>
	)
}

export default Header
