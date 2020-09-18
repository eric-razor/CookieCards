import React, {Component} from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import './styles/App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/authUser'
import {getCookieCards} from './actions/cookieCards'
import Logout from './components/Logout'
import NavBar from './components/NavBar'
import CookieCardListContainer from './containers/CookieCardListContainer'
import PantryContainer from './containers/PantryContainer'
import Login from './components/Login'
import Signup from './components/Signup'
import CookieCard from './components/CookieCard'
import CookieCardEditor from './components/CookieCardEditor'
import CookieCardCreator from './components/CookieCardCreator'

class App extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getCookieCards()
  }

  render() {
      const {loggedIn, cards, user} = this.props

      return (
        <div className="App">

        {loggedIn ? <Logout /> : null}
        {user ? <strong> Welcome {user.name}</strong> : ""}
          <NavBar/>
          <Switch>

            <Route path="/signup" component={Signup}/>

            <Route path="/login" component={Login}/>

            <Route exact path="/pantry" component={PantryContainer} /> 

            <Route exact path="/cookiecards" component={CookieCardListContainer}/>

            <Route exact path="/cookiecards/new" component={CookieCardCreator}/>

            <Route exact path='/cookiecards/:id' render={(props) => {
              const card = cards.find(card => card.id === parseInt(props.match.params.id))
              return <div> { card ? <CookieCard {...props} card={card}/> : "No card here!"} </div>
            }}/>

            <Route exact path='/cookiecards/:id/edit' render={(props) =>{
                const card = cards.find(card => card.id === parseInt(props.match.params.id))
                return <div> <CookieCardEditor card={card} {...props}/></div>
            }}/>

          </Switch>

        </div>
      );
    }
  }

  const mapState = state => {
    return {
      loggedIn: !!state.user,
      user: state.user,
      cards: state.cookieCards
    }
  }

export default connect(mapState, {getCurrentUser,getCookieCards})(App)
