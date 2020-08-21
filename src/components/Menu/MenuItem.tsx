import React from "react";
import {Link} from "react-router-dom";

export interface IMenuItem {
    text: string,
    link_to: string,
    visited?: boolean,
    current?: boolean,
    filename?: string,
    onClickLink: (link_text: string) => void
}

const MenuItem = ({text, link_to, visited = false, onClickLink, current}: IMenuItem) => {
    return <li className={current ? ' current' : ''}>
        <Link
            className={current ? ' current' : ''}
            to={link_to}
            onClick={() => onClickLink(text)}
        >
            {text}{visited ? ' ✓' : ''}
        </Link>
    </li>
};

export default MenuItem;