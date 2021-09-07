import React from 'react'
import { fashionDeals, dealsOfDay, collections, bestPrices } from './api/ProductsApi';


const ProductSection = () => {
    return (
        <>
            {/*fashionDeals card  */}
            <div className="container">
                <h2 className="mb-3">Deals of the Day</h2>
                <div className='row'>
                    {fashionDeals.map((curpro) => {
                        const { id, productImg, productName, dis, curLine } = curpro;
                        return (
                            <div className="col-6 col-lg-2 overflow-hidden" key={id}>
                                <div className="" key={id}>
                                    <div>
                                        <img src={productImg} alt="fashionImage" className='img-fluid h-100' />
                                    </div>

                                    <p>{productName}</p>
                                    <p>{dis}</p>
                                    <p>{curLine}</p>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/*dealsOfDay card  */}
            <div className="container">
                <h2 className="mb-3">Deals of the Day</h2>
                <div className='row'>
                    {dealsOfDay.map((curpro) => {
                        const { id, productImg, productName, dis, curLine } = curpro;
                        return (
                            <div className="col-6 col-lg-2 overflow-hidden" key={id}>
                                <div className="" key={id}>
                                    <div>
                                        <img src={productImg} alt="fashionImage" className='img-fluid h-100' />
                                    </div>

                                    <p>{productName}</p>
                                    <p>{dis}</p>
                                    <p>{curLine}</p>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/*collections card  */}
            <div className="container">
                <h2 className="mb-3">Deals of the Day</h2>
                <div className='row'>
                    {collections.map((curpro) => {
                        const { id, productImg, productName, dis, curLine } = curpro;
                        return (
                            <div className="col-6 col-lg-2 overflow-hidden" key={id}>
                                <div>
                                    <div>
                                        <img src={productImg} alt="fashionImage" className='img-fluid h-100' />
                                    </div>

                                    <p>{productName}</p>
                                    <p>{dis}</p>
                                    <p>{curLine}</p>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/*bestPrices card  */}
            <div className="container">
                <h2 className="mb-3">Deals of the Day</h2>
                <div className='row'>
                    {bestPrices.map((curpro) => {
                        const { id, productImg, productName, dis, curLine } = curpro;
                        return (
                            <div className="col-6 col-lg-2 overflow-hidden" key={id}>
                                <div>
                                    <div>
                                        <img src={productImg} alt="fashionImage" className='img-fluid h-100' />
                                    </div>

                                    <p>{productName}</p>
                                    <p>{dis}</p>
                                    <p>{curLine}</p>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>



        </>
    )
}

export default ProductSection
