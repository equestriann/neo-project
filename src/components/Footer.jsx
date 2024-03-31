import { MdOutlineLanguage } from "react-icons/md";
import {SlSocialVkontakte} from "react-icons/sl";
import {BsTelegram} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io5";

export default function Footer () {

    return (
        <footer>
            <div className="footer-columns">
                <div className="footer-column">
                    <div className="footer-logo">QPICK</div>
                </div>
                <div className="footer-column">
                    <p>Избранное</p>
                    <p>Корзина</p>
                    <p>Контакты</p>
                </div>
                <div className="footer-column">
                    <p>Условия сервиса</p>
                    <p>
                        <MdOutlineLanguage className="language"></MdOutlineLanguage>
                        <b>
                            <span style={{color: "#FFA542", padding: "5px"}}>Рус</span>
                        </b>
                        <span>Eng</span>
                    </p>
                </div>
                <div className="footer-column">
                    <div className="social-group">
                        <SlSocialVkontakte className="social-icon"/>
                        <BsTelegram className="social-icon"/>
                        <IoLogoWhatsapp className="social-icon"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}