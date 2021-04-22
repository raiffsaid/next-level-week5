import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

// Define o repositório do tipo da entidade Setting
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

export { SettingsRepository };