import '../index.css'

const FilterButton = ({ filter }) => {
    
    const { category_id, category_name } = filter;

    return (
        <button key={`filt${category_id}`} className={`filter-button button5 `}>
            {category_name}
        </button>
    )

}

export default FilterButton