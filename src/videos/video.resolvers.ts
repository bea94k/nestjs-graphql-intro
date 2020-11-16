import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Video } from "src/graphql";
import { VideoDTO } from "./dto/video.dto";
import { VideoService } from "./video.service";


// name of the resolver can be chosen freely
@Resolver('Video')
export class VideoResolvers {
    // delegates all the work and operations to the service
    constructor(private readonly videoService: VideoService) {}

    // query to get all saved videos
    @Query()
    async videos() {
        return this.videoService.findAll()
    }

    // mutation to create a new video
    // use arguments as described in the schema: input
    // name of mutation has to match the name in schema
    @Mutation('createVideo')
    async create(@Args('input') args: VideoDTO): Promise<Video> {
        return await this.videoService.create(args);
    }
}