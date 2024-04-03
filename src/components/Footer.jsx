import { MdOutlineLanguage } from "react-icons/md";
import {SlSocialVkontakte} from "react-icons/sl";
import { RiTelegramLine } from "react-icons/ri";
import {IoLogoWhatsapp} from "react-icons/io5";

export default function Footer () {

    return (
        <footer>
            <div className="footer-item">
                QPICK
            </div>
            <div className="footer-item">
                Избранное
            </div>
            <div className="footer-item">
                Корзина
            </div>
            <div className="footer-item">
                Контакты
            </div>
            <div className="footer-item">
                Условия сервиса
            </div>
            <div className="footer-item">
                <MdOutlineLanguage id="lang-icon"/>
            </div>
            <div className="footer-item">
                <span>Рус</span>
            </div>
            <div className="footer-item">
                <span>Eng</span>
            </div>
            <div className="footer-item">
                <SlSocialVkontakte id="vk-icon"/>
            </div>
            <div className="footer-item">
                <RiTelegramLine id="tg-icon"/>
            </div>
            <div className="footer-item">
                <IoLogoWhatsapp id="wa-icon"/>
            </div>
        </footer>
    )
}