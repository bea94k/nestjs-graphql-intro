import { NewVideo } from "src/graphql";
import { IsNotEmpty } from "class-validator";


export class VideoDTO extends NewVideo {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    url: string;

    @IsNotEmpty()
    userId: string;
}