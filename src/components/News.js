import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    useEffect(() => {
        // updateNews();
        document.title = `${(props.category)} - NewsEveryday`;
        fetchMoreData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    const fetchMoreData = async () => {   
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false);
      };
        return (
            <>
                <h1 className="text-center" style={{ margin: '55px 0px' }}>NewsEveryday - Top {(props.category)} Headlines</h1>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={loading && <Spinner/>}
                > 
                    <div className="container my-3">
                         
                    <div className="row">
                        {articles.map((element,index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element.title === null? element.title: element.title.slice(0, 40)} description={element.description === null? element.description: element.description.slice(0, 80)} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
