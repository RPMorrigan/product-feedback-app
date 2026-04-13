import '../index.css'

const FilterButton = ({ filter }) => {
    
    const { category_id, category_name } = filter;

    return (
        <button className={`filter-button button5 filt ${category_id}`}>
            {category_name}
        </button>
    )

}

export default FilterButton