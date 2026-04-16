import '../index.css';

const Card = ({ suggestion, onDelete }) => {

    const { feedback_title, category, feedback_detail } = suggestion;

    return(
    <div className="suggestion-card container">
            <p>{ feedback_title }</p>
            <p className='body-txt2 grey-txt'>{feedback_detail}</p>
            <button className='filter-button'>{category}</button>
            <button onClick={onDelete}>delete</button>
    </div>)
}

export default Card;