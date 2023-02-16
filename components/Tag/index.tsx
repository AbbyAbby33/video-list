import styles from './style.module.scss'

type TagType = {
    id: string | number,
    flag: string,
}

export default function Tag(props: TagType) {
    const { id, flag } = props;
    const name = new Map([
        ['captions-cht', '中文'],
        ['captions-ja', '日文'],
        ['captions-vi', '越南文'],
        ['captions-en', '英文'],
        ['level-0', '初級'],
        ['level-1', '中級'],
        ['level-2', '中高級'],
        ['level-3', '高級']
    ]);

    return (
        <span className={styles[`${flag}-${id}`]}>
            {name.get(`${flag}-${id}`)}
        </span>
    )
}