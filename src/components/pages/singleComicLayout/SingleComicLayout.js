import { Link, useNavigate } from 'react-router-dom';
import ItemList from '../../itemList/ItemList';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './singleComicLayout.scss';


const SingleComicLayout = ({data}) => {
    const {title, description, pageCount, thumbnail, language, price, creators, characters} = data;
    const navigate = useNavigate();

    const crearotsList = !creators ? null : creators.map((item, i) => {
        return (
            <li key={i} className='single-comic__wrapper-item'>{item.name} - {item.role}</li>
        )
    })

    return (
        <div className="single-comic">
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content={`${title} comics book`}
                    />
                    <title>{title}</title>
                </Helmet>
            </HelmetProvider>
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
                            <ItemList list={characters} listClass='single-comic__wrapper-item' listName='characters'/>
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