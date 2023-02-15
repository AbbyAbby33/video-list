import styles from './style.module.scss'

export default function VideoList(props: any) { // TODO: 型別
    const { videoList } = props;
    const level = {
        1: '初級',
        2: '中級',
        3: '中高級',
        4: '高級'
    }
    const captions = {
        'cht': '中文',
        'ja': '日文',
        'vi': '越南文',
        'en': '英文',
    }

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
                                                <span className={styles[`captions-${v.captions[0]}`]}>{captions[v.captions[0]]}</span> {/* TODO: 型別 */}
                                                <span className={styles[`level-${v.level}`]}>{level[v.level]}</span> {/* TODO: 型別 */}
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
