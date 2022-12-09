import { Link, useNavigate } from 'react-router-dom';
import './singleComicLayout.scss';


const SingleComicLayout = ({data}) => {
    const {title, description, pageCount, thumbnail, language, price, creators, characters} = data;
    const navigate = useNavigate();

    const charList = !characters ? null : characters.map((item, i) => {
        const charURL = item.resourceURI.split('/');
        return (
            <Link to={`/characters/${charURL[charURL.length - 1]}`} key={i} className='single-comic__wrapper-item'>
                <li>{item.name}</li>
            </Link>
        )
    })

    const crearotsList = !creators ? null : creators.map((item, i) => {
        return (
            <li key={i} className='single-comic__wrapper-item'>{item.name} - {item.role}</li>
        )
    })

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
                <div className='single-comic__wrapper'>
                    <div>
                        <h3 className='single-comic__wrapper-header'>Characters:</h3>
                        <ul>
                            {charList}
                        </ul>
                    </div>
                    <div>
                        <h3 className='single-comic__wrapper-header'>Creators:</h3>
                        <ul>
                            {crearotsList}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Link to="/" onClick={() => navigate(-1)} className="single-comic__back">Back to previous</Link>
                <Link to="/comics"  className="single-comic__back">Back to all</Link>
            </div>
        </div>
    )
}

export default SingleComicLayout;