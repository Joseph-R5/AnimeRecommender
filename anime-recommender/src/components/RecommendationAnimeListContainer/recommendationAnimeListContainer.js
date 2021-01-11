import React from 'react';
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

export const withHooksHOC = (Component) => {
    return (props) => {
        const showMobile = useCheckMobileScreen();

        return <Component showMobileView={showMobile} {...props} />
    }
}