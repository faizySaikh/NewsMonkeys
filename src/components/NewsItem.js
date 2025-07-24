import React, { Component } from 'react';

export class NewsItem extends Component {
  render(){
    let { title, description, imageUrl, newsUrl, author, date, source} =this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger" style={{ right: '0px'}}>
            {source}
          </span>
          <img className="card-img-top" src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/324a/live/b258df00-61bc-11f0-9d15-ebc6d68bf168.png" : imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;