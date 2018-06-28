import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Dropdown, Segment, Grid,  Button } from "semantic-ui-react";

import PostsPreviewContainer from "../post/PostsPreviewContainer";
import { SORT_BY_OPTIONS } from "../post/reducer";

const ViewCategory = (props) => {
  return (
    <div>
      <Segment.Group>
        <Segment>
          <Grid stackable>
            <Grid.Column width={2}>
              {props.name ?
                <Container><b>Category: {props.name}</b> <Image size='mini' src={`/${props.name}.png`} /></Container> :
                <b>All</b>
              }
            </Grid.Column>

            <Grid.Column width={2}>
              <Button
              content="new Post" icon="add" size="small" color="black"
              onClick={()=> props.handleModalVisibility(true)}
              />
            </Grid.Column>

            <Grid.Column width={4} floated="right" textAlign="right">
              <Dropdown
                text="Sort by: "
                options={SORT_BY_OPTIONS}
                onChange={(event, data) => props.handleSortBy(data.value)}
              />
            </Grid.Column>
          </Grid>
        </Segment>

      </Segment.Group>

      <Segment color="black">
        <PostsPreviewContainer posts={props.posts} />
        {props.posts.length === 0 && <h3>There are no posts in this category yet. Start by creating your own!</h3>}
      </Segment>
    </div>
  );
};

ViewCategory.propTypes = {
  name: PropTypes.string,
  posts: PropTypes.array.isRequired,
  sortedBy: PropTypes.object.isRequired,
  handleSortBy: PropTypes.func.isRequired,
  handleModalVisibility: PropTypes.func.isRequired
};

export default ViewCategory;
