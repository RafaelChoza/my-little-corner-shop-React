import React, { Fragment} from "react";
import useFetchProducts from "../../hooks/useFetchProducts";
import { ButtonAddCart, DescriptionStyle, ImgProduct, PriceStyle, ProductBox, ProductName, ProductsTitle, SectionProducts } from "./styles";


const ProductsList = ({addToCart}) => {
    
    const { products } = useFetchProducts()

    return(
        <Fragment>
            <ProductsTitle>Products</ProductsTitle>
            <SectionProducts>
                {products.map((product) => {
                    const {id, title, price, category, image, description} = product;

                    return (
                        <>
                            <ProductBox className="product__box">
                                <article key={id}>
                                    <ProductName className="product__title">{title}</ProductName>
                                    <ImgProduct className="img__product" src={image} />
                                    <PriceStyle className="price">${price}</PriceStyle>
                                    <p>Categoría: {category}</p>
                                    <DescriptionStyle className="description">Descripción: {description}</DescriptionStyle>
                                </article>
                                <div>
                                <ButtonAddCart className="buy__button" onClick={() => addToCart(product)}>Add to Cart</ButtonAddCart>
                                </div>
                            </ProductBox>
                        </>
                    )
                })

                }
            </SectionProducts>
        </Fragment>
    )
};

export default ProductsList;