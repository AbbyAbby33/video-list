import VideoItemInterface from '@/models/VideoItemInterface';
import Tag from '../Tag'
import styles from './style.module.scss'

export default function VideoItem(props: VideoItemInterface) {
    const { id, thumbnail, title, views, captions, level } = props;
    // console.log('props', props)

    return (
        <div key={id} className={styles['video-item-wrap']}>
            <div className={styles['video-item']}>
                {/* 影片縮圖 */}
                <div className={styles['video-pic']} style={{ backgroundImage: `url(${thumbnail})` }}></div>
                {/* 影片資訊 */}
                <div className={styles['video-info']}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.subinfo}>
                        <span className={styles['views-wrap']}>
                            <i className="material-icons">headset</i>
                            <span className={styles.views}>{views}</span>
                        </span>
                        <span className={styles['button-bar']}>
                            <span>
                                <Tag flag='captions' id={captions[0]} />
                            </span>
                            <span>
                                <Tag flag='level' id={level} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
