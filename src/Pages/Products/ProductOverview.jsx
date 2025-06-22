import React from 'react'
import Navbar from '../../Components/Navbar'
import Cart from '../Cart/Cart';
import Product1 from '../../assets/p1.png'

function ProductOverview() {

    const data = [
        {
            imgelink: Product1,
        },
        {
            imgelink: Product1,
        },
        {
            imgelink: Product1,
        },
        {
            imgelink: Product1,
        },
        {
            imgelink: Product1,
        },
    ];

    const [active, setActive] = React.useState(
        Product1,
    );


    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
                                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center w-100"
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
                        <Cart cart="Add To Cart" buyNow="Buy Now" url1="/orderdetails" />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default ProductOverview