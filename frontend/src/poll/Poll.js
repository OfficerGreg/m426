import React, { Component } from 'react';
import './Poll.css';
import { Alert, Avatar, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { getAvatarColor } from '../util/Colors';
import { formatDateTime } from '../util/Helpers';

import { Radio, Button, notification } from 'antd';
const RadioGroup = Radio.Group;

class Poll extends Component {
    calculatePercentage = (choice) => {
        if(this.props.poll.totalVotes === 0) {
            return 0;
        }
        return (choice.voteCount*100)/(this.props.poll.totalVotes);
    };

    isSelected = (choice) => {
        return this.props.poll.selectedChoice === choice.id;
    }

    getWinningChoice = () => {
        return this.props.poll.choices.reduce((prevChoice, currentChoice) => 
            currentChoice.voteCount > prevChoice.voteCount ? currentChoice : prevChoice, 
            {voteCount: -Infinity}
        );
    }

    getTimeRemaining = (poll) => {
        const expirationTime = new Date(poll.expirationDateTime).getTime();
        const currentTime = new Date().getTime();
    
        var difference_ms = expirationTime - currentTime;
        var seconds = Math.floor( (difference_ms/1000) % 60 );
        var minutes = Math.floor( (difference_ms/1000/60) % 60 );
        var hours = Math.floor( (difference_ms/(1000*60*60)) % 24 );
        var days = Math.floor( difference_ms/(1000*60*60*24) );
    
        let timeRemaining;
    
        
        
        return timeRemaining;
    }

    render() {
        const pollChoices = [];
        if(this.props.poll.selectedChoice || this.props.poll.expired) {
            const winningChoice = this.props.poll.expired ? this.getWinningChoice() : null;
            
            this.props.poll.choices.forEach(choice => {
                pollChoices.push(<CompletedOrVotedPollChoice 
                    key={choice.id} 
                    choice={choice}
                    isWinner={winningChoice && choice.id === winningChoice.id}
                    isSelected={this.isSelected(choice)}
                    percentVote={this.calculatePercentage(choice)} 
                />);
            });                
        } else {
            this.props.poll.choices.forEach(choice => {
                
                pollChoices.push( choice.text + "\b\n")
            })    
        }        
        return (
            <div className="poll-content">
                <div className="poll-header">
                    <div className="poll-creator-info">
                        <Link className="creator-link" to={`/users/${this.props.poll.createdBy.username}`}>
                            <Avatar className="poll-creator-avatar" 
                                style={{ backgroundColor: getAvatarColor(this.props.poll.createdBy.name)}} >
                                {this.props.poll.createdBy.name[0].toUpperCase()}
                            </Avatar>
                            <span className="poll-creator-name">
                                {this.props.poll.createdBy.name}
                            </span>
                            <span className="poll-creator-username">
                                @{this.props.poll.createdBy.username}
                            </span>
                            <span className="poll-creation-date">
                                {formatDateTime(this.props.poll.creationDateTime)}
                            </span>
                        </Link>
                    </div>
                    <div className="poll-question">
                        {this.props.poll.question}
                    </div>
                </div>
                <div className="poll-choices">
                    <RadioGroup 
                        className="poll-choice-radio-group" 
                        onChange={this.props.handleVoteChange} 
                        value={this.props.currentVote}>
                        { pollChoices }
                    </RadioGroup>
                </div>
                <div className="poll-footer">
                    { 
                        !(this.props.poll.selectedChoice || this.props.poll.expired) ?
                        (<Button className="vote-button" onClick={contactMe}>Contact</Button>) : null 
                    }
                </div>
            </div>
        );
    }
}
function contactMe() {
    notification.success({
        message: 'test',
        description: "Email successfully copied!",
    });
    
  }

function CompletedOrVotedPollChoice(props) {
    return (
        <div className="cv-poll-choice">
            <span className="cv-poll-choice-details">
                <span className="cv-choice-percentage">
                    Member:
                </span>            
                <span className="cv-choice-text">
                    {props.choice.text}
                </span>
                {
                    props.isSelected ? (
                    <Icon
                        className="selected-choice-icon"
                        type="check-circle-o"
                    /> ): null
                }    
            </span>
        </div>
    );
}


export default Poll;