import '../index.css'

const FilterButton = ({ filter }) => {
    
    // const {
    // } = filter;

    return (
        <button>
            {filter.stringify()}
        </button>
    )

}

export default FilterButton