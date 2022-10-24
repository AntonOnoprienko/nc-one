import '../App.scss';
import { NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header className="header">
            <NavLink style={{display:'none'}} to={'/'}><p className="header__text">Product list Page</p></NavLink>
            {/*<NavLink style={{display:'none'}} to={'/details'}><p className="header__text">Product Page</p></NavLink>*/}
        </header>
    )
}
export default HeaderComponent