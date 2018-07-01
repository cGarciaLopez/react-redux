import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { Grid, Icon, Menu, Segment } from 'semantic-ui-react'

class NotFoundPage extends Component {

  render() {
    return (
      <div class="ui warning message">
        <div class="header">The post you are looking for is no longer available!</div>
        <p></p>
      </div>
    )
  }
}

export default NotFoundPage;
