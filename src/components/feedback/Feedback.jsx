import React,{Component} from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'
import Notification from './Notification'

import styles from './feedback.module.scss';

const feedbackOptions = ['good', 'neutral', 'bad'];
class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    // handleLeaveFeedback = () => this.setState({
    //     good: this.state.good + 1,
    // });
    // handleLeaveFeedback = () => this.setState({
    //     neutral: this.state.neutral + 1,
    // });
    // handleLeaveFeedback = () => this.setState({
    //     bad: this.state.bad + 1,
    // });

    // handleLeaveFeedback = (key) => () => this.setState({
    //     [key]: this.state[key] + 1,
    // });


    handleLeaveFeedback = ({ target: { name } }) => this.setState({
        [name]: this.state[name] + 1,
    });

    getTotalFeedbackCount = () => {
        const { good, neutral, bad } = this.state;
        
        return good + neutral + bad;
    };

    getPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.getTotalFeedbackCount();

        return Math.round(good / total * 100);
    }; 

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.getTotalFeedbackCount();
        const percent = this.getPositiveFeedbackPercentage();
    
        // const { children } = this.props;

        return (
            <div className={styles.feedback_block}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={feedbackOptions}
                        onLeaveFeedback={this.handleLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    { total > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={percent}
                        />
                    ) : (
                        <Notification message="No feedback given"/>
                    )}
                </Section>
            </div>
        );
    }
} 



export default Feedback;