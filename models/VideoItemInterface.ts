export default interface VideoItemInterface {
    /** 影片序號 */
    id: number;
    /** 影片縮圖 */
    thumbnail: string;
    /** 影片標題 */
    title: string;
    /** 影片觀看人數 */
    views: number;
    /** 影片收藏人數 */
    collectCount: number;
    /** 片長 (s) */
    duration: number;
    /** 發佈時間 */
    TedAt: string;
    /** 影片程度 ( 1: 初級、2: 中級、3: 中高級、4: 高級 ) */
    level: number;
    /** 影片字幕 ( cht: 中文、ja: 日文、vi: 越南文、en: 英文 ) */
    captions: Array<string>;
}