import markup from '../assets/markup.jpg';
import { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    const validateEmail = (email) => {
        const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailtest.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };
    const inputHandle = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));


        if (!value.trim()) {
            setErrors((prev) => ({ ...prev, [id]: "This field is required" }));
        } else {
            setErrors((prev) => ({ ...prev, [id]: "" }));
        }

        if (id === "email" && !validateEmail(value)) {
            setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
        }
        if (id === "password" && !validatePassword(value)) {
            setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
        }
        if (!validatePassword(formData.password)) {
            setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
        }
    };

    const handleFacebookLogin = () => {
        window.location.href = 'https://www.facebook.com/login.php';
    };

    const handleGoogleLogin = () => {
        window.location.href = 'https://accounts.google.com/ServiceLogin';
    };

    const handleAppleLogin = () => {
        window.location.href = 'https://account.apple.com/sign-in';
    };

    return (
        <>
            <div className="border grid md:grid-cols-2 mt-6 mb-6 p-6 m-4 max-w-2xl mx-auto rounded-lg shadow-lg">
                <div className="flex items-center justify-center">
                    <img className="h-80 w-80 object-cover rounded-lg" src={markup} alt="Login Visual" />
                </div>
                <section className="flex flex-col gap-4 justify-center flex-wrap px-6">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome Back!</h1>
                    <p className="text-lg text-gray-600">Every great journey begins with a single login.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="email">Email</label>
                        <input onChange={inputHandle} className="border shadow-indigo-600 shadow-lg rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" type="email" id="email" placeholder="Enter your email" />
                        {errors.email && <p className="text-red-600">{errors.email}</p>}

                        <label htmlFor="password">Password</label>
                        <input onChange={inputHandle} className="border shadow-indigo-600 shadow-lg rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" type="password" id="password" placeholder="Enter your password" />
                        {errors.password && <p className="text-red-600">{errors.password}</p>}

                        <button type="submit" className="bg-green-700 hover:bg-green-400 transition duration-300 text-white font-semibold px-4 py-2 rounded-lg mt-4">
                            Login
                        </button>
                    </form>

                    <div className="flex justify-center gap-6 mt-4">
                        <img className="cursor-pointer h-[30px] w-[30px] hover:scale-110 transition-transform" onClick={handleAppleLogin} width="40" height="40" src="https://img.icons8.com/glyph-neue/64/mac-os.png" alt="mac-os" />
                        <img className="cursor-pointer h-[30px] w-[30px] hover:scale-110 transition-transform" onClick={handleGoogleLogin} width="40" height="40" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                        <img className="cursor-pointer h-[30px] w-[30px] hover:scale-110 transition-transform" onClick={handleFacebookLogin} width="40" height="40" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;