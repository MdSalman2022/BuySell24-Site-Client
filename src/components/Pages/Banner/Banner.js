import React from 'react'

function Banner() {
    return (
        <div className="hero bg-primary rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-96 ">
                <img src="https://i.ibb.co/8BbcDYV/OBDKVE0.jpg" className="flex max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Buy Sell 24/7</h1>
                    <p className="py-6">We will help you to get the best deal possible in our marketplace.</p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default Banner
