const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7498251188:AAF_W0syMsK0KVi7kiWPOz7BgvOVbmrGYDs"; // Replace with your bot token
const webhookUrl = "https://i-ai-swipe-game.vercel.app/api/webhook"; // This should match your deployed function URL

const bot = new TelegramBot(TOKEN, { polling: false });

bot.setWebHook(webhookUrl).then(() => {
    console.log("Webhook set successfully.");
}).catch(err => {
    console.error("Error setting webhook:", err);
});

