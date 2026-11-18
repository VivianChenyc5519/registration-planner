import style from './Banner.module.css';
import type { ReactNode } from 'react';

interface BannerProps {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
    className?: string;
}

export default function Banner({left, center, right, className}: BannerProps) {
    return (
        <header className={className ? `${style.banner} ${className}` : style.banner}>
            <div className={style['banner-left']}>{left}</div>
            <div className={style['banner-center']}>{center}</div>
            <div className={style['banner-right']}>{right}</div>
        </header>
    )
}