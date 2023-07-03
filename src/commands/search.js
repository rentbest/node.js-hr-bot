import { getVacancies, getVacanciesByRegion } from "../api/vacancies.js";

export class SearchCommand {
    constructor(bot) {
        this.bot = bot;
    }

    exec() {
        this.bot.command("search", async(ctx) => {
            try {
                const { region_code, ...query} = ctx.session.filters || {};

                const { vacancies } = region_code ? 
                await getVacanciesByRegion(region_code, query) 
                : await  getVacancies(query);

                if (!vacancies.length) {
                    return ctx.reply("К сожалению, ничего не найдено");
                }

                for (const { vacancy } of vacancies) {
                    ctx.replyWithMarkdown(buildMessage(vacancy));
                }
            } catch (error) {
                console.error(error);
                ctx.reply("К сожалению, произошла ошибка");
            }
        });
    }
}

const buildMessage = (vacancy) => {
    return (
        `💡 *${vacancy["job-name"]}*\n` +
        `💸 ${vacancy.salary || "He указано"}\n` +
        `🏭 ${vacancy.company.name}\n\n` +
        `🌎 [Смотреть на сайте](${vacancy.vac_url})`
    );
};
