import '../index.css';

const Card = ({ suggestion }) => {

    const { feedback_title, category, feedback_detail } = suggestion;

    return(
    <div className="suggestion-card">
            <h3>{ feedback_title }</h3>
            <p className='body-text2'>{feedback_detail}</p>
            <button className='filter-button'>{ category }</button>
    </div>)
}

export default Card;