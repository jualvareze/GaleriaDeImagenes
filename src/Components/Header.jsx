import React from "react";

const Header = (props) => {
    const {title, subtitle} = props;
    return(
        <>
        <header className="bg-secondary py-2">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        </header>
        </>
    )
}

export default Header;