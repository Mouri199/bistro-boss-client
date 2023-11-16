
import Section from '../Section/Section';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'

const Cards = () => {
    return (
        <div>
            <div>
                <Section
                    heading={'Should Try'}
                    subHeading={'Chef Recommends'}>

                </Section>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:mx-10 mx-5 gap-5 mb-16'>
                    <div className="card card-compact w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={img2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='text-center'>
                                <h2 className='text-2xl font-inter font-semibold'>Caeser Salad</h2>
                                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            </div>
                            <div className="card-actions justify-center">
                                <button className="btn uppercase text-[#BB8506] bg-[#E8E8E8]">Add To cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={img3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='text-center'>
                                <h2 className='text-2xl font-inter font-semibold'>Caeser Salad</h2>
                                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            </div>
                            <div className="card-actions justify-center">
                                <button className="btn uppercase text-[#BB8506] bg-[#E8E8E8]">Add To cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img className='w-full' src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='text-center'>
                                <h2 className='text-2xl font-inter font-semibold'>Caeser Salad</h2>
                                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            </div>
                            <div className="card-actions justify-center">
                                <button className="btn uppercase text-[#BB8506] bg-[#E8E8E8]">Add To cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;