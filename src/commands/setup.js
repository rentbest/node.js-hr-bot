export class SetupCommand {
    constructor(bot) {
        this.bot = bot;
    }

    exec() {
        this.bot.command("setup", async(ctx) => {
            ctx.scene.enter("pickFilter");
        });
    }
}