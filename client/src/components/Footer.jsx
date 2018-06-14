import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer_col">
                <h5>Информация</h5>
                <ul>
                    <li>Расcчет фотопечати</li>
                    <li>Информация о доставке</li>
                    <li>Предложение от поставщиков и производителей</li>
                    <li>Предложение по сотрудничеству</li>
                    <li>Сертификаты</li>
                </ul>
            </div>
            <div className="footer_col">
                <h5>Служба поддержки</h5>
                <ul>
                    <li>Контроль качества потолков</li>
                    <li>Горячая линия</li>
                    <li>Претензии по комплектующим, возврат</li>
                </ul>
            </div>
            <div className="footer_col">
                <h5>Дополнительно</h5>
                <ul>
                    <li>Вакансии</li>
                    <li>Карта сайта</li>
                    <li>Хочу поторговаться!</li>
                    <li>Рассылка</li>
                </ul>
            </div>
            <div className="footer_col">
                <h5>Личный Кабинет</h5>
                <ul>
                    <li>Личный Кабинет</li>
                    <li>Пробный потолок</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;