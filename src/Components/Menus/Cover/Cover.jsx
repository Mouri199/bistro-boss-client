
const Cover = ({ img, shorts, title }) => {
    return (
        <div className="hero h-[200px] lg:h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className=" "></div>
            <div className="hero-content  text-center text-neutral-content">
                <div className="lg:w-[1000px] w-[300px] h-[100px] p-5 lg:p-36 lg:h-[400px] hero-overlay bg-opacity-50">
                    <h1 className="lg:text-7xl text-xl font-cinzel uppercase font-bold">{title}</h1>
                    <p className="font-cinzel text-sm font-semibold lg:text-2xl">{shorts}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;