import { useState, useEffect } from "react";

const Team = () => {
    const [users, setUsers] = useState([]);

    const TeamInfo = async () => {
        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/users");
            const data = await response.json();
            console.log(data);
            const filteredUsers = data.filter(
                (detail) => detail.name === "Jhon" || detail.name === "Maria" || detail.name === "Admin"
            );
            setUsers(filteredUsers);
        } catch (error) {
            console.error("Error fetching team data:", error);
        }
    };
    useEffect(() => {
        TeamInfo();
    }, []);

    return (
        <>
            {users.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 py-4 mt-2 ">
                    {users.map((item) => (
                        <div key={item.id} className="bg-[#BAD8B6] shadow-lg rounded-lg p-6 flex flex-col items-center border border-gray-500">
                            <img
                                className="rounded-full  hover:scale-110 transition-transform  h-50 w-50 object-cover border-2 border-gray-900"
                                src={item.avatar}
                                alt={`${item.name}'s avatar`}
                            />
                            <h2 className="text-xl  text-black font-bold mt-4">{item.name}</h2>
                            <p className="text-gray-500 text-sm mt-1">{item.email}</p>
                            <span className="text-xs uppercase  bg-[#ADB2D4] px-3 py-1 rounded-full mt-2">{item.role}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No users found</p>
            )}

        </>
    );
};

export default Team;