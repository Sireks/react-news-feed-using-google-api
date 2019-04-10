import React, { Component, Fragment } from 'react';

import NewsList from './components/newsList/NewsList';
import Preloader from './components/preloader/Preloader'

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            newsItems: []
        }
    }

    componentWillMount() {
        this.fetchGoogleNews(10);
    }

    render() {
        const { newsItems } = this.state;

        return (
            <Fragment>
                { (newsItems.length > 0) ? (
                    <section className="news l-container">
                        <div className="l-content u-center">
                            <NewsList newsItems={ newsItems }/>

                            {
                                (newsItems.length < 30) ?
                                    <div className="button" onClick={ () => this.fetchGoogleNews(2) }>Load more</div> :
                                    ''
                            }
                        </div>
                    </section>
                ) : (
                    <Preloader />
                )}
            </Fragment>
        )
    }

    async fetchGoogleNews(pageSize) {
        const { newsItems } = this.state;

        const apiKey = 'beb15859411c43359276f35d0e3e56a3';
        const url = 'https://newsapi.org/v2/top-headlines?country=ua' +
            `&pageSize=${pageSize}` +
            `${(newsItems.length > 0) ? '&page=' + (Math.ceil(newsItems.length / pageSize) + 1) : ''}` +
            `&apiKey=${apiKey}`;

        const response = await fetch(new Request(url));
        const responseData = await response.json();

        this.setState({
            newsItems: [...newsItems, ...responseData.articles]
        })
    }
}