

const Section = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12">
            <p className="text-[#D99904] font-inter lg:text-xl my-3 ">--- {heading} ---</p>
           
            <h3 className="lg:text-4xl text-2xl border-y-4 uppercase py-4 my-5 font-inter">{subHeading}</h3>
           
        </div>
    );
};

export default Section;