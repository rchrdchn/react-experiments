import React, { Component } from 'react';
// import { Grid, Jumbotron } from 'react-bootstrap';

function Header(props) {
    return (
    <div className="header">
        <h1>{props.title}</h1>
    </div>
    );
}

// Header.propTypes = {
//     title: React.PropTypes.string;
// }

Header.defaultProps = {
    title: "Scoreboard",
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

// Player.propTypes = {
//     name: React.PropTypes.string.isRequired,
//     score: React.PropTypes.number.isRequired,
// }

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

// Counter.propTypes = {
//     score: React.PropTypes.number.isRequired,
// }

function Application(props) {
    return (
        <div className="scoreboard">
            <Header title={props.title} />
            <Player name="Richard" score={31} />
            <Player name="William" score={32} />
        </div>
    );
}

export default Application;
