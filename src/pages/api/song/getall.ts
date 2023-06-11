import { NextApiRequest, NextApiResponse } from 'next';
import { Sequelize } from 'sequelize';

import Song from '@/models/Song';
import db from '@/db/connection'; // Importa la instancia de Sequelize


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { pageIndex, pageSize } = req.query;
    try {
        const { count, rows: songs } = await Song.findAndCountAll({
            offset: Number(pageIndex) * Number(pageSize),
            limit: Number(pageSize),
        });

        const totalPages = Math.ceil(count / Number(pageSize));

        return res.status(200).json({ songs, totalPages });
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener datos" });
    }
}