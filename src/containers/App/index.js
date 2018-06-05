// @flow
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import i18n from '../../utils/i18n'

import { Header } from './components';
import HomePage from '../HomePage';
import ProfilePage from '../ProfilePage';
import NotFoundPage from '../NotFoundPage';

type Props = {
    language: string
}

export class App extends Component<Props> {
    componentWillReceiveProps(nextProps: Props) {
        const { language } = nextProps;
        if (this.props.language !== language) {
            i18n.changeLanguage(language, err => {
                if (err)
                    return console.error('something went wrong loading', err);

                this.forceUpdate();
            });
        }
    }

    render() {
        return (
            <div>
                <Helmet
                    titleTemplate="%s - React Starter HL"
                    defaultTitle="React Starter HL"
                    >
                    <meta name="description" content="React Starter Kit" />
                </Helmet>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    language: state.language.value
});

export default connect(
    mapStateToProps,
    {}
)(App);
