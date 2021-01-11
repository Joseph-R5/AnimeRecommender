import {useEffect, useState} from "react";

const useCheckMobileScreen = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (windowWidth <= 1010);
}

export default useCheckMobileScreen;