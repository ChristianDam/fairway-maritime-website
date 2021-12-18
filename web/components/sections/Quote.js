import React from "react";
import PropTypes from "prop-types";
import SimpleBlockContent from "../SimpleBlockContent";
import styles from './Quote.module.css';

function QuoteSection(props) {
  const { quote, person } = props;

  return (
    <div className={}>
      <section className={}>
        <h2 className={styles.quote}>{quote}</h2>
        {text && <SimpleBlockContent blocks={person} />}
      </section>
    </div>
  );
}

QuoteSection.propTypes = {
  quote: PropTypes.string,
  person: PropTypes.string,
};

export default QuoteSection;
