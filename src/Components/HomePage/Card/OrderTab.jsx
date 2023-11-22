
import { Swiper, SwiperSlide } from 'swiper/react';
import ShopCard from './ShopCard';
import { Pagination } from 'swiper/modules';



const OrderTab = ({ items }) => {

    // const [currentPage,setCurrentPage] = useState(1);
    // const [ postsPerPage,setPostsPerPage] =useState(6)

    // const itemsPerPage = 6;

    // const totalItems = items.length;
    // const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    // const indexOfLastPost =currentPage* postsPerPage;
    // const indexOfFirstPage = indexOfLastPost - postsPerPage;
    // const currentPosts = items.slice(indexOfFirstPage,indexOfLastPost)


    return (

        <div >

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            />
            <SwiperSlide>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 md:mx-10  grid-cols-1 mx-5 lg:gap-5 gap-5 md:gap-40">
                    {
                        items
                        // .slice(totalPages * itemsPerPage, (totalPages + 1) * itemsPerPage)
                        .map(item => <ShopCard key={item._id} item={item}></ShopCard>)
                    }
                </div>
            </SwiperSlide>
        </div>
    );
};

export default OrderTab;