import { Column, DataType, Model, Table } from "sequelize-typescript";
import { IBanCreationAttribute } from "../../../../app";
import { Ban } from "../../../../domain";


@Table({modelName : "ban"})
export class BanModel extends Model<Ban, IBanCreationAttribute> {
    @Column({type : DataType.INTEGER, autoIncrement : true,unique : true, primaryKey : true})
    id : number;

    @Column({type : DataType.STRING, allowNull : false,})
    userId : string;

    @Column({type : DataType.STRING, allowNull : false,})
    moderatorId : string;

    @Column({type : DataType.STRING, allowNull : false,})
    endDate : string;
}