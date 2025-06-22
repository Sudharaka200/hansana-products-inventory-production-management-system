import React from 'react'
import Img11 from '../assets/11.png'
import Img12 from '../assets/12.png'
import Img13 from '../assets/13.png'
import Img14 from '../assets/14.png'
import Img15 from '../assets/15.png'
import Img16 from '../assets/16.png'


const data = [
    {
        imageLink: Img11,
    },
    {
        imageLink: Img12,
    },
    {
        imageLink: Img13,
    },
    {
        imageLink: Img14,
    },
    {
        imageLink: Img15,
    },
    {
        imageLink: Img16,
    },
    {
        imageLink: Img13,
    },
    {
        imageLink: Img11,
    },
    {
        imageLink: Img15,
    },

];

function BottomImageGallery() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-20">
                {data.map(({ imageLink }, index) => (
                    <div key={index}>
                        <img
                            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                            src={imageLink}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BottomImageGallery
