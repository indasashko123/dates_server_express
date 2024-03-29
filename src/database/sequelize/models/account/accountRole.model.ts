import { Column, DataType, Model, Table } from "sequelize-typescript";
import { IAccountRoleCreationAttribute } from "../../../../app";
import { AccountRole } from "../../../../domain";



@Table({modelName : "account_role"})
export class AccountRoleModel extends Model<AccountRole,IAccountRoleCreationAttribute> {
    @Column({type : DataType.INTEGER, autoIncrement : true,unique : true, primaryKey : true})
    id : number;

    @Column({type : DataType.STRING})
    accountId : string;

    @Column({type : DataType.INTEGER})
    roleId : number;
}