import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { IUserEntity } from "../../../../domain/User.entity";

@modelOptions({
    options: { customName: "_authService" },
    schemaOptions: { timestamps: true, versionKey: false },
  })
class UserCollection implements IUserEntity{

    @prop({ minlength: 2, maxlength: 50, required: true })
    name!: string;

    @prop({ minlength: 2, maxlength: 50, required: true, unique: true })
    username!: string;

    @prop({ minlength: 2, maxlength: 50, required: true, unique: true })
    email!: string;

    @prop({ required: true })
    password!: string;
}

const UserModel = getModelForClass(UserCollection)
export default UserModel

