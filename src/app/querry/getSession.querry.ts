import { SessionTarget } from "../enums";
import { BaseQuerry } from "./baseQuerry";



export class GetSessionQuerry extends BaseQuerry {
    target? : SessionTarget | string;
}