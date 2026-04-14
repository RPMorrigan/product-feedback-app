export default function Categories ({ category }) {
    
    const { category_name } = category;

    return (
        <option value={category_name}>{ category_name }</option>
    )

};