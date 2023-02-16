import VideoItemInterface from '@/models/VideoItemInterface';
import { useEffect, useRef, useState } from 'react'
import Tag from '../Tag'
import styles from './style.module.scss'

export default function VideoItem(props: VideoItemInterface) {
    const { id, thumbnail, title, views, captions, level, duration } = props;
    // console.log('props', props)

    const isFirstRun = useRef(true);
    const [durationString, setDurationString] = useState('');

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
        } else {
            // console.log(duration);
            const d = countDuration(duration);
            setDurationString(d);
        }
    }, [duration]);

    const countDuration = (duration: number) => {
        // TODO: 小時
        let r, m, s;
        s = duration % 60;
        m = ((duration - s) / 60).toString().padStart(2, '0');
        s = s.toString().padStart(2, '0');
        r = `${m}:${s}`
        return r;
    }

    return (
        <div key={id} className={styles['video-item-wrap']}>
            <div className={styles['video-item']}>
                {/* 影片縮圖 */}
                <div className={styles['video-pic-wrap']}>
                    <div className={styles['video-pic']} style={{ backgroundImage: `url(${thumbnail})` }}></div>
                    <span className={styles['video-duration']}>{durationString}</span>
                </div>
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
