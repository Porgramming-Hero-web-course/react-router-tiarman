import React, { useEffect, useState } from "react";
import Team from '../Team/Team';
import './Home.css'

const Home = (props) => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <div className="home-background">
                <div class="header-text">
                    <h1>Soccer Team</h1>
                </div>

            </div>

            {
                teams.map(team => <Team team={team}></Team>)
            }
        </div>

    );
};

export default Home;