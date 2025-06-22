import React from 'react'
// import backgroundImage from '../assets/BackgrounImg.png';

function Banner(props) {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${props.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <section class=" lg:grid lg:h-screen lg:place-content-center">
                    <div class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                        <div class="mx-auto max-w-prose text-center">
                            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">{props.bannerTitle}</h1>

                            <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">{props.bannerP}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Banner
