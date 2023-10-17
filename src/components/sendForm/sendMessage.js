import axios from "axios";
import React from "react";

const SendMessage = () => {

    const TOKEN = '6509766590:AAF2mreDAHBgwegGHX9V2HjjkaliSMZoCa8';
    const CHAT_ID = '-1001913563282';
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const succes = document.getElementById('succes');
    const succesErr = document.getElementById('succesErr');
    React.useEffect(() => {
        document.getElementById('form').addEventListener('submit', function (e) {
            e.preventDefault();
            let message = `Заявка с сайта!\n`
            message += `Имя:  ${this.userName.value}\n`
            message += `Фамилия: ${this.lastName.value}\n`
            message += `Номер телефонаи:  ${this.number.value}\n`
            message += `Почта отправителя:  ${this.email.value}\n`
            message += `Сообщение:  ${this.content.value}`



            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            }).then((res) => {
                    this.userName.value = ""
                    this.lastName.value = ""
                    this.number.value = ""
                    this.email.value = ""
                    this.content.value = ""
                    succes.style.display = 'block';
                    setTimeout(()=>{
                        succes.style.display = 'none';
                    }, 4000)
                })
                .catch((err) => {
                    succesErr.style.display = 'block'
                   
                })
                .finally(() => {
                    console.log('End');
                })
        })
    }, [])


}
export default SendMessage
