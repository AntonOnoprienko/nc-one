import {Link, useLocation} from "react-router-dom";
import classes from './ComponentHeader.module.scss'
const HeaderComponent = () => {
    const isProductPage = useLocation().pathname.includes('/details/')

    return (
        <header className={classes.header}>
            <Link to={'/'}><p className={classes.header__text}>{isProductPage ? 'Product page':'Product list page'}</p></Link>
        </header>
    )
}
export default HeaderComponent