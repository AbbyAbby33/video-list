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

                                    <div className={styles['video-pic']} style={{ backgroundImage: `url(${v.thumbnail})` }}></div>
                                    <p className={styles.title}>
                                        {v.title}
                                    </p>
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
