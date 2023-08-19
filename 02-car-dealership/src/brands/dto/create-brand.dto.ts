import { IsString, MinLength } from "class-validator";

export default class CreateBrandDto {

 @IsString()
 @MinLength(1)
 name: string;


}
