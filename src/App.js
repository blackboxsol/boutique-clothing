import React, {useEffect, lazy, Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyles } from './global.styles';

import HomePage from './pages/homepage/home-page';
// import ShopPage from './pages/shop/shop-page';
import CheckoutPage from './pages/checkout/checkout-page';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {checkUserSession} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const ShopPage = lazy(()=> import('./pages/shop/shop-page'));


const App = ({ checkUserSession, currentUser }) => {

  useEffect( () => {
    checkUserSession();
  },[checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/boutique-clothing" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Suspense fallback={<div>Loading</div>}>
            <Route path="/shop" component={ShopPage} />
          </Suspense>
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to='' />) : (<SignInAndSignUpPage/>)} />
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
