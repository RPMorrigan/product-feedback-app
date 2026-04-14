import '../index.css'

const FilterButton = ({ filter, onClick }) => {
    
    const {category_name } = filter;

    return (
        <button onClick={onClick} className={`filter-button button5 `}>
            {category_name}
        </button>
    )

}

export default FilterButton