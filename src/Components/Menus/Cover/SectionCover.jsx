

const SectionCover = ({ img, headLine, title }) => {
    return (
        <div>
            <div className="hero h-[200px] lg:h-[500px]" style={{ backgroundImage: `url("${img}")` }}>
                <div className=" "></div>
                <div className="hero-content  text-center text-neutral-content">
                    <div className="lg:w-[1000px] w-[400px] h-[120px] lg:p-20 lg:h-[300px] hero-overlay bg-opacity-50">
                        <h1 className="lg:text-5xl text-xl font-cinzel uppercase font-bold">{headLine}</h1>
                        <p className="font-cinzel text-sm font-semibold lg:text-xl">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionCover;