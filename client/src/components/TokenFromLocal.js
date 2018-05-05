import React from 'react';
import {connect} from 'react-redux';
import {setToken} from '../actions/index';
import {getTokenFromLocalStorage} from '../lib/index';
import Router from '../Router';

class TokenFromLocal extends React.Component {
  componentDidMount() {
    let {setToken} = this.props;
    let token = getTokenFromLocalStorage();
    setToken(token);
  }

  render() {
    return (
      <Router />
    )
  }
}

let mapDispatchToProps = dispatch => ({setToken: (token) => dispatch(setToken(token)) });
let mapStateToProps = state => state;
let TokenFromLocalContainer = connect(mapStateToProps, mapDispatchToProps)(TokenFromLocal)
export default TokenFromLocalContainer;
