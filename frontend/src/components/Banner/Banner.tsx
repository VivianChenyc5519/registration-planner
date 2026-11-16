import style from './Banner.module.css';
import type { ReactNode } from 'react';

interface BannerProps {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
}

export default function Banner({left, center, right}: BannerProps) {
    return (
        <header className={style.banner}>
            <div className={style['banner-left']}>{left}</div>
            <div className={style['banner-center']}>{center}</div>
            <div className={style['banner-right']}>{right}</div>
        </header>
    )
}