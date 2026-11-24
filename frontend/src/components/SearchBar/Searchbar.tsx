import { Search } from 'lucide-react';
import { IconButton } from '../SpecialButtons/SpecialButton';
import style from './SearchBar.module.css';
import { useState } from 'react';

type SearchProps = {
    onSearch: (term: string) => void;
    placeholder?: string;
}

export default function SearchBar({onSearch, placeholder}: SearchProps) {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className={style['search-bar']}>
            <form className={style['search-bar-form']}
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(searchTerm);
                }}
            >
            <input 
                type='search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={style['search-bar-input']}
                placeholder={placeholder ?? "Enter something to start"}
            />
            <IconButton
                icon={Search}
                label="Search courses"
                type="submit"
            />
            </form>
        </div>
    );
}