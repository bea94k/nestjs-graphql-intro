import { Injectable } from "@nestjs/common";
import { User, Video } from "src/graphql";
import { VideoDTO } from "./dto/video.dto";

@Injectable()
export class VideoService {
    // create a local array that keeps all the videos saved so far
    private readonly videos: Video[] = [];

    // get all the videos
    // used by Query
    findAll(): Video[] {
        return this.videos;
    }

    // DTO = data transfer object
    // used by Mutation
    create(videoDTO: VideoDTO): Video {
        //IDs increasing by 1
        const videoID: number = this.videos.length + 1;
        const video: Video = new Video();
        video.id = videoID.toString();
        video.title = videoDTO.title;
        video.url = videoDTO.url;

        //create the author of the video
        const author: User = new User();
        author.id = videoDTO.userId;
        author.name = "Author " + videoDTO.userId;

        // assign the created author to the video being created
        video.author = author;

        this.videos.push(video);
        return video;
    }
}