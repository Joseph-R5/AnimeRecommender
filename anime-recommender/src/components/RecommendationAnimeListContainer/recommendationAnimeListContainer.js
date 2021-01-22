import React from 'react';
import {useCheckMobileScreen} from "../../hooks";

export const withHooksHOC = (Component) => {
    return (props) => {
        const showMobile = useCheckMobileScreen();

        return <Component showMobileView={showMobile} {...props} />
    }
}