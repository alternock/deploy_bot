const TeleBot = require('telebot');
//
let SECRET_TOKEN = require("./config/secret_token");
let {
    TOKEN
} = SECRET_TOKEN;


const bot = new TeleBot({
    token: TOKEN
});


// Great API for this bot
const API = 'https://thecatapi.com/api/images/get?format=src&type=';

// Command keyboard
const replyMarkup = bot.keyboard([
    ['/products', '/about']
], {resize: true, once: false});

const buyButtons = bot.keyboard([
    ['buy', 'main']
], {resize: true, once: false});



// On command "start" or "help"
bot.on(['/start', '/help'], function (msg) {
    const startWelcome = "bienvenidos a la tienda";

    return bot.sendMessage(msg.chat.id,startWelcome,{replyMarkup});
});


bot.on(['/products'], function (msg) {
    let id = msg.chat.id; 
    //let txt = msg.text;
    let arr = ["foo","bar","qux","thud","octo"];

    return bot.sendMessage(id,arr.toString(),{buyButtons});
});

// Start getting updates
bot.start();