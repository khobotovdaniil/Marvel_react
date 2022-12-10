import { useState } from "react";
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import CharSearchForm from "../charSearchForm/СharSearchForm";

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

    let charWrapperStyle = {}
    let wrapperPos = (charPos < 400) ? charPos : charPos - 200;
    if (charPos) {
        charWrapperStyle = {'position': 'absolute', 'left': '675px', 'top': `${wrapperPos}px`};
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} getCharPosition={getCharPosition}/>
                </ErrorBoundary>
                <div className="char__wrapper" style={charWrapperStyle}>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} charPos={charPos}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharSearchForm/>
                    </ErrorBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;