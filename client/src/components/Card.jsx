import '../index.css';

const Card = ({ suggestion }) => {

    const { feedback_title, category, feedback_detail } = suggestion;

    return(
    <div className="suggestion-card">
            <h3>{ feedback_title }</h3>
            <p>{feedback_detail}</p>
            <button>{ category }</button>
    </div>)
}

export default Card;