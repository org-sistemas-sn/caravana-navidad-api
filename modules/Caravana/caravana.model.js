import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const CaravanaConfig = sequelize.define('CaravanaConfig', {
    variable: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false 
})

export default CaravanaConfig;