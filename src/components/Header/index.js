import React from "react";
import logo from "./img/tiendaLogo.png";
import logoCart from "./img/cartLogo.svg";
import { ButtonCloseContact, ButtonSendInfo, ContactTitle, DivContact, DivContactTitle, HeaderStyle, HelpImage, ImgCart, InputContact, SpanHeader } from "./styles";

const Header = ({totalProducts, onClickLogoCart, onClickHelpIcon, onClickCloseContactIcon, showContact, onClickSendButton}) => {

    return (
        <>
            <HeaderStyle>
                <img src={logo} alt="Logo" />
                <h1>My Little Corner Store</h1>
                <div>
                    <SpanHeader className="total__products">{totalProducts()}</SpanHeader>
                    <ImgCart onClick={onClickLogoCart} src={logoCart} alt="logoCart" id="logo__cart" />
                </div>
                <HelpImage onClick={onClickHelpIcon} className="help">Need Help?</HelpImage>  
            </HeaderStyle>
            {showContact ? (<DivContact className="contact">
                <DivContactTitle className="div__contactTitle">
                    <ContactTitle>Contact</ContactTitle>
                    <ButtonCloseContact onClick={onClickCloseContactIcon} className="close__contactIcon">Close</ButtonCloseContact>
                </DivContactTitle>
                <InputContact type="text" placeholder="Name"></InputContact>
                <InputContact type="email" placeholder="email"></InputContact>
                <InputContact type="text" placeholder="Cellphone number"></InputContact>
                <ButtonSendInfo onClick={onClickSendButton}>Send</ButtonSendInfo>
            </DivContact>) : (null)}
            
            </>
    )
}

export default Header;