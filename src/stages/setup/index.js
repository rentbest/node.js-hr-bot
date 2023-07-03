import { Scenes } from "telegraf";
import { pickFilterScene } from './scenes/pickFilter.js';
import { setTextScene } from "./scenes/setText.js";
import { setregion_codeScene } from "./scenes/setregion_code.js";

export const SetupStage = new Scenes.Stage([pickFilterScene, setTextScene, setregion_codeScene,]);

