import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Card, Image, Item, Button, Label, Icon, Header } from "semantic-ui-react";
import Timestamp from 'react-timestamp';

import ScoreVote from "../shared/ScoreVote";
import PostCommentsCount from "./PostCommentsCount";

const PostPreview = (props) => {
  const createdAt = new Date(props.timestamp);

  const title = <Header>{props.title}</Header>;

  return (
    <Item>
      <ScoreVote score={props.score} handleVote={props.handleVote} id={props.id} />

      <Card.Group>
      <Card color='black' fluid={true}>
          <Card.Content>
          <Image  size='mini' src={`/${props.category}-ico.png`} />
            <Card.Header>
            {props.path ?
              <Item.Header as={Link} to={`/${props.path}`}>{title}</Item.Header> :
              <Item.Header>{title}</Item.Header>
            }
            </Card.Header>
            <Card.Description>
            {props.body}
            </Card.Description>
            <Card.Meta>
            Author: {props.author}
            </Card.Meta>
            <Card.Meta>
            <Timestamp time={createdAt} format="full" style={{ margin: '0' }} />
            </Card.Meta>
            {!props.showBody &&
              <PostCommentsCount
                postId={props.id}
                count={props.count}
                path={`/${props.path}`}
              />
            }

            <Button.Group floated="right" compact size="mini">
              <Button
                content="Edit" icon="edit" basic
                onClick={() => props.handleStartEditing(props.id)} />
              <Button
                content="Delete" icon="trash" basic
                onClick={() => props.handleDelete(props.id, props.category)} />
            </Button.Group>
          </Card.Content>
          </Card>
      </Card.Group>


    </Item>

  );
};

PostPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  showBody: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  handleVote: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleStartEditing: PropTypes.func.isRequired,
  path: PropTypes.string
};

PostPreview.defaultProps = {
  showBody: false
};

export default PostPreview;
