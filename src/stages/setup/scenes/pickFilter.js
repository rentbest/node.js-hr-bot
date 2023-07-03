import { Markup, Scenes } from "telegraf";

export const pickFilterScene = new Scenes.BaseScene("pickFilter");

pickFilterScene.enter((ctx) => {
    ctx.session.newFilter = ctx.session.newFilter || {};

    ctx.reply(
        "Доступные фильтры",
        Markup.inlineKeyboard([
            [
                Markup.button.callback("Ключевое слово", "text"),
                Markup.button.callback("Код региона поиска", "region_code"),
            ],
            [Markup.button.callback("Готово", "done")],
        ])
    );
});

pickFilterScene.action("text", (ctx) => {
    ctx.deleteMessage();

    ctx.scene.enter("setText");
});

pickFilterScene.action("region_code", (ctx) => {
    ctx.deleteMessage();

    ctx.scene.enter("setregion_code");
});

pickFilterScene.action("done", (ctx) => {
    if (Object.keys(ctx.session.newFilter).length) {
        ctx.session.filters = {
            ...ctx.session.filter,
            ...ctx.session.newFilter,
        };

        ctx.session.newFilter = {};

        return ctx.editMessageText("Фильтры успешно обновлены");
    } else {
        ctx.deleteMessage();
    }

    return  ctx.scene.leave();
});

pickFilterScene.action("text");
pickFilterScene.action("region_code");
pickFilterScene.action("done");

