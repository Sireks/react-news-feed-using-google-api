import React, { Component, Fragment } from 'react';

import NewsList from './components/newsList/NewsList';

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
                            
                            <div className="button" onClick={ () => this.fetchGoogleNews(2) }>Load more</div>
                        </div>
                    </section>
                ) : (
                    <div className="loader">Loading...</div>
                )}
            </Fragment>
        )
    }

    fetchGoogleNews(pageSize) {
        const { newsItems } = this.state;

        const apiKey = 'beb15859411c43359276f35d0e3e56a3';
        const url = 'https://newsapi.org/v2/everything?' +
            'q=frontend' +
            `&pageSize=${pageSize}` +
            `${(newsItems.length > 0) ? '&page=' + (Math.ceil(newsItems.length / pageSize) + 1) : ''}` +
            '&sortBy=popularity' +
            `&apiKey=${apiKey}`

        fetch(new Request(url))
            .then(response => response.json())
            .then(responseData => {
                const {newsItems} = this.state;
                const {articles} = responseData;

                this.setState({
                    newsItems: [...newsItems, ...articles]
                })
            });
    }
}