import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { Grid, Jumbotron } from 'react-bootstrap';

var PLAYERS = [
    {
        name: "Richard",
        score: 31,
        id: 1
    },
    {
        name: "Will",
        score: 35,
        id: 2
    },
    {
        name: "Micho",
        score: 34,
        id: 3
    }
]

function Header(props) {
    return (
    <div className="header">
        <h1>{props.title}</h1>
    </div>
    );
}

Header.propTypes = {
    title: PropTypes.string,
}

function Player(props) {
    return (
        <div className="players">
            <div className="player">
                <div className="player-name">
                    {props.name}
                </div>
                <div className="player-score">
                    <Counter score={props.score} />
                </div>
            </div>
        </div>
    );
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
}

// Player.defaultProps = {
//     name: "Richard",
//     score: "31"
// }

function Counter(props) {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

Counter.propTypes = {
    score: PropTypes.number.isRequired,
}

function Application(props) {
    return (
        <div className="scoreboard">
            <Header title={props.title} />
            <div className="players">
                {props.players.map(function(player){
                    return <Player name={player.name} score={player.score} key={player.id} />
                })}
            </div>
        </div>
    );
}

Application.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
}

Application.defaultProps = {
    title: "Scoreboard",
}

export default Application;
export {PLAYERS};
ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('root'));