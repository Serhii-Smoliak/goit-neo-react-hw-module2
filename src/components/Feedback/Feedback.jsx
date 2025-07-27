import { FEEDBACK_LABELS } from '../../config';
import styles from './Feedback.module.css';

function getPositiveFeedbackClass(percentage) {
  if (percentage >= 75) return styles.positiveExcellent;
  if (percentage >= 60) return styles.positiveGood;
  if (percentage >= 40) return styles.positiveFair;
  if (percentage >= 25) return styles.positivePoor;
  return styles.positiveBad;
}

export function Feedback({
  feedbacks: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  const positiveClass = getPositiveFeedbackClass(positiveFeedback);

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>{FEEDBACK_LABELS.GOOD}:</span>
        <span className={`${styles.statValue} ${styles.goodValue}`}>
          {good}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>{FEEDBACK_LABELS.NEUTRAL}:</span>
        <span className={`${styles.statValue} ${styles.neutralValue}`}>
          {neutral}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>{FEEDBACK_LABELS.BAD}:</span>
        <span className={`${styles.statValue} ${styles.badValue}`}>{bad}</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>{FEEDBACK_LABELS.TOTAL}:</span>
        <span className={`${styles.statValue} ${styles.totalValue}`}>
          {totalFeedback}
        </span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>{FEEDBACK_LABELS.POSITIVE}:</span>
        <span className={`${styles.statValue} ${positiveClass}`}>
          {positiveFeedback}%
        </span>
      </div>
    </div>
  );
}

export default Feedback;
