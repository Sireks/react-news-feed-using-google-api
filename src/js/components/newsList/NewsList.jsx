import React, { Component } from 'react';

import NewsItem from '../newsItem/NewsItem';

export default class NewsList extends Component {
    render() {
        return (
            <div className="news-items">
                { this.renderNewsItems() }
            </div>
        )
    }

    renderNewsItems() {
        const { newsItems } = this.props;

        if (newsItems.length > 0) {
            return newsItems.map((newsItemData, index) => < NewsItem key={index} newsItemData = {newsItemData} />);
        }
    }
}