import { Link } from 'react-router-dom';

const movie = (props) =>
{
    let characterId = 0;
    const characters = props.characters.map((clink, i) => {
        characterId = clink.substring(clink.indexOf('/', 27)+1, clink.length-1);
        return (
            <li key={i}>
                <Link to={'/characters/'+characterId}> Character {characterId}</Link>
            </li>
        );
    });

    return (
    <div style={{marginLeft: '25%', marginRight: '25%', textAlign: 'center'}}>
        <h1 style={{textAlign: 'center'}}>{props.title}</h1>
        <h3 style={{backgroundColor: 'black', color: 'yellow'}}>{props.episode_id}</h3>
        <p style={{borderStyle: 'dashed'}}>{props.opening_crawl}</p>
        <ul style={{ listStyleType: 'none' }}>
            {characters}
        </ul>
    </div>);
}

export default movie;