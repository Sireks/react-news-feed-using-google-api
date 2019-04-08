import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        const {
            url,
            title,
            description,
            urlToImage,
            source,
            publishedAt
        } = this.props.newsItemData;

        const svgTemplate = () => {
            return (
                <svg viewBox="0 0 512 512">
                    <path d="M204.2 62.2c14.14-20.48 29.33-41.62 50.96-54.73 21.32 12.79 36.36 33.55 50.3 53.66 32.85 49.75 52.94 109.52 48.88 169.58 10.62 8.9 21.54 17.44 32 26.52 15 13.8 22.02 35.32 18.4 55.33-5.03 25.27-9.87 50.6-15.2 75.8-2.97 12.98-20.51 18.91-30.83 10.63-17.12-14.3-33.81-29.1-50.93-43.42-12.95 12.46-30.15 20.77-48.21 21.78-20.8 1.46-41.38-7.16-56.45-21.25-12.28 9.4-23.67 20.69-35.66 30.76-5.8 4.66-10.62 10.78-17.49 13.96-10.64 4.57-24.34-2.24-26.74-13.68-5.48-24.64-11.2-49.24-16.52-73.92-4.33-20.88 3.33-43.61 19.41-57.6 9.32-7.83 18.76-15.5 28.25-23.1 2.64-1.4 1.31-4.6 1.46-6.96C153 167.62 172.8 110.33 204.2 62.2zm16.8 76.33c-12.43 15.99-10.93 40.76 3.48 55.05 15.26 16.8 44.15 17.42 60.1 1.29 12.33-11.26 16.5-30.15 10.61-45.67-5.38-14.97-19.8-26.2-35.67-27.6-14.65-1.68-29.81 5.06-38.52 16.93z"/>
                    <path d="M198.26 407.82c-.21-7.27 8.83-12.26 14.95-8.42 25.87 13.32 58.02 13.32 83.9 0 5.93-3.65 14.73.73 14.95 7.8.08 15.43.1 30.88.02 46.32.12 7.53-9.83 12.33-15.68 7.62-4.45-3.92-8.47-8.34-12.75-12.46-6.78 13.2-13.16 26.6-20 39.77-3.28 6.28-13.53 6.32-16.87.1-6.87-13.19-13.22-26.67-20.12-39.85-4.23 4.16-8.25 8.55-12.7 12.47-5.82 4.73-15.75-.16-15.67-7.65-.13-15.23-.05-30.46-.03-45.7z"/>
                    <circle cx="254.83" cy="164.51" r="20.81"/>
                </svg>
            )
        }

        return (
            <a className="news-item" href={url} data-published={publishedAt}>
                <figure className="news-item__image">
                    { (urlToImage) ? (
                        <img src={urlToImage} alt={title} />
                    ) : (
                        svgTemplate()
                    )}
                    
                </figure>

                <div className="news-item__content">
                    <h2 className="news-item__title">{title}</h2>
                    <p className="news-item__desc">{(description.length > 100) ? description.substring(0, 100) + '...': description}</p>

                    { (source && source.name) ? (
                        <div className="news-item__info">
                            <span className="news-item__owner">{source.name}</span>
                        </div>
                    ) : '' }
                </div>
            </a>
        )
    }
}