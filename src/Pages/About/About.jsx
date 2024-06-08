import aboutPic from '../../assets/undraw_Portfolio_website_re_jsdd.png';

const About = () => {

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={aboutPic} className="max-w-sm rounded-lg shadow-2xl w-3/4 md:w-full" />
                    <div>
                        <h1 className="text-5xl font-bold">About Home Decor Haven</h1>
                        <h2 className="text-3xl font-bold">Welcome</h2>
                        <p className="py-6">Home Decor Haven is your go-to source for stylish and functional home decor. Our mission is to inspire and help you create a space that reflects your unique style.</p>
                        <h2 className="text-3xl font-bold">Our Offerings</h2>
                        <p className="py-6">Discover a curated selection of furniture, lighting, and accessories. Our design experts are here to help you find the perfect pieces to elevate your home.</p>
                        <h2 className="text-3xl font-bold">Our Commitment</h2>
                        <p className="py-6">We are dedicated to quality, sustainability, and customer satisfaction. Join us in making your home a beautiful and inviting space.</p>
                        <h2 className="text-3xl font-bold">Get Inspired</h2>
                        <p className="py-6">Explore our ideas and tips for decorating your home. Whether it`s a small update or a complete makeover, we provide the inspiration you need.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
