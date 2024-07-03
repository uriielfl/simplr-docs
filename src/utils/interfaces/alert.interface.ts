import { AlertTypeEnum } from "utils/enums/alert-type-enum";

export interface IAlert {
    message: string;
    type?: AlertTypeEnum;
  }