import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const About = () => {
    const navigate = useNavigate();

    const getNewCountdownTarget = () => {
        const target = new Date();
        target.setDate(target.getDate() + 7); // 7 days from now
        return target;
    };

    const [targetDate, setTargetDate] = useState(getNewCountdownTarget());
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const distance = targetDate - now;

            if (distance <= 0) {
                // Reset countdown to another 7 days
                const newTarget = getNewCountdownTarget();
                setTargetDate(newTarget);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);

            setTimeLeft({ days, hours, minutes });
        };

        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <>
            <section className="text-gray-700 body-font">
                <div className="flex py-3 px-3 justify-center mt-10 text-4xl text-[#E07A5F] font-bold">
                    Why Choose Us?
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap text-center justify-center">
                        {[
                            {
                                img: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
                                alt: "Collaboration With Multiple Brands",
                                text: "Collaboration With Multiple Brands",
                            },
                            {
                                img: "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
                                alt: "Reasonable Rates",
                                text: "Reasonable Rates",
                            },
                            {
                                img: "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
                                alt: "Time Efficiency",
                                text: "Time Efficiency",
                            },
                            {
                                img: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
                                alt: "Expertise in Industry",
                                text: "Expertise in Industry",
                            },
                        ].map((item, index) => (
                            <div key={index} className="p-4 md:w-1/4 sm:w-1/2">
                                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                                    <div className="flex justify-center">
                                        <img
                                            src={item.img}
                                            alt={item.alt}
                                            className="w-32 mb-3"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h2 className="title-font font-normal text-2xl text-gray-900">{item.text}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pt-12">
                <div className="bg-[#C2EFD4] mx-auto max-w-full relative flex flex-col md:flex-row justify-around items-center p-6">
                    <div className="absolute left-10 bottom-0 w-[156px] h-[110px] grid grid-cols-4 gap-2">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-[#328b55] rounded-full"></div>
                        ))}
                    </div>

                    <img
                        src="https://iili.io/3Bvpo4R.png"
                        alt="Exclusive Offer Banner"
                        className="max-w-xs md:max-w-md"
                        loading="lazy"
                    />

                    <div className="w-full md:w-[589px] h-auto rounded-[3px] text-center md:text-left">
                        <h2 className="text-[#224f34] text-[46px] font-bold">Exclusive Offer</h2>
                        <p className="text-[#224f34] text-[22px] font-medium leading-9">
                            Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
                        </p>

                        <div className="flex justify-center md:justify-start gap-9 my-10">
                            <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-lg">
                                <span className="block text-[#224f34] text-[32px] font-semibold">{timeLeft.days}</span>
                                <span className="block text-[#224f34] text-base font-medium">Days</span>
                            </div>
                            <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-lg">
                                <span className="block text-[#224f34] text-[32px] font-semibold">{timeLeft.hours}</span>
                                <span className="block text-[#224f34] text-base font-medium">Hours</span>
                            </div>
                            <div className="w-[100px] h-[100px] text-center py-4 bg-white rounded-[3px] shadow-lg">
                                <span className="block text-[#224f34] text-[32px] font-semibold ">{timeLeft.minutes}</span>
                                <span className="block text-[#224f34] text-base font-medium">Min</span>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/')}
                            className="px-10 hover:bg-[#E07A5F] py-3 bg-[#224f34] rounded-[3px] shadow-lg text-white text-xl font-medium uppercase"
                            aria-label="Buy Now"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
