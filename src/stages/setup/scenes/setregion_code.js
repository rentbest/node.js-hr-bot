import { Scenes } from "telegraf";

export const setregion_codeScene = new Scenes.BaseScene("setregion_code");

setregion_codeScene.enter((ctx) => {
    return ctx.reply("Укажите код региона, например -- 77, 16, 116");
});

setregion_codeScene.on("message", (ctx) => {
    ctx.session.newFilter.region_code = ctx.message.text;

    ctx.reply(`Ок, код региона -- ${ctx.message.text}`);

    return ctx.scene.enter("pickFilter");
});
