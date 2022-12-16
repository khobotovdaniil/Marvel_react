import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const ItemList = (props) => {

    const {list, listClass, listName, showList=true, setShowButton} = props;

    const itemList = !list ? null : list.map((item, i) => {
        const itemUrl = item.resourceURI.split('/')
        return (
            <CSSTransition
                    key={i}
                    in={showList}
                    timeout={700}
                    classNames={listClass}
                    unmountOnExit
                    onEnter={() => setShowButton(false)}>
                <Link to={`/${listName}/${itemUrl[itemUrl.length - 1]}`} key={i} className={listClass}>
                    <li>{item.name}</li>
                </Link>
            </CSSTransition>    
        )   
    })

    return itemList;
}

export default ItemList;



