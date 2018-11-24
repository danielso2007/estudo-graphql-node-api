import { Models } from "sequelize";

export interface BaseModelInterface {
    prototype?;
    associate?(models: Models): void;
}