import React from "react";
import './gallery.scss';
import hotel01 from '../../img/hotel-1.jpg';
import hotel02 from '../../img/hotel-2.jpg';
import hotel03 from '../../img/hotel-3.jpg';

const Gallery = () => {

    return (
        <div className="gallery">
            <figure className="gallery__item">
				<img src={hotel01} alt="" className="gallery__photo"/>
            </figure>
			<figure className="gallery__item">
				<img src={hotel02} alt="" className="gallery__photo"/>
            </figure>
			<figure className="gallery__item">
				<img src={hotel03} alt="" className="gallery__photo"/>
            </figure>
        </div>
    )
}

export default Gallery
