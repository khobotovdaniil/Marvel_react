import {useHttp} from '../hooks/http.hook';

const useMarvelService = () => {
    const {loading, error, request, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=c7a7c2ee87cb7d02d52a844620fbc6f9';
    const _baseCharOffset = 210;
    const _baseCharLimit = 6;
    const _baseComicsOffset = 0;
    const _baseComicsLimit = 8;

    const getAllCharacters = async (offset = _baseCharOffset) => {
        const res = await request(`${_apiBase}characters?limit=${_baseCharLimit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getAllComics = async (offset = _baseComicsOffset) => {
        const res = await request(`${_apiBase}comics?limit=${_baseComicsLimit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?&${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?&${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 100)}...` : 'There is no description for this character',
            fullDescription: char.description ? char.description : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            price: comics.prices.price ? `${comics.prices.price}$` : 'Price is not available',
            pageCount: comics.pageCount ? `${comics.pageCount} pages` : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-us',
            creators: comics.creators.items,
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic}
}

export default useMarvelService;
