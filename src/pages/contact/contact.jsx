import './contact.css'
import Card from '../../components/contactCard/Contact'
import Footer from './../../components/footer/footer'

import { Fade } from 'react-reveal'
import SendMessage from '../../components/sendForm/sendMessage'
const Contact = () => {


    return (
        <>

            <div id='container'>

                <div className='container' >
                    <section className="contact">
                        <div className="contact__title">
                            <Fade top cascade>
                                <h1 className="contact__title">Contact</h1>

                            </Fade>

                        </div>
                        <Card />
                     
                        <div className="forms">
                            <form id='form'>
                                <div className="top">
                                    <Fade left cascade>
                                        <input type="text" name="userName" className='about__input' placeholder='Name' />
                                    </Fade>
                                    <Fade right cascade>
                                        <input type="text" name='lastName' className='about__input' placeholder='LastName' />
                                    </Fade>
                                </div>
                                <div className="center">
                                    <Fade left cascade>
                                        <input type='text' name='number' className='about__input' placeholder='Number' />
                                    </Fade>
                                    <Fade right cascade>
                                        <input type="email" name='email' className='about__input' placeholder='Email' />
                                    </Fade>
                                </div>
                                <div className="bottom">
                                    <Fade bottom cascade>
                                        <textarea name="content" placeholder='Content'></textarea>
                                        <h2 id='succes' style={{ display: 'none', color: '#25e000', fontSize: '30px', marginBottom: '15px', transition: '.5s'}}>Сообщения отправленно !</h2>
                                        <h2 id='succesErr' style={{ display: 'none', color: 'red', fontSize: '30px', marginBottom: '15px', transition: '.5s'}}>Ошибка при отправке сообщения !</h2>
                                        <button className='button'> Submit </button>
                                        <SendMessage />
                                    </Fade>
                                    
                                </div>
                               
                            </form>
                        </div>



                    </section>




                </div>
                <Footer />
            </div>


        </>
    )
}

export default Contact