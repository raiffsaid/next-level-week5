import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        const userExists = await this.usersRepository.findOne({ email });

        // Verifica se usuário já existe. Caso sim, retorna o mesmo
        if (userExists) {
            return userExists;
        }

        // Se não existir, salva no DB
        const user = this.usersRepository.create({ email });

        await this.usersRepository.save(user);

        return user;
    }
}

export { UsersService };