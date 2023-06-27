import React, {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Success() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return(
        <section className="bg-cblue h-screen flex flex-col justify-center items-center">
            <div className={`p-2 transform transition-all duration-500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl md:text-6xl text-beige text-center font-title font-bold">Thank you for your message!</h1>
                <p className="text-2xl md:text-4xl text-beige text-center font-title font-bold mt-2">I will get back to you as soon as possible.</p>
            </div>
            <div className={`mt-12 transform transition-all duration-500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <Link href="/"><span className="bg-beige px-20 py-4 rounded-lg text-black lg:text-2xl shadow-lg hover:animate-pulse duration-500">Home</span></Link>
            </div>
        </section>
    );
}