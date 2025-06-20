import React from 'react'
import Navbar from '../../Components/Navbar'

function ProductOverview() {

    const data = [
        {
            imgelink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
    ];

    const [active, setActive] = React.useState(
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    );


    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-20">
                <div className="">
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                                src={active}
                                alt=""
                            />
                        </div>
                        <div className="grid grid-cols-5 gap-4">
                            {data.map(({ imgelink }, index) => (
                                <div key={index}>
                                    <img
                                        onClick={() => setActive(imgelink)}
                                        src={imgelink}
                                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                        alt="gallery-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-4xl font-bold text-gray-900 sm:text-4xl'>Ceylon Cinnamon</h1>
                    <p className='text-base text-pretty text-gray-700 sm:text-lg/relaxed mt-5'>Known as “true cinnamon,” Ceylon Cinnamon is one of Sri Lanka’s most prized spices — celebrated for its delicate flavor, sweet aroma, and powerful health benefits. At Hansana Product, we bring you premium-grade Ceylon cinnamon, carefully harvested from mature inner bark and hand-rolled into soft, golden quills.
                        Perfect for both sweet and savory dishes, Ceylon cinnamon adds a warm, elegant touch to your cooking. It's also rich in antioxidants and supports healthy blood sugar levels, making it a favorite in traditional wellness.
                    </p>
                    <h2 className='text-2xl font-bold text-gray-900 sm:text-4xl mt-5'>Rs 12,000</h2>
                    <p className='text-base text-pretty text-gray-700 sm:text-lg/relaxed mt-5'>Whether you're baking, brewing, or seasoning — let Hansana Ceylon Cinnamon bring purity and tradition to your kitchen.</p>
                    <div class="mt-4 flex gap-4 sm:mt-6">
                                <a
                                    class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                                    href="/cart"
                                >
                                    Add To Cart
                                </a>

                                <a
                                    class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                                    href="#"
                                >
                                    Buy Now
                                </a>
                            </div>
                </div>
            </div>




        </div>
    )
}

export default ProductOverview