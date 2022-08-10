import React from "react";
import svgSprite from "../../img/sprite.svg";
import './sidenav.scss'

const SideNav = () => {

	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<li className="side-nav__item side-nav__item--active">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use href={`${svgSprite}#icon-home`}></use>
						</svg>
						<span>Home</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use href={`${svgSprite}#icon-aircraft-take-off`}></use>
						</svg>
						<span>Flight</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use href={`${svgSprite}#icon-key`}></use>
						</svg>
						<span>Car rental</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="#" className="side-nav__link">
						<svg className="side-nav__icon">
							<use href={`${svgSprite}#icon-map`}></use>
						</svg>
						<span>Tours</span>
					</a>
				</li>
			</ul>
			<div className="legal">
				&copy; 2022 by trillo. All rights reserved.
			</div>
		</nav>
	)
}

export default SideNav
