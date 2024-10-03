// Libraries
import React, { useState } from 'react';

// Styles
import './PagesFooter.css';

// Components
import FormWithCloseButton from "../../components/footer/FooterComponents/FormWithCloseButton";
import { Modal } from 'antd';

const PagesFooter: React.FC = () => {
        const [isFormVisible, setIsFormVisible] = useState(false);

        const openForm = () => setIsFormVisible(true);
        const closeForm = () => setIsFormVisible(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


        return (
            <div className="footer-container font-karla">
                <div className="box-gray">
                    <div className="footer-sections">
                        <div className="footer-section">
                            <h4 className="main-menu">Каталог</h4>
                            <ul>
                                <li><a href="#">Вживані авто</a></li>
                                <li><a href="#">Нові авто</a></li>
                                <li><a href="#">Спецтехніка</a></li>
                            </ul>
                            <h4 className="main-menu">Відгуки</h4>
                        </div>
                        <div className="footer-section">
                            <h4 className="main-menu">Новини</h4>
                            <ul>
                                <li><a href="#">Тест-драйви</a></li>
                                <li><a href="#">Електромобілі</a></li>
                                <li><a href="#">Розмитнення</a></li>
                                <li><a href="#">Онлайн-журнал</a></li>
                                <li><a href="#">Як підготувати авто до зими?</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4 className="main-menu">Компанія</h4>
                            <ul>
                                 <li> <a href="#" onClick={showModal}>Хто ми?</a></li>
                                <Modal 
                                    title="Хто ми?" 
                                    open={isModalOpen}
                                    onOk={handleOk} 
                                    onCancel={handleCancel}
                                >
                                    <p className='indent'><strong>WheelDeal</strong> — це сучасна платформа для покупки та продажу автомобілів, створена для того, щоб зробити процес вибору та придбання автомобіля максимально зручним і прозорим. Ми об’єднуємо автолюбителів, дилерів та власників авто, пропонуючи їм простий інтерфейс для пошуку і обміну автомобілями на вигідних умовах.</p>

                                     <p className='indent'><em>Наша мета</em> — забезпечити користувачів інструментами для легкого та безпечного пошуку автомобілів з урахуванням усіх індивідуальних побажань: від типу кузова та марки до пробігу та ціни. Користувачі можуть переглядати детальні оголошення, дізнаватись про стан автомобіля, перевіряти VIN-код і навіть отримувати кредитні пропозиції безпосередньо на нашій платформі.</p>

                                          <p className='indent'>Ми прагнемо зробити ринок автомобілів доступнішим і прозорішим, надаючи можливість швидко та легко знайти або продати автомобіль своєї мрії.</p>
                                </Modal>
                                <li><a href="#">Контакти</a></li>
                            </ul>
                            <h4 className="main-menu">Сервіси</h4>
                            <h4 className="main-menu">Послуги для авто</h4>
                        </div>
                        <div className="footer-section">
                            <button className="footer-button"  onClick={openForm}>Написати нам</button>
                            <div className="social-media-container">
                                <a href="https://invite.viber.com/?g2=AQBDzvUbugbm81OTOuo8bEaclCzidca%2FZ3y7%2BTiC%2FYbqlg%2FuDV4SiZ5BHdVWtYV6"><img  src="/images/viber.png" alt="Viber" className="social-icon"/></a>
                                <a href="https://t.me/+7lZMijtbBLRhZTQy"><img src="/images/telegram.png" alt="Telegram" className="social-icon"/></a>
                                <a href="https://instagram.com"><img src="/images/instagram.png" alt="Instagram" className="social-icon"/></a>
                                <a href="https://facebook.com"><img src="/images/facebook.png" alt="Facebook" className="social-icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-container">
                        <div className="phone-container">
                            <h4 className="phone">+380-98-449-71-31</h4>
                        </div>
                        <div className="phone-container">
                            <h4 className="phone">+380-66-446-61-41</h4>
                        </div>
                    </div>
                    {isFormVisible && <FormWithCloseButton onClose={closeForm}/>}
                  
                </div>
            </div>
        );
    }
;

export default PagesFooter;