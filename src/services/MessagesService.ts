import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
    admin_id?: string; // ?: Define como atributo opcional
    text: string;
    user_id: string;
}

class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({ admin_id, text, user_id }: IMessageCreate) {
        const message = this.messagesRepository.create({
           admin_id,
           text,
           user_id 
        });

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string) {
        const list = await this.messagesRepository.find({
            where: { user_id },
            // Traz todas os dados do usuário ao listar as mensagens
            relations: ["user"] // Passa com mesmo nome atribuido na entidade Message
        });

        return list; // Retorna lista das mensagens do usuário
    }
}

export { MessagesService };