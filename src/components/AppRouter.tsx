import { authService } from '../utils/firebaseFunctions';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Board from '../routes/Board';
import Home from '../routes/Home';
import Post from '../routes/Post';
import SignIn from '../routes/SignIn';
import SignUp from '../routes/SignUp';
import Profile from '../routes/Profile';
import Verification from '../routes/Verification';
<<<<<<< Updated upstream
=======
import EditPost from '../routes/EditPost.js';
import AddPost from '../routes/AddPost.js';
import BoardHome from '../routes/BoardHome';
import AboutUs from '../routes/AboutUs';


type AppRouterProps = {

}
>>>>>>> Stashed changes

type AppRouterState = {
  isLoggedIn: boolean,
}

class AppRouter extends React.Component<{}, AppRouterState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  componentDidMount = () => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isLoggedIn: true
        })
      }
    })
  }

  render = () => {
    return (
      <Router>
        <Switch>
          {this.state.isLoggedIn ? (
            <>
              {console.log('logged in')}
              <Route exact path='/' component={Home} />
              <Route exact path='/boards/:boardTitle' render={(routerProps) => <Board
                boardId={routerProps.match.params.boardTitle} />} />
              <Route exact path='/boards/:boardTitle/:postId' render={(routerProps) => <Post
                boardId={routerProps.match.params.boardTitle}
                postId={routerProps.match.params.postId}
              />} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/verification' component={Verification} />
            </>
          )
            :
            (
              <>
                {console.log('not logged in')}
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
              </>
            )
          }
        </Switch>
      </Router>
    )
  };
};

export default AppRouter;