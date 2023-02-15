import Tag from '../Tag'
import styles from './style.module.scss'

export default function VideoList(props: any) { // TODO: 型別
    const { videoList } = props;

    return (
        <>
            <div className={styles.container}>
                {videoList && videoList.length
                    ? videoList.map((v: any) => {
                        return (
                            <div key={v.id} className={styles['video-item-box']}>
                                <div className={styles['video-item']}>
                                    {/* 影片縮圖 */}
                                    <div className={styles['video-pic']} style={{ backgroundImage: `url(${v.thumbnail})` }}></div>
                                    {/* 影片資訊 */}
                                    <div className={styles['video-info']}>
                                        <p className={styles.title}>{v.title}</p>
                                        <div className={styles.subinfo}>
                                            <span className={styles['views-wrap']}>
                                                <i className="material-icons">headset</i>
                                                <span className={styles.views}>{v.views}</span>
                                            </span>
                                            <span className={styles['button-bar']}>
                                                <span>
                                                    <Tag flag='captions' id={v.captions[0]} />
                                                </span>
                                                <span>
                                                    <Tag flag='level' id={v.level} />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    : ''
                }
            </div>
        </>
    )
}
