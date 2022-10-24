import '../App.scss';
import {Link, useLocation} from "react-router-dom";

const HeaderComponent = () => {
    const location = useLocation().pathname
    const isProductPage = location.includes('/details/')


    return (
        <header className="header">
            <Link to={'/'}><p className="header__text">{isProductPage ? 'Product page':'Product list page'}</p></Link>
        </header>
    )
}
export default HeaderComponent