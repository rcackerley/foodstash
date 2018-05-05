import React, { Component } from 'react';
import AddRecipeForm from './AddRecipeForm';
import Header from './Header';
import PrimaryNav from './PrimaryNav';
import { Link } from 'react-router-dom';
import recipeIcon from '../recipe-icon.svg';
import addIcon from '../add-icon.svg';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index';
import { getUserData } from '../ajax/index';

class AccountScreen extends Component {

  async componentDidMount() {
    let token = localStorage.getItem('token');
    let parsedToken = JSON.parse(token);
    console.log('its a token');
    console.log(parsedToken.token);
    updateUser(this.props.dispatch, parsedToken.token);
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.token && (this.props.token !== prevProps.token)) {
    }
  }

  render() {
    let { user } = this.props;
    let userData = {
      firstname: (user && user.firstname)? user.firstname : ' ',
      lastname: (user && user.lastname) ? user.lastname : ' ',

    };

    console.log('h1');
    console.log(user);
    let {token } = this.props;
    console.log(token);
    return (
      <div className="flex-app">
        <div>
          <Header />
        </div>
        <div className="flex-content">
          <div className="account-hero">
            <img src="https://avatars2.githubusercontent.com/u/19500679?s=460&v=4" />
            <span className="account-name">{userData.firstname}</span>
            <span className="account-rank"> master chef </span>
            <div className="account-details">
              <div>
                <span>Recipes </span>
                <span className="account-num"> 24 </span>
              </div>
              <div>
                <span>CookBooks</span>
                <span className="account-num">5 </span>
              </div>
              <div>
                <span>Followers</span>
                <span className="account-num">2 </span>
              </div>

            </div>
          </div>
          <div className="account-actions">
            <div>
              <img className="cookbook-icon" src={recipeIcon} />
              <span>Create CookBook</span>
            </div>
            <div>
              <img className="add-icon" src={addIcon} />
              <span>Add Recipe</span>
            </div>
          </div>
          <div className="account-links">
            <Link to="/categories"> <span> My Recipes </span> </Link>
            <Link to="/categories"><span> Cookbooks </span> </Link>
            <Link to="/categories"><span> Favorited Recipes </span> </Link>
            <Link to="/categories"><span> Shopping list </span> </Link>
            <Link to="/categories"><span> Settings </span> </Link>
            <Link onClick={ () => {localStorage.removeItem('token')} }to="/categories"><span> Logout </span> </Link>
          </div>
        </div>
        <PrimaryNav />
      </div>
    );
  }
}

// let mapDispatchToProps = dispatch => ({ updateUser: user => dispatch(updateUser(user)) })
// let mapDispatchToProps = dispatch => ({
//   updateUser: token => updateUser(token, dispatch)
// })


let mapStateToProps = (state, props) => ({
    token: state.token,
    user: state.user
});

let AccountScreenState = connect(
  mapStateToProps,
  // mapDispatchToProps
)(AccountScreen);

export default AccountScreenState;





  // let { token } = state;
  // console.log(token)
  // let { updateUser } = this.props;
  // console.log(this.props);
  // return { user: async () => { 
  //   let { updateUser } = this.props;
  //   let userData = await getUserData(token);
  //   updateUser(userData); 
  // }};