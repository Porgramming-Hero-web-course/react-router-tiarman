import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'

const Home = (props) => {
    // console.log(props)
    const { strTeamLogo, strTeam, strSport, idTeam } = props.team;

    const history = useHistory();
    const ExploreButton = idTeam => {
        const url = `team/${idTeam}`;
        history.push(url);
    }
    return (
        <Container>
            <div className="soccer-team">
                <div className="hero-image"></div>
                <div >
                    <img src={strTeamLogo} alt="" />
                    <br />
                    <br />
                    <br />
                    <div>
                        <h1>{strTeam}</h1>
                        <p>Sport Type: {strSport}</p>
                    </div>
                </div>
                <br />
                <button className="btn btn-success" onClick={() => ExploreButton(idTeam)}>Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
            </div>
        </Container>
    );
};

export default Home;