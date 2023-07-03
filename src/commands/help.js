export class HelpCommand {
    constructor(bot) {
        this.bot = bot;
    }

    exec() {
        this.bot.command("help", async(ctx) => {
            const commands = await ctx.getMyCommands();
            const info = commands.reduce(
                (acc, val) => `${acc}/${val.command} - ${val.description}\n`,
                ""
            );
            return ctx.reply(info);
        });
    }
}