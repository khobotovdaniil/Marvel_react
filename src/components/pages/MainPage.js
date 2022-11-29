import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setChar] = useState(null);
    const [charPos, setPos] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    const getCharPosition = (pos) => {
        setPos(pos);
    }


    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} getCharPosition={getCharPosition}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar} charPos={charPos}/>
                </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;