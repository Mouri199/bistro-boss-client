

const ShopCard = ({ item }) => {
    const { name, price, image, recipe } = item
    return (
        <div>

            <div className="card card-compact w-96 mb-10 mt-10 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>

                <p className="absolute right-0 p-1 mr-4 mt-4 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn border-0 border-[#BB8506] hover:border-[#BB8506] hover:text-[#BB8506] border-b-4 btn-outline">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;