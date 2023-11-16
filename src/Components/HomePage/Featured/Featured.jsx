import Section from "../Section/Section";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div>
            <div className="featured-item bg-fixed  pt-12 my-16">
                <div>
                    <Section 
                        heading={'Check it out'}
                        subHeading={'From our menu'}>

                    </Section>
                </div>

                <div className="lg:flex bg-slate-600 bg-opacity-30 justify-center items-center lg:py-20 lg:px-36 lg:pt-12">
                    <div>
                        <img className="lg:w-[620px] lg:h-[350px]" src={featuredImg} alt="" />
                    </div>
                    <div className="text-white text-center  md:ml-10" >
                        <p className="lg:text-xl  font-inter">March 20, 2023</p>
                        <p className="lg:text-xl uppercase font-inter">  WHERE CAN I GET SOME?</p>
                        <p className="lg:text-lg font-inter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error  voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae ad laudantium tempore <br />consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4">Read More</button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Featured;