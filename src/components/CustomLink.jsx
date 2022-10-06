import { NavLink } from "react-router-dom";

function CustomLink(props){
    return(
        <li className={props.className}>
            <NavLink to={props.to} end={props.end}>
                {props.children}</NavLink>
        </li>
    )
}

export default CustomLink