import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import TypingEffect from 'react-typing-effect'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                {/* Typing Effect for the Title */}
                <div className='flex flex-col items-center'>
                    <TypingEffect
                        text="LATEST"
                        speed={100}
                        eraseSpeed={50}
                        eraseDelay={3000}
                        typingDelay={200}
                        className='font-bold text-4xl'
                    />
                    <TypingEffect
                        text="COLLECTIONS"
                        speed={100}
                        eraseSpeed={50}
                        eraseDelay={4000}
                        typingDelay={1000}
                        className='font-bold text-4xl'
                    />
                </div>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-4'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection
