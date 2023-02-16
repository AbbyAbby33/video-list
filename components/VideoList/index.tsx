import VideoItemInterface from '@/models/VideoItemInterface'
import VideoListInterface from '@/models/VideoListInterface'
import VideoItem from '@/components/VideoItem'
import styles from './style.module.scss'

export default function VideoList(props: VideoListInterface) {
    const { videoList } = props;

    console.log('props', props)

    return (
        <>
            <div className={styles.container}>
                {videoList && videoList.length
                    ? videoList.map((v: VideoItemInterface) => {
                        return (
                            <div key={v.id} className={styles['video-item-box']}>
                                <VideoItem  {...v}/>
                            </div>
                        )
                    })
                    : ''
                }
            </div>
        </>
    )
}
