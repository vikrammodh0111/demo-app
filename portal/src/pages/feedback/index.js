import React, { useState } from 'react';
import axios from 'axios';

import Config from '../../config';

import style from './feedback.module.css';

const FeedbackPage = () => {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleFeedback = async () => {
    try {
      setSending(true);
      await axios.post(`${Config.SERVER_URL}/api/feedback`, { feedback });
      setFeedback('');
      alert('Your feedback added');
    } catch (err) {
      alert('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.headerTitle}>Feedback App</p>
      </div>
      <div className={style.body}>
        <textarea placeholder="Enter your feedback here..." rows={10} className={style.inputContainer} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        <button className={style.submitButton} onClick={handleFeedback}>{sending ? 'Submiting...' : 'Submit'}</button>
      </div>
    </div>
  )
}

export default FeedbackPage;