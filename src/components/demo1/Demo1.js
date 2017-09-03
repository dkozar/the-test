import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Wrappy from 'react-wrappy-text';

export default class Demo1 extends Component {

    static renderVideo() {
        const options = {
            width: '640',
            height: '390',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <YouTube
                videoId='Ln4WXbjWPZc'
                opts={options}
            />
        );
    }

    render() {
        const video = Demo1.renderVideo();

        return (
            <div>
                { /* ----- Intro and video ----- */ }
                <Well>
                    <h3><Wrappy>My proudest achievement</Wrappy></h3><br/>
                    The achievement I'm most proud of is building <a href='https://www.assetstore.unity3d.com/en/#!/content/3796' target='_blank'>eDriven.Gui</a>, GUI framework for <a href='https://unity3d.com/' target='_blank'>Unity3d game engine</a>.<br/><br/>
                    Using eDriven.Gui, users are able to build a wide range of apps, from games to business applications.<br/><br/>
                    {video}
                    <br/><br/>
                    Unity3d game engine programming is done in C# (Mono) and it's essentially game objects scripting.<br/>
                    Most of the existing GUI frameworks had taken a kind of naive approach, treating GUI elements as any other game objects.<br/>
                    However, in order to build a usable GUI system, there has to be a level of abstraction (users should do the high-level programming).<br/>
                    Having this in mind, eDriven.Gui become a pretty different system than everything available in the Asset store by the time.<br/><br/>
                    It had features unseen at the time, including:
                    <ul>
                        <li>Built on top of <a href='https://github.com/dkozar/edriven' target='_blank'>eDriven.Core</a></li>
                        <li>Retained mode GUI</li>
                        <li>Display list (composite pattern)</li>
                        <li>Component lifecycle</li>
                        <li>Invalidation-validation mechanism</li>
                        <li>Implements OOP concepts</li>
                        <li>Event-driven (DOM Level 3 events)</li>
                        <li>Event bubbling</li>
                        <li>Signals and slots</li>
                        <li>Component styling and skinning</li>
                        <li>Layout engine</li>
                        <li>Plugin architecture</li>
                        <li>Internal tweening engine</li>
                        <li>Dialogs and alerts</li>
                        <li>Firebug-like inspector</li>
                        <li>Cursor management</li>
                        <li>Focus management</li>
                        <li>Tab management</li>
                        <li>Tooltips</li>
                        <li>Components as C# classes (<a href='http://edriven.dankokozar.com/api/2-0/' target='_blank'>API</a>)</li>
                        <li>DLL component distribution</li>
                    </ul>
                    I <a href='https://github.com/dkozar/edriven-gui' target='_blank'>open sourced</a> the framework so Unity users can make good use of it.<br/>
                    I believe that my work on eDriven and eDriven.Gui clearly demonstrated that a game engine could also be capable of running business applications.<br/>
                    I also think that it gave waypoints to Unity developers (and GUI developers in general), mainly related to programming Unity the asynchronous way.<br/><br/>
                    eDriven.Gui allowed me to dive deeper into GUI frameworks more than any other project I've been working on.<br/>
                    The knowledge I have acquired by building this system (GUI internals, design patterns etc.) I use on daily basis.<br/>
                    Although I'm not currently working with Unity game engine, this knowledge is applicable to HTML/CSS/Javascript (and other platforms).
                </Well>
            </div>
        );
    }
}
