import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './TeamDetail.css'

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [teamDetail, setTeamDetail] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]));
    }, [idTeam])
    return (
        <div>
            <div className="teamDetail-background">
                <div className="team-logo">
                    <img src={teamDetail.strTeamBadge} alt="" />
                </div>
            </div>
            <div>
                <br />

                <div className="container">
                    <div className="team-detail">
                        <div className="condition-image">
                            <p>{teamDetail.strTeam}</p>
                            <p>Founded Year: {teamDetail.intFormedYear}</p>
                            <p>Country: {teamDetail.strCountry}</p>
                            <p>Sport Type: {teamDetail.strSport}</p>
                            <p>Gender: {teamDetail.strGender}</p>
                        </div>
                        <p>{teamDetail.strStadiumDescription}</p>
                        <div>
                            <div className="social-icon">
                                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                                <br />
                                <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                                <br />
                                <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;