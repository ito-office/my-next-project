import { spawn } from 'child_process';
import styles from './Date.module.css';
import Image from 'next/image';

type Props = {
    date: string;
};

export default function Date({ date }:Props) {
    return(
        <span className={styles.data}>
            <Image src='/clock.svg' alt='時計' width={16} height={16} loading='eager'/>
            {date}
        </span>
    );
    
}