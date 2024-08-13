import styled from "styled-components";


const HeaderStyle = styled.header`
    width: 100%;
    font-family: "Montserrat", sans-serif;
    margin: 0px 0px 0px 0px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    font-size: 20px;
`

const SpanHeader = styled.span`
    background-color: ${props => props.theme.colors.redColor};
    border-radius: 40%;
    padding: 10px;
    color: white;
    font-size: 12px;
    font-weight: 600;
`

const ImgCart = styled.img`
    cursor: pointer;
    transition: all .5s ease;
    width: 100%;

    &:hover {
        scale: 1.05;
    }
`

const HelpImage = styled.p`
    background-color: ${props => props.theme.colors.redColor};
    color: white;
    font-size: 40px;
    font-weight: 800;
    padding: 30px;
    border-radius: 30px;
    flex-wrap: wrap;
    transition: all 0.25s ease;

    &:hover {
    scale: 1.05;
    }
`

const DivContact = styled.div`
    display: flex;
    font-family: "Montserrat", sans-serif;
    flex-direction: column;
    width: 20vw;
    position: fixed;
    left: 40vw;
    top: 10vw;
    background-color: white;
    border: 2px solid black;
    border-radius: 20px;
    padding: 50px;
`

const ButtonSendInfo = styled.p`
    margin: 5px;
    background-color: ${props => props.theme.colors.orangeColor};
    color: #ffffff;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    border: 2px solid #989898;
    transition: all 0.25s ease;

    &:hover {
        scale: 1.01;
    }
`

const ButtonCloseContact = styled.p`
    cursor: pointer;
    font-size: 16px;
    background-color: ${props => props.theme.colors.redColor};
    color: white;
    padding: 5px;
    border-radius: 10px;
    width: 20%;
    text-align: center;
    transition: all 0.25s ease;
    font-weight: 600;

    &:hover {
        scale: 1.05;
    }
`

const ContactTitle = styled.h3`
    font-size: 2vw;
`

const DivContactTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center ;
    justify-content: space-around;
`

const InputContact = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #989898;
`


export {
    HeaderStyle,
    SpanHeader,
    ImgCart,
    HelpImage,
    DivContact,
    ButtonSendInfo,
    ButtonCloseContact,
    ContactTitle,
    DivContactTitle,
    InputContact,
}