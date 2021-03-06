"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;


var routes = (
    <Route name="app" path="/" handler={require('./components/app') }>
        <DefaultRoute handler={require('./components/HomePage') } />
        <Route name="authors" handler={require('./components/authors/AuthorsPage') }/>
        <Route name="addAuthor" path="author" handler={require('./components/authors/ManageAuthorPage') }/>
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/ManageAuthorPage') }/>
        <Route name="about" handler={require('./components/about/AboutPage') }/>
        <NotFoundRoute handler={require('./components/NotFoundPage') }/>
        <Redirect from="about-us" to="about"/>
        <Redirect from="awthurs" to="authors"/>
        <Redirect from="about/*" to="about"/>
    </Route>
);

module.exports = routes;