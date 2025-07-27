import { FEEDBACK_TYPES, FEEDBACK_LABELS } from '../../config';
import styles from './Options.module.css';

export function Options({ totalFeedback, updateFeedback, resetFeedback }) {
  return (
    <div className={styles.buttonGroup}>
      <button
        className={`${styles.button} ${styles.goodButton}`}
        onClick={() => updateFeedback(FEEDBACK_TYPES.GOOD)}
      >
        {FEEDBACK_LABELS.GOOD}
      </button>
      <button
        className={`${styles.button} ${styles.neutralButton}`}
        onClick={() => updateFeedback(FEEDBACK_TYPES.NEUTRAL)}
      >
        {FEEDBACK_LABELS.NEUTRAL}
      </button>
      <button
        className={`${styles.button} ${styles.badButton}`}
        onClick={() => updateFeedback(FEEDBACK_TYPES.BAD)}
      >
        {FEEDBACK_LABELS.BAD}
      </button>
      {totalFeedback > 0 && (
        <button
          className={`${styles.button} ${styles.resetButton}`}
          onClick={resetFeedback}
        >
          {FEEDBACK_LABELS.RESET}
        </button>
      )}
    </div>
  );
}

export default Options;
