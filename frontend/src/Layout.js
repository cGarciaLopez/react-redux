import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { retrieveAll } from "./category/reducer";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

import { Button, Container, Grid, Header, Icon, Menu, Sidebar, Segment } from 'semantic-ui-react'
import ReduxToastr from 'react-redux-toastr'

class Layout extends Component {
  componentDidMount() {
    this.props.retrieveAll();
  }

  renderCategoryIcon(category) {
    return (
        <Menu.Item as={NavLink} to={`/${category.path}`} name={category.path} key={category.path}>
          <Icon name='music' />
          {category.name}
        </Menu.Item>
    )
  }

  render() {
    return (
      <div className="App">

        <Grid columns={4}>
          <Grid.Column>
            <Menu pointing>
              <Menu.Item as={NavLink} to='/' name='All' exact>
                <Icon name='world' />
                All
              </Menu.Item>
            {this.props.categories.map(category => (
              this.renderCategoryIcon(category)
            ))}
            </Menu>
          </Grid.Column>
      </Grid>


        <Segment className="App-Content" basic>
          {this.props.children}
        </Segment>

        <ReduxToastr/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ retrieveAll }, dispatch)
};

const mapStateToProps = (state) => ({
  categories: state.categories
});

// Layout.propTypes = {
//   handleModalVisibility: PropTypes.func.isRequired
// };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
