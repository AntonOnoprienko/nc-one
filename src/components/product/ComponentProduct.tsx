import React from "react";
import {Link} from "react-router-dom";
import {IProduct} from "../../types/IProduct";
import { useStoreState} from "../../store/store";
import classes from './ComponentProduct.module.scss'
import {useIdFinder} from "../../hooks/hooks";
import {actionDispatcher, Actions} from "../../store/actions";


const ProductComponent = ({ product: {name,src,id,price}}:{product:IProduct }) => {
    const isLiked = useIdFinder(useStoreState('favorites'),id)
    const likeHandler = () => {
        if (!isLiked) {
            actionDispatcher(Actions.addProduct,id)
        } else {
            actionDispatcher(Actions.removeProduct,id)
        }
    }
    return (
        <div className={classes.product__inner}>
            <div className={classes.product__image}>
                <Link to={`/details/${id}`}>
                    <img src={`https://testbackend.nc-one.com${src}`} alt="product" width={200}
                         height={200}/>
                </Link>
            </div>
            <div className={classes.product__info}>
                <p className={classes.product__name}>{name}</p>
                <div className={classes.description}>
                    <p className={classes.product__price}>$ {price}</p>
                    <div onClick={likeHandler} className={classes.product__btn}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.5" y="2.5" width="25" height="25" rx="7" fill={isLiked ? '#414141' : '#ffff'}/>
                            <path
                                d="M6.75 2.25C5.55653 2.25 4.41193 2.72411 3.56802 3.56802C2.72411 4.41193 2.25 5.55653 2.25 6.75V29.25C2.25 30.4435 2.72411 31.5881 3.56802 32.432C4.41193 33.2759 5.55653 33.75 6.75 33.75H29.25C30.4435 33.75 31.5881 33.2759 32.432 32.432C33.2759 31.5881 33.75 30.4435 33.75 29.25V6.75C33.75 5.55653 33.2759 4.41193 32.432 3.56802C31.5881 2.72411 30.4435 2.25 29.25 2.25H6.75ZM18 12.9825C18 12.9825 19.5863 10.5413 21.645 10.1813C26.7525 9.2925 28.8562 13.7587 28.0012 17.0775C26.4825 23.0063 18 28.1812 18 28.1812C18 28.1812 9.5175 23.0063 7.99875 17.0887C7.155 13.77 9.25875 9.2925 14.355 10.1925C16.4138 10.5525 18 12.9825 18 12.9825Z"
                                fill="#FFCC26"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductComponent;