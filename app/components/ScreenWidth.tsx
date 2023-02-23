"use client"
import { useState, useEffect } from "react";

interface ScreenWidthProps { }

const ScreenWidth: React.FC<ScreenWidthProps> = () => {
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        handleResize(); // set initial screen width

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <p>{screenWidth}</p>;
};

export default ScreenWidth;
