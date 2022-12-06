import { Link, useNavigate } from 'react-router-dom';

import './singleCharacterLayout.scss'

const SingleCharacterLayout = ({data}) => {
    const {name, fullDescription, thumbnail} = data;
    const navigate = useNavigate();

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <div className="single-character">
            <img src={thumbnail} alt={name} style={imgStyle} className="single-character__img"/>
            <div className="single-character__info">
                <h2 className="single-character__name">{name}</h2>
                <p className="single-character__descr">{fullDescription}</p>
            </div>
            <div>
                <Link to="/" onClick={() => navigate(-1)} className="single-character__back">Back to previous</Link>
                <Link to="/characters"  className="single-character__back">Back to all</Link>
            </div>
        </div>
    )
}

export default SingleCharacterLayout;