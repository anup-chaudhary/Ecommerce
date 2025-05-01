import { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    const userDetails = async () => {
        try {
            const details = await fetch("https://api.escuelajs.co/api/v1/users");
            const response = await details.json();
            console.log(response);
            setUsers(response);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    };

    useEffect(() => {
        userDetails();
    }, []);

    return (
        <>
            <div>
                <div><h1 className="text-center text-4xl font-bold">Meet Our Team</h1></div><br />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                    {users.filter((item) => item.name === "Jhon" || item.name === "Admin" || item.name === "Maria").map((item, index) => (
                        <div key={index} className="border rounded-xl mx-auto p-4 h-[300px] w-auto max-w-xs ">

                            <ul className="text-center">
                                <li>
                                    <img className="rounded-full h-[200px] w-[200px] mx-auto mb-2" src={item.avatar} alt={`${item.name}'s avatar`} />
                                </li>
                                <li className="font-semibold">Name: {item.name}</li>
                                <li>Email:{item.email}</li>
                                <li>Post: {item.role}</li>
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </>


    );
};

export default Users;
