import { Link, useNavigate } from 'react-router-dom';
import img from './error.gif';

const ErrorMessage = (props) => {
    const textMessage = props.message ? <View/> : null;
    
    return (
        <>
            <img style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}} src={img} alt='Error'/>
            {textMessage}
        </>
    )
}

const View = () => {
    const navigate = useNavigate();
    console.log(navigate(-1));
    return (
        <>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Error, try another one</p>
            <Link 
                onClick={() => navigate(-1)} 
                style={{'display': 'block', 'color': '#9f0013', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '20px'}} 
                to="/">Go back</Link>
        </>
    )
}

export default ErrorMessage;