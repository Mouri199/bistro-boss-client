import img from '../../../assets/home/chef-service.jpg'

const Chefs = () => {
    return (
        <div className='mt-32 mb-16'>
            <div className="hero h-[200px] lg:h-[570px]" style={{ backgroundImage: `url(https://i.ibb.co/NFNMSSh/chef-service.jpg)` }}>
                <div className="lg:h-[334px] h-[170px] w-10/12 bg-white lg:w-[1096px] hero-content text-center text-black">
                    <div className=" ">
                        <h1 className="lg:mb-5 lg:text-5xl text-2xl font-cinzel">Bistro Boss</h1>
                        <p className="mb-5 lg:text-lg text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;