import React from 'react'
import Img1 from '../assets/1.png'
import Img2 from '../assets/2.png'
import Img3 from '../assets/3.png'
import Img4 from '../assets/4.png'
import Img5 from '../assets/5.png'
import Img6 from '../assets/6.png'
import Img7 from '../assets/7.png'
import Img8 from '../assets/8.png'
import Img9 from '../assets/9.png'
import Img10 from '../assets/10.png'

function ImageGallery() {
    return (
        <div>
            {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100"
                            src={Img1}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100 "
                            src={Img2}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100"
                            src={Img3}
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100"
                            src={Img4}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100"
                            src={Img5}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100 "
                            src={Img6}
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100"
                            src={Img7}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100 "
                            src={Img8}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100"
                            src={Img9}
                            alt="gallery-photo"
                        />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100"
                            src={Img10}
                            alt="gallery-photo"
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg object-cover object-center w-100"
                            src={Img4}
                            alt="gallery-photo"
                        />
                    </div>
                </div>
            </div> */}




            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div

                        className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <div

                        >
                            <img
                                alt=""
                                src={Img1}
                                className="size-full object-cover"
                            />
                        </div>
                    </div>
                    <div

                        className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                            alt=""
                            src={Img6}
                            className="size-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div

                        className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                            alt=""
                            src={Img3}
                            className="size-full object-cover"
                        />
                    </div>
                    <div

                        className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                            alt=""
                            src={Img4}
                            className="size-full object-cover"
                        />
                    </div>
                    <div

                        className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                            alt=""
                            src={Img5}
                            className="size-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div

                        className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                            alt=""
                            src={Img2}
                            className="size-full object-cover"
                        />
                    </div>
                    <div

                        className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                            alt=""
                            src={Img7}
                            className="size-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ImageGallery
