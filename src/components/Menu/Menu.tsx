import React from "react";
import MenuItem, {IMenuItem} from "./MenuItem";
import {
    selectVisitedLinks,
    addVisitedLink,
    current
} from "./menuSlice";
import {useDispatch, useSelector} from "react-redux";

interface IItem extends Omit<IMenuItem, 'onClickLink'> {

}

interface IMenu {
    items: IItem[]
}

const Menu = ({items}: IMenu) => {
    const visited_links = useSelector(selectVisitedLinks);
    const current_component = useSelector(current);
    const dispatch = useDispatch();
    return <ul>
        {items.map(item => <MenuItem
            link_to={item.link_to}
            key={item.text}
            text={item.text}
            visited={visited_links.includes(item.text)}
            current={item.text === current_component}
            onClickLink={(text_link) => dispatch(addVisitedLink(text_link))}
        />)}
    </ul>
}

export default Menu;