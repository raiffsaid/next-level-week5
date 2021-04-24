import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
    
        const userExists = await usersRepository.findOne({ email });

        // Verifica se usuário já existe. Caso sim, retorna o mesmo
        if (userExists) {
            return userExists;
        }

        // Se não existir, salva no DB
        const user = usersRepository.create({ email });

        await usersRepository.save(user);

        return user;
    }
}

export { UsersService };