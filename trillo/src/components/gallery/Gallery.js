import React from "react";
import './gallery.scss';

const Gallery = () => {

    return (
        <div className="gallery">
            <figure className="gallery__item">
				<img src="../../img/hotel-1.jpg" alt="" className="gallery__photo"/>
            </figure>
			<figure className="gallery__item">
				<img src="../../img/hotel-2.jpg" alt="" className="gallery__photo"/>
            </figure>
			<figure className="gallery__item">
				<img src="../../img/hotel-3.jpg" alt="" className="gallery__photo"/>
            </figure>
        </div>
    )
}

export default Gallery
