import VideoItemInterface from '@/models/VideoItemInterface';

export default interface VideoListInterface {
    /** 影片列表 */
    videoList: Array<VideoItemInterface>;
}