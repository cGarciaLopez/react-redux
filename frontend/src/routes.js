import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from "react-router-redux";

import Layout from "./Layout";
import ViewCategoryContainer from "./category/ViewCategoryContainer";
import PostPageContainer from "./post/PostPageContainer";
import NotFoundPage from "./NotFoundPage";

class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history} >
        <Layout>
          <Switch>
            <Route exact path='/' component={ViewCategoryContainer} />
            <Route exact path='/:category' component={ViewCategoryContainer} />
            <Route exact path='/:category/:postId' component={PostPageContainer} />
            <Route  component={NotFoundPage} />
          </Switch>
        </Layout>
      </ConnectedRouter>
    );
  }
}

export default Routes;
