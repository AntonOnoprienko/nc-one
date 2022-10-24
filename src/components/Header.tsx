import '../App.scss';
import { NavLink} from "react-router-dom";

const HeaderComponent = () => {


    return (
        <header className="header">
            <NavLink to={'/'}><p className="header__text">Product List Page</p></NavLink>

        </header>
    )
}
export default HeaderComponent