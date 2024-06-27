// FUNCTION BASED COMPONENT
import React from 'react'

const NewsItem =(props)=> {

  const routeChange = () =>{ 
    window.open(newsUrl, '_blank');
  }
    let {title,description,ImageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-1'>
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
            <span className='badge rounded-pill bg-danger' style={{left:'70%',zIndex:'1'}}>{source}</span>
          </div>
            <img onClick={routeChange} src={ImageUrl===null?"https://img.freepik.com/premium-photo/top-view-abstract-paper-texture-background_225709-2718.jpg?w=2000":ImageUrl} className="card-img-top" alt=""/>
            <div className="card-body" >
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a onClick={routeChange} rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }

export default NewsItem


