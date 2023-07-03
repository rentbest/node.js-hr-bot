import { Scenes } from "telegraf";

export const setTextScene = new Scenes.BaseScene("setText");

setTextScene.enter((ctx) => {
    ctx.reply("Укажите ключевое слово для поиска, например -- инженер");
});

setTextScene.on("message", (ctx) => {
    ctx.session.newFilter.text = ctx.message.text;
   
    ctx.reply(`Ок, ищем по ключевому слову -- ${ctx.message.text}`);

    return ctx.scene.enter("pickFilter");
});
