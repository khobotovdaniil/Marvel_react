import { Link, useNavigate } from 'react-router-dom';

import './singleComicLayout.scss';

const SingleComicLayout = ({data}) => {
    const {title, description, pageCount, thumbnail, language, price, creators} = data;
    const navigate = useNavigate();

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
                <h3 className='single-comic__creators'>Creators:</h3>
                <ul>
                    {
                        creators.map((item, i) => {
                            return (
                                <li key={i} className='single-comic__creators-item'>{item.name} - {item.role}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <Link to="/" onClick={() => navigate(-1)} className="single-comic__back">Back to previous</Link>
                <Link to="/comics"  className="single-comic__back">Back to all</Link>
            </div>
        </div>
    )
}

export default SingleComicLayout;