import { Funnel } from "lucide-react";
import style from './SpecialButton.module.css'

const FilterButton = ({ onClick }: { onClick: () => void }) => {
  return <Funnel className={style['filter-button']} onClick={onClick} />;
};

export default FilterButton;
