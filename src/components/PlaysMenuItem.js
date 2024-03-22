import '../styles/PlaysMenuItem.css';
import { useNavigate} from 'react-router-dom';

function PlaysMenuItem({ image, name, content, genre }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Parametreleri diğer sayfaya yönlendirme
        navigate(`/plays/${name}`, { state: { image, name, content, genre} });
    };

    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1 style={{ marginBottom: '10px' }}>{name}</h1>
            {/* <h6 style={{ marginTop: '0px' }}>{content}</h6> */}
            <p>
                <i style={{ color: 'white' }}>{genre}</i>
            </p>
            <button className="inspect-button" onClick={handleClick}>İncele</button>
        </div>
    );
}

export default PlaysMenuItem;