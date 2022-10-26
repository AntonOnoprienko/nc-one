import React, {useState} from 'react'
import {Navigate} from "react-router-dom";
import {actionCreator, useStoreState} from "../store/store";
import {useIdFinder, useParamsInt} from "../hooks/hooks";
import classes from '../styles/details.module.scss'

const DetailsComponent = () => {
    const [isScaled, setIzScaled] = useState(false)
    const id = useParamsInt();
    const isLiked = useIdFinder(useStoreState('favorites'),id)
    const product = useIdFinder(useStoreState('products'),id)
    const likeHandler = () => {
        if (!isLiked) {
            actionCreator('addToFavorites', id)
        } else {
            actionCreator('removeFromFavorites', id)
        }
    }
    return (<>

            {product && <div className={classes.details__inner}>
                <div className={classes.image__wrapper}>
                    <div className={isScaled ? classes.scaled : classes.info__image}>
                        <img onClick={() => {
                            setIzScaled(false)
                        }} src={`https://testbackend.nc-one.com${product.src}`} alt="product" width={448} height={448}/>
                    </div>
                    {!isScaled && <div className={classes.details__clarity} onClick={() => {
                        setIzScaled(pre => !pre)
                    }}>
                        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_20_20)">
                                <path
                                    d="M25.7778 6.44446C21.954 6.44446 18.2161 7.57834 15.0368 9.70271C11.8574 11.8271 9.37942 14.8465 7.91613 18.3792C6.45283 21.9119 6.06997 25.7992 6.81595 29.5495C7.56193 33.2998 9.40325 36.7447 12.1071 39.4485C14.8109 42.1523 18.2558 43.9937 22.0061 44.7396C25.7564 45.4856 29.6436 45.1028 33.1763 43.6395C36.7091 42.1762 39.7285 39.6982 41.8529 36.5188C43.9773 33.3395 45.1111 29.6016 45.1111 25.7778C45.1111 20.6503 43.0742 15.7328 39.4485 12.1071C35.8228 8.48136 30.9053 6.44446 25.7778 6.44446V6.44446ZM25.7778 41.7439C22.5852 41.7438 19.4646 40.7951 16.8121 39.0183C14.1596 37.2415 12.0947 34.7167 10.8797 31.7643C9.66467 28.8119 9.3542 25.5651 9.98769 22.436C10.6212 19.3068 12.1701 16.4364 14.4378 14.1891C16.7055 11.9418 19.5898 10.419 22.7245 9.81377C25.8592 9.20859 29.1031 9.54841 32.0444 10.7901C34.9857 12.0318 37.4917 14.1193 39.2445 16.7878C40.9972 19.4562 41.9176 22.5853 41.8889 25.7778C41.8507 30.0255 40.1364 34.0863 37.1191 37.0764C34.1018 40.0666 30.0257 41.7441 25.7778 41.7439V41.7439Z"
                                    fill="#414141"/>
                                <path
                                    d="M51.0883 47.8339L42.7589 39.5045C42.0725 40.3536 41.3239 41.1507 40.5194 41.8889L48.8166 50.1861C49.1248 50.4501 49.5213 50.588 49.9268 50.5723C50.3323 50.5567 50.7169 50.3886 51.0038 50.1016C51.2907 49.8147 51.4588 49.4301 51.4745 49.0246C51.4902 48.6191 51.3522 48.2227 51.0883 47.9145V47.8339Z"
                                    fill="#414141"/>
                                <path
                                    d="M33.8333 24.1667H27.3889V17.7222C27.3889 17.2949 27.2191 16.8851 26.917 16.583C26.6148 16.2809 26.205 16.1111 25.7778 16.1111C25.3505 16.1111 24.9407 16.2809 24.6385 16.583C24.3364 16.8851 24.1666 17.2949 24.1666 17.7222V24.1667H17.7222C17.2949 24.1667 16.8851 24.3364 16.583 24.6386C16.2808 24.9407 16.1111 25.3505 16.1111 25.7778C16.1111 26.2051 16.2808 26.6149 16.583 26.917C16.8851 27.2192 17.2949 27.3889 17.7222 27.3889H24.1666V33.8333C24.1666 34.2606 24.3364 34.6704 24.6385 34.9726C24.9407 35.2747 25.3505 35.4444 25.7778 35.4444C26.205 35.4444 26.6148 35.2747 26.917 34.9726C27.2191 34.6704 27.3889 34.2606 27.3889 33.8333V27.3889H33.8333C34.2606 27.3889 34.6704 27.2192 34.9725 26.917C35.2747 26.6149 35.4444 26.2051 35.4444 25.7778C35.4444 25.3505 35.2747 24.9407 34.9725 24.6386C34.6704 24.3364 34.2606 24.1667 33.8333 24.1667Z"
                                    fill="#414141"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_20_20">
                                    <rect width="58" height="58" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>}
                </div>
                <div className={classes.details__info}>
                    <p className={classes.details__name}
                    >{product.name}</p>
                    <div className={classes.description}>
                        <p className={classes.details__price}>$ {product.price}</p>
                        <svg onClick={likeHandler} className={classes.details__btn}
                             width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8.16675" y="8.16669" width="81.6667" height="81.6667" rx="7" fill={isLiked ? '#414141' : '#ffff'}/>
                            <path
                                d="M18.375 6.125C15.1261 6.125 12.0103 7.41562 9.71294 9.71294C7.41562 12.0103 6.125 15.1261 6.125 18.375V79.625C6.125 82.8739 7.41562 85.9897 9.71294 88.2871C12.0103 90.5844 15.1261 91.875 18.375 91.875H79.625C82.8739 91.875 85.9897 90.5844 88.2871 88.2871C90.5844 85.9897 91.875 82.8739 91.875 79.625V18.375C91.875 15.1261 90.5844 12.0103 88.2871 9.71294C85.9897 7.41562 82.8739 6.125 79.625 6.125H18.375ZM49 35.3412C49 35.3412 53.3181 28.6956 58.9225 27.7156C72.8262 25.2963 78.5531 37.4544 76.2256 46.4888C72.0912 62.6281 49 76.7156 49 76.7156C49 76.7156 25.9088 62.6281 21.7744 46.5194C19.4775 37.485 25.2044 25.2963 39.0775 27.7463C44.6819 28.7263 49 35.3412 49 35.3412Z"
                                fill="#FFCC26"/>
                        </svg>
                    </div>
                </div>
            </div>}
            {!product && <Navigate to={'/'}/>}
        </>
    )
}

export default DetailsComponent
