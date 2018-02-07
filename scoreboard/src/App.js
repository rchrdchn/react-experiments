import React, { Component } from 'react';
// import { Grid, Jumbotron } from 'react-bootstrap';

function Application(props) {
    return (
        <div className="scoreboard">
            <div className="header">
                <h1>{props.title}</h1>
            </div>

            <div className="players">
                <div className="player">
                    <div className="player-name">
                        Richard
                    </div>
                    <div className="player-score">
                        <div className="counter">
                            <button className="counter-action decrement"> - </button>
                            <div className="counter-score"> 31 </div>
                            <button className="counter-action increment"> + </button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default Application;
