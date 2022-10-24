import '../App.scss';
import {Link, useLocation} from "react-router-dom";

const HeaderComponent = () => {
    const location = useLocation().pathname
    const isProductPage = location.includes('/details/')


    return (
        <header className="header">
            { isProductPage  &&  <Link to={'/'}><p className="header__text">Product Page</p></Link> }
            { !isProductPage && <Link to={'/'}><p className="header__text">Product List Page</p></Link> }

        </header>
    )
}
export default HeaderComponent