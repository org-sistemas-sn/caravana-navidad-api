import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Feedback = sequelize.define('Feedback', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: true
    },
}, {
    timestamps: true,
    tableName: 'feedback'
});

export default Feedback;