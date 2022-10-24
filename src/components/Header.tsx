import '../App.scss';
import { Link} from "react-router-dom";

const HeaderComponent = () => {


    return (
        <header className="header">
            <Link to={'/'}><p className="header__text">Product List Page</p></Link>

        </header>
    )
}
export default HeaderComponent