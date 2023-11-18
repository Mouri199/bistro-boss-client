
import ShopCard from './ShopCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 mx-5 gap-10">
            {
                items.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
            }
        </div>
    );
};

export default OrderTab;