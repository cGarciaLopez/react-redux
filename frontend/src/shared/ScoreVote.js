import React from 'react';
import PropTypes from 'prop-types';
import { Statistic, Button } from "semantic-ui-react";

const ScoreVote = (props) => {
  return (
    <div style={{ marginRight: '1em' }}>
      <Button
        attached="left" icon="plus" basic
        onClick={() => props.handleVote(props.id, 'upVote')}
      />
      <Statistic
        value={props.score}
        style={{ margin: '0.5em 0', minWidth: '30px', fontSize: '0.5em' }}
        size="mini"
         />
      <Button
        attached="right" icon="minus" basic
        onClick={() => props.handleVote(props.id, 'downVote')}
      />
    </div>
  );
};

ScoreVote.propTypes = {
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handleVote: PropTypes.func.isRequired
};

export default ScoreVote;
