import styled from "styled-components";


const ShoppingCart = styled.div`
    position: fixed;
    top: 25%;
    right: 0%;
    width: 50%;
    background-color: rgb(255, 255, 255);
    border: 5px solid black;
    border-radius: 10px;
    padding: 10px;
    overflow: scroll;
    max-height: 80vh;
    -overflow-scrolling: touch;
    -webkit-oveflow-scrolling:touch;
    box-shadow: 0 8px 24px #000000;
    transition: all .5s ease;
`

const DivCartTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const CloseCart = styled.p`
    width: 10%;
    background-color: ${props => props.theme.colors.redColor};
    color: #ffffff;
    border-radius: 10px;
    padding: 0px;
    text-align: center;
    align-items: center;
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.01);
    }
}
`

const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ButtonLess = styled.button`
    margin: 5px;
    height: 30%;
    text-align: center;
    margin: 5px;
`

const ButtonPlus = styled.button`
    margin: 5px;
    height: 30%;
    text-align: center;

`

const ImgProductCart = styled.img`
    width: 5%;
`

const DeleteProduct = styled.p`
    background-color: ${props => props.theme.colors.redColor};
    color: #f0f8ff;
    border-radius: 10%;
    border: solid 1px #ffffff;
    height: 30%;
    text-align: center;
    margin: 5px;
`

const EmptyButton = styled.button`
    margin: 30px;
    background-color: ${props => props.theme.colors.orangeColor};
    color: #ffffff;
    border-radius: 10px;
    padding: 5px;
    font-weight: 600;
    transition: all 0.25S ease;

    &:hover {
        transform: scale(1.01);
    }
`

const DivProductCart = styled.li`
    display: flex;
    flex-direction: row;
    border: solid 2px rgb(74, 74, 74);
    border-radius: 10px;
    align-content: center;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    box-shadow: 0 8px 24px #00000095;
`

const TotalPay = styled.p`
    font-size: 20px;
    color: ff6200;
    font-weight: 600;
`

const SpanTotalPay = styled.span`
    color: ${props => props.theme.colors.orangeColor};
    font-size: 28px;
`

export {
    ShoppingCart,
    DivCartTitle,
    CloseCart,
    DivButtons,
    ButtonLess,
    ButtonPlus,
    ImgProductCart,
    DeleteProduct,
    EmptyButton,
    DivProductCart,
    TotalPay,
    SpanTotalPay,
}