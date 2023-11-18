


const MenuItem = ({ item }) => {
    const { name, price, image, recipe } = item
    return (
        <div>
            <div className="flex space-x-3">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[104px]" src={image} alt="" />

                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="uppercase lg:text-xl text-lg font-cinzel">{name} -------</h3>
                        <p className="text-xl font-inter text-[#BB8506]">${price}</p>

                    </div>
                    <p className="lg:text-lg text-sm font-inter text-[#737373]">{recipe}</p>
                </div>
            </div>
           
        </div>
    );
};

export default MenuItem;