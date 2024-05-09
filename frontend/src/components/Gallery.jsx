import React from 'react';
//import './gallery.css';
    import { useEffect, useState } from 'react';
    import axios from 'axios';

    export const Gallery = () => {
        const [images, setImages] = useState([]);

        useEffect(() => {
            const fetchImages = async () => {
                try {
                    const response = await axios.get('/getImages');
                    setImages(response.data);
                } catch (error) {
                    console.error('Failed to fetch images:', error);
                }
            };

            fetchImages();
        }, []);

        // rest of the code...
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className={`photo ${image.theme}`}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;