import img1 from '../../../assets/banner1.jpg'
import img2 from '../../../assets/banner2.jpg'
import img3 from '../../../assets/banner3.jpg'
import img4 from '../../../assets/banner4.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Welcome to Decor Dash</h3>
                            <p>Transform your space with our exquisite home decor pieces.</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Why Choose Us?</h3>
                            <p>Inspiring designs crafted with quality and care.</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Explore Our Collection</h3>
                            <p>Discover stylish furniture, lighting, and unique accents.</p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Create Your Dream Home</h3>
                            <p>Let us help you turn any room into a haven of beauty.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;