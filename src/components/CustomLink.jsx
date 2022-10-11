import { NavLink, useMatch } from "react-router-dom";

function CustomLink(props){
    const match = useMatch('/about')
    console.log(match);
    return(
        <li className={props.className}>
            <NavLink to={props.to} end={props.end}>
                {props.children}</NavLink>
        </li>
    )
}

export default CustomLink