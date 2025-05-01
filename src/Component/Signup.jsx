import Signin from "../assets/sigin.jpg";
import { useState } from "react";

const Signup = () => {
    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });

        setErrors((prev) => ({ ...prev, [id]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formValues.fname.trim()) newErrors.fname = "First name is required";
        if (!formValues.lname.trim()) newErrors.lname = "Last name is required";
        if (!formValues.password) newErrors.password = "Password is required";
        if (!formValues.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formValues.password !== formValues.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formValues);
        }
    };

    return (
        <div className="m-6 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg border mx-auto max-w-lg p-6 shadow-lg">
            <div className="flex items-center justify-center">
                <img className="h-72 w-auto object-cover rounded-lg" src={Signin} alt="Signin" />
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <label htmlFor="fname" className="text-lg font-medium">First Name</label>
                <input
                    onChange={handleChange}
                    className="border shadow-lg shadow-indigo-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    type="text"
                    id="fname"
                    placeholder="Enter your name"
                    value={formValues.fname}
                />
                {errors.fname && <p className="text-red-600">{errors.fname}</p>}

                <label htmlFor="lname" className="text-lg font-medium">Last Name</label>
                <input
                    onChange={handleChange}
                    className="border shadow-lg shadow-indigo-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    type="text"
                    id="lname"
                    placeholder="Enter your last name"
                    value={formValues.lname}
                />
                {errors.lname && <p className="text-red-600">{errors.lname}</p>}

                <label htmlFor="password" className="text-lg font-medium">Password</label>
                <input
                    onChange={handleChange}
                    className="border shadow-lg shadow-indigo-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formValues.password}
                />
                {errors.password && <p className="text-red-600">{errors.password}</p>}

                <label htmlFor="confirmPassword" className="text-lg font-medium">Confirm Password</label>
                <input
                    onChange={handleChange}
                    className="border shadow-lg shadow-indigo-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={formValues.confirmPassword}
                />
                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}

                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-400 transition duration-300 cursor-pointer text-white font-semibold px-4 py-2 rounded-lg mt-4"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
