import React from 'react'

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    } else {
        return (
            <a href="aa"
               onClick={e => {
                   e.preventDefault();
                   onClick();
               }}
            > {children}
            </a>
        )

    }
};

export default Link