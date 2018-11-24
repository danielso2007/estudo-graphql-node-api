import * as Sequelize from 'sequelize';
import { UserModel } from '../models/UserModel';
import { PostModel } from '../models/PostModel';
import { CommentModel } from '../models/CommentModel';

export interface ModelsInterface extends Sequelize.Models {
    User: UserModel;
    Post: PostModel;
    Comment: CommentModel;
}