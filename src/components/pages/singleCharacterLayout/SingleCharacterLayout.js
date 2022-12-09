import { Link, useNavigate } from 'react-router-dom';

import './singleCharacterLayout.scss'

const SingleCharacterLayout = ({data}) => {
    const {name, fullDescription, thumbnail, comics} = data;
    const navigate = useNavigate();

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    const comicsList = !comics ? null : comics.map((item, i) => {
        const comicURL = item.resourceURI.split('/')
        return (
            <Link to={`/comics/${comicURL[comicURL.length - 1]}`} key={i} className='single-character-item'>
                <li>{item.name}</li>
            </Link>
        )   
    })

    return (
        <div className="single-character">
            <img src={thumbnail} alt={name} style={imgStyle} className="single-character__img"/>
            <div className="single-character__info">
                <h2 className="single-character__name">{name}</h2>
                <p className="single-character__descr">{fullDescription}</p>
                <h3 className='single-character-header'>Comics:</h3>
                    <ul>
                        {comicsList}
                    </ul>
            </div>
            <div>
                <Link to="/" onClick={() => navigate(-1)} className="single-character__back">Back to previous</Link>
                <Link to="/characters"  className="single-character__back">Back to all</Link>
            </div>
        </div>
    )
}

export default SingleCharacterLayout;