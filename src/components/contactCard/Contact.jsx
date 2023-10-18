

const Card = () => {
    return (
        <>
            <div className="contact__menu">
             
                    <div className="menu_left">
                        <div className="menu__item">
                            <a href='tel:998149033' className="item_icon">
                                <i className="fa-solid fa-phone icon" ></i>
                            </a>
                            <div className="item_content">
                                <div className="content__title">Phone Number</div>
                                <div className="content_subtitle">+998 99 814 90 33</div>
                            </div>
                        </div>
                        <div className="menu__item">
                            <a href='tel:998149033' className="item_icon">
                                <i className="fa-brands fa-github icon"></i>
                            </a>
                            <div className="item_content">
                                <div className="content__title">GitHub</div>
                                <div className="content_subtitle">@VladislavXD</div>
                            </div>
                        </div>
                        <div className="menu__item">
                            <a href='tel:998149033' className="item_icon">
                                <i className="fa-brands fa-instagram icon"></i>
                            </a>
                            <div className="item_content">
                                <div className="content__title">Instagram</div>
                                <div className="content_subtitle">@vladislav.xd1</div>
                            </div>
                        </div>
                    </div>
         
            
                    <div className="menu_right">
                        <div className="menu__item">
                            <a href='tel:998149033' className="item_icon">
                                <i className="fa-solid fa-envelope icon"></i>
                            </a>
                            <div className="item_content">
                                <div className="content__title">Email</div>
                                <div className="content_subtitle">Vladgrechkoseev85@gmail.com</div>
                            </div>
                        </div>
                        <div className="menu__item">
                            <a href='tel:998149033' className="item_icon">
                                <i className="fa-brands fa-telegram icon"></i>
                            </a>
                            <div className="item_content">
                                <div className="content__title">Telegram</div>
                                <div className="content_subtitle">@vlad_539</div>
                            </div>
                        </div>
                        <div className="menu__item">
                            <a href='tel:998149033' className="item_icon">
                                <i className="fa-brands fa-vk icon"></i>
                            </a>
                            <div className="item_content">
                                <div className="content__title">Wk</div>
                                <div className="content_subtitle">@vlad539</div>
                            </div>
                        </div>
                    </div>
                

            </div>
        </>
    )
}


export default Card