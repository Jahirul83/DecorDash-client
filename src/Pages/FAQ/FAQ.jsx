import faqPic from '../../assets/undraw_Questions_re_1fy7.png';

const FAQ = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={faqPic} className="max-w-sm w-1/2 md:w-full rounded-lg shadow-2xl" />
                    <div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How do I choose the right decor for my home?
                            </div>
                            <div className="collapse-content">
                                <p>Choosing the right decor starts with identifying your style and preferences. Browse our collections to find pieces that resonate with you. Consider the color scheme, functionality, and overall theme of your space. Our design experts are available to provide personalized recommendations to help you create a cohesive look.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What makes Home Decor Haven unique?
                            </div>
                            <div className="collapse-content">
                                <p>Home Decor Haven is dedicated to offering a curated selection of high-quality, stylish, and sustainable home decor. We prioritize customer satisfaction and provide detailed information about our products. Our commitment to quality and design excellence sets us apart, ensuring you receive the best for your home.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Can I get design advice from Home Decor Haven?
                            </div>
                            <div className="collapse-content">
                                <p>Yes! We offer personalized design advice to help you transform your space. Contact us with your design questions or schedule a consultation with our experts. Whether you need help with selecting the right pieces or creating a complete design plan, we are here to assist you every step of the way.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                How can I stay updated on new arrivals and promotions?
                            </div>
                            <div className="collapse-content">
                                <p>Stay updated by subscribing to our newsletter and following us on social media. You`ll be the first to know about new arrivals, exclusive promotions, and design tips. Join our community to get inspired and make the most of our latest offerings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;