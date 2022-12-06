import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [props.charId]);

    const updateChar = () => {
        const {charId} = props;

        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
            .then(onCharLoaded) 
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const {charPos} = props;

    const skeleton = char || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    let charInfoStyle = {}
    if (charPos) {
        charInfoStyle = {'position': 'absolute', 'left': '675px', 'top': `${charPos}px`};
    }

    return (
        <div className="char__info" style={charInfoStyle}>
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({char}) => {
    const {name, id, description, thumbnail, homepage, comics} = char;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} style={imgStyle} alt={name}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <Link to={`/characters/${id}`} className="button button__main">
                            <div className="inner">character</div>
                        </Link>
                        <a href={homepage} className="button button__secondary">
                            <div className="inner">homepage</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((item, i) => {
                        // eslint-disable-next-line 
                        if (i > 9) return;
                        const comicURL = item.resourceURI.split('/');
                        return (
                            <li key={i} className="char__comics-item">
                                <Link to={`/comics/${comicURL[comicURL.length - 1]}`}>
                                    {item.name}
                                </Link>     
                            </li>
                        )                          
                    })
                }         
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;