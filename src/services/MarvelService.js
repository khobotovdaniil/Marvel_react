class MarvelService {
    getResource = async (url) => {
        const res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };

    getAllCaracters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=c7a7c2ee87cb7d02d52a844620fbc6f9');
    }
}

export default MarvelService;
