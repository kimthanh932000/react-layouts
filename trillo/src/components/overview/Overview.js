import React from "react";
import svgSprite from "../../img/sprite.svg";
import './overview.scss'
import Button from '../button/Button'

const Overview = () => {

	return (
		<div className="overview">
			<h1 className="overview__heading">Hotel Las Palmas</h1>
			<div className="overview__stars">
				<svg className="overview__icon-star">
					<use href={`${svgSprite}#icon-star`}></use>
				</svg>
				<svg className="overview__icon-star">
					<use href={`${svgSprite}#icon-star`}></use>
				</svg>
				<svg className="overview__icon-star">
					<use href={`${svgSprite}#icon-star`}></use>
				</svg>
				<svg className="overview__icon-star">
					<use href={`${svgSprite}#icon-star`}></use>
				</svg>
				<svg className="overview__icon-star">
					<use href={`${svgSprite}#icon-star`}></use>
				</svg>
			</div>
			<div className="overview__location">
				<svg className="overview__icon-location">
					<use href={`${svgSprite}#icon-location-pin`}></use>
				</svg>
				<Button/>
				{/*<button className="btn-inline">Albufeira, Portugal</button>*/}
			</div>
			<div className="overview__rating">
				<div className="overview__rating-average">8.6</div>
				<div className="overview__rating-count">429 votes</div>
			</div>
		</div>
	)
}

export default Overview
