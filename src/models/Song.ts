import { DataTypes } from "sequelize";

import db from "@/db/connection";

const Song = db.define('Song', {
    name: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    },
}, { timestamps: false, tableName: 'song' });

export default Song;