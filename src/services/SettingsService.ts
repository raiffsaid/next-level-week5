import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: string;
    username: string;
}

class SettingsService {
    private settingsRepository: Repository<Setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username }) {
        // Select * from settings where username = "username" limit 1
        const userAlreadyExist = await this.settingsRepository.findOne({
            username
        });

        if (userAlreadyExist) {
            throw new Error("User already exist!");
        }

        // Criando o objeto
        const settings = this.settingsRepository.create({
            chat,
            username
        });
    
        await this.settingsRepository.save(settings);

        return settings;
    }
}

export { SettingsService };