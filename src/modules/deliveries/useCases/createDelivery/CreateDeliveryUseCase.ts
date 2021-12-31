import { prisma } from '../../../../database/prismaClient';

interface ICreateDelivery {
    id_client: string;
    item_name: string;
};

export class CreateDeliveryUseCase {
    async execute({ item_name, id_client }: ICreateDelivery ) {
        const delivery = await prisma.deliveries.create({
            data: {
                id_client,
                item_name
            }
        })
        return delivery;
    }
};