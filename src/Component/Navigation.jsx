import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Navigation = ({ data, setFilteredData }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        navigate('/')
        setSearchTerm(term);
        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(term)
        );
        setFilteredData(filtered);
    };

    const navLinkClasses = ({ isActive }) =>
        isActive
            ? 'bg-[#D76C82] p-2 rounded'
            : 'hover:bg-[#D76C82] p-2 rounded transition duration-200';

    return (
        <nav className="grid sm:grid-cols-1">
            <div>
                <ul className="bg-[#3D8D7A] text-white p-5 flex justify-start items-center flex-wrap gap-6 text-lg">
                    <li><NavLink className={navLinkClasses} to='/'>Home</NavLink></li>
                    <li><NavLink className={navLinkClasses} to='/About'>About</NavLink></li>
                    <li><NavLink className={navLinkClasses} to='/Team'>Team</NavLink></li>

                    <li className="relative flex items-center w-60">
                        <input
                            onChange={handleSearch}
                            value={searchTerm}
                            className="border border-gray-300 px-3 py-2 rounded-full bg-white text-black w-full pl-10 focus:outline-none focus:ring focus:ring-green-500"
                            type="text"
                            id="searchbar"
                            name="searchbar"
                            placeholder="Search..."
                            aria-label="Search bar"
                        />
                        <FontAwesomeIcon
                            className="absolute left-3 text-green-500"
                            icon={faMagnifyingGlass}
                            style={{ height: "18px", width: "18px" }}
                        />
                    </li>

                    <li><NavLink className={navLinkClasses} to='/Signup'>Sign Up</NavLink></li>
                    <li><NavLink className={navLinkClasses} to='/Login'>Login</NavLink></li>

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'flex items-center gap-2 px-4 py-2 bg-[#D76C82] text-white rounded-lg shadow-md'
                                    : 'flex items-center gap-2 px-4 py-2 hover:bg-[#D76C82] hover:text-white rounded-lg transition duration-300'
                            }
                            to='/Cart'
                        >
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="text-[#A3D1C6]"
                                style={{ height: "20px", width: "20px" }}
                            />
                            <span className="font-medium">Cart: 0</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
