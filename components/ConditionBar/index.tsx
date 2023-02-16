import ConditionBarInterface from '@/models/ConditionBarInterface'
import { useState } from 'react'
import styles from './style.module.scss'

export default function ConditionBar(props: ConditionBarInterface) {

    const { conditionChange } = props;

    const [sortCondition, setSortCondition] = useState(0);
    const [lengthCondition, setLengthCondition] = useState(0);

    const onClickSortCondition = (id: number) => {
        conditionChange('sort', id);
        setSortCondition(id);
    }

    const onClickLengthCondition = (id: number) => {
        conditionChange('length', id);
        setLengthCondition(id);
    }

    return (
        <div className={styles.container}>
            <div className={styles['condition-bar']}>
                {/* 排序 */}
                <span className={styles['sort-condition-bar']}>
                    <span className={styles['condition-title']}>排序</span>
                    <span className={sortCondition === 0 ? styles['condition-active'] : styles.condition} onClick={() => onClickSortCondition(0)}>發布時間</span>
                    <span className={sortCondition === 1 ? styles['condition-active'] : styles.condition} onClick={() => onClickSortCondition(1)}>觀看次數</span>
                    <span className={sortCondition === 2 ? styles['condition-active'] : styles.condition} onClick={() => onClickSortCondition(2)}>收藏次數</span>
                </span>
                {/* 長度 */}
                <span>
                    <span className={styles['condition-title']}>長度</span>
                    <span className={lengthCondition === 0 ? styles['condition-active'] : styles.condition} onClick={() => onClickLengthCondition(0)}>不限</span>
                    <span className={lengthCondition === 1 ? styles['condition-active'] : styles.condition} onClick={() => onClickLengthCondition(1)}>4分鐘以下</span>
                    <span className={lengthCondition === 2 ? styles['condition-active'] : styles.condition} onClick={() => onClickLengthCondition(2)}>5-10分鐘</span>
                    <span className={lengthCondition === 3 ? styles['condition-active'] : styles.condition} onClick={() => onClickLengthCondition(3)}>超過10分鐘</span>
                </span>
            </div>
        </div>

    )
}
