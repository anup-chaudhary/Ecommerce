import { useNavigate } from 'react-router-dom';
import Hero from '../Component/Hero';

const Home = ({ filteredData }) => {
    const navigate = useNavigate();

    return (
        <>
            <Hero />
            <div className="grid gap-4 h-full w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                {filteredData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#FBFFE4] flex flex-col items-center gap-4 border rounded-2xl shadow-md overflow-hidden"
                    >
                        {/* Display item images */}
                        <div className="flex flex-wrap gap-4 justify-center mt-3">
                            {item.images?.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${item.title} image ${index + 1}`}
                                    className="h-[200px] w-[200px] object-contain rounded-lg mb-2"
                                />
                            ))}
                        </div>

                        <ul className="p-3 flex flex-col justify-center">
                            <li className="text-xl font-bold mb-2">Title: {item.title}</li>
                            <li className="text-lg text-gray-700 mb-4">Price: ${item.price}</li>
                            <li className="text-gray-600">{item.description?.slice(0, 200)}</li>
                        </ul>

                        {/* Add to Cart button */}
                        <button
                            className="border mb-3 p-3 text-xl rounded-2xl bg-[#3D8D7A] text-white hover:bg-[#B3D8A8] cursor-pointer transition duration-300"
                            onClick={() => navigate('/Cart')}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
