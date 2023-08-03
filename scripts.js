let tg = window.Telegram.WebApp;
let btn_save = document.querySelector('.btn__save')
let btns_cancel = document.querySelectorAll('.btn__cancel')
let link__input, stop_words, max_posts, type_work
const init_params = () => {
    link__input = document.querySelector('#link__input').value,
    stop_words = document.querySelector('#stop_words').value,
    max_posts = document.querySelector('#max_posts').value
    type_work = document.querySelector('#type_work').value
}

init_params()


const cancel_app = () => {
    tg.close()
}

const give_params = () => {
    init_params()
    tg.sendData(JSON.stringify({
        "link" : link__input,
        'stop_words': stop_words,
        'max_posts': max_posts,
        'type_work':type_work
    }))
    cancel_app()
}


btn_save.addEventListener('click', give_params)

btns_cancel.forEach(btn_cancel => {
    btn_cancel.addEventListener('click', cancel_app) 
});