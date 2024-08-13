import styled from "styled-components";


const ProductsTitle = styled.h2`
    font-family: "Montserrat", sans-serif;
    text-align: center;
`

const ImgProduct = styled.img`
    width: 50%;
`

const SectionProducts = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const ProductBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 3px solid #ddd;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px #0000001a;
`

const PriceStyle = styled.p`
    font-size: 28px;
    font-weight: 1000;
    color: #ff6200;
`

const DescriptionStyle = styled.p`
    font-size: 9px;
`

const ButtonAddCart = styled.button`
    background-color: #ff6200;
    padding: 7px;
    color: #ffffff;
    font-weight: 800;
    border-radius: 20px;
    font-family: "Montserrat", sans-serif;
    transition: all .5s ease;
    cursor: pointer;

    &:hover {
        scale: 1.05;
        background-color: #ff0000;
    }
`

const ProductName = styled.h3`
    font-size: 12px;
`

export {
    ProductsTitle,
    ImgProduct,
    SectionProducts,
    ProductBox,
    PriceStyle,
    DescriptionStyle,
    ButtonAddCart,
    ProductName,
}