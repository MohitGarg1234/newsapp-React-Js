// FUNCTION BASED COMPONENT

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
    
    // const capitalizeFirstLetter = (string) => {
        //     return string.charAt(0).toUpperCase() + string.slice(1);
        // } 

        // const updateNews = async ()=> {
            //     props.setProgress(10);
            //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
            //     setLoading(true)
            //     let data = await fetch(url);
            //     props.setProgress(30);
            //     let parsedData = await data.json()
            //     props.setProgress(70);
            //     setArticles(parsedData.articles)
            //     setTotalResults(parsedData.totalResults)
            //     setLoading(false)
    //     props.setProgress(100);
    // }
    
    useEffect(() => {
        // updateNews();
        document.title = `${(props.category)} - NewsEveryday`;
        fetchMoreData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    // const handlePrevClick = async () => {
    //     setPage(page-1)
    //     updateNews();
    // }

    // const handleNextClick = async () => { 
    //     setPage(page+1)
    //     updateNews()
    // }

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
                {/* {loading && <Spinner />} */}
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
                                <NewsItem title={element.title === null? element.title: element.title.slice(0, 40)}description={element.description === null? element.description: element.description.slice(0, 80)} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
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

// import React ,{useEffect,useState} from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// const News=(props)=>{
//   const [articles,setArticles] = useState([])
//   const [loading,setLoading] = useState([true])
//   const [page,setPage] = useState([1])
//   const [totalResults,setTotalResults] = useState([0])
  
//   // document.title = `${this.props.category} - NewsEveryday`;

//   const updateNews = async ()=>{
//     props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     // let url="";
//     setLoading(true);
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     // console.log(parsedData);
//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);
//     props.setProgress(100);
//   }
//   const fetchMoreData = async ()=>{
//     setPage(page+1);
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     // let url="";
//     setLoading(true);
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     setArticles(articles.concat(parsedData.articles));
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);
//   }
//   useEffect(()=>{
//     updateNews();

//   },[])

//   const handleNextClick = async () => {
//     setPage(page+1);
//     await updateNews();
//   };
//   const handlePrevClick = async () => {
//     setPage(page-1);
//     await updateNews();
    
//   };
//     return (
//       <>
//         <h1 className="text-center">NewsEveryday - {props.category} Top Headlines</h1>
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={loading && <Spinner/>}
//         >
//             <div className="container my-3">
//               <div className="row">
//                 {articles.map((element,index) => {
//                   return <div className="col-md-4" key={index}>
//                         <NewsItem title={element.title === null? element.title: element.title.slice(0, 40)}description={element.description === null? element.description: element.description.slice(0, 80)} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//                       </div>
//                   })}
//               </div>
//             </div>
//           </InfiniteScroll>
        
//       </>
//     );
//   }
// News.defaultProps = {
//   country: "in",
//   pageSize: 6,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

// export default News;

// CLASS BASED COMPONENT
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     };
//     document.title = `${this.props.category} - NewsEveryday`;
//   }
//   async updateNews() {
//     this.props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     // let url="";
//     this.setState({
//       loading: true,
//     });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json();
//     this.props.setProgress(70);
//     // console.log(parsedData);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }
//   fetchMoreData = async ()=>{
//     this.setState({page:this.state.page+1})
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//     // let url="";
//     this.setState({
//       loading: true,
//     });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }
//   async componentDidMount() {
//     // let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=a1e9c4dd98e845cb80eaef49b582a46e&page=1&pageSize=20";
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcc2e10acb8448e2bbfa779073d541ae&page=1&pageSize=${this.props.pageSize}`;
//     // // let url="";
//     // this.setState({
//     //   loading: true,
//     // });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // console.log(parsedData);
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false,
//     // });
//     this.updateNews();
//   }
//   handleNextClick = async () => {
//     // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
//     //     // let url="";
//     //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcc2e10acb8448e2bbfa779073d541ae&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//     //     this.setState({
//     //         loading : true
//     //     });
//     //     let data = await fetch(url);
//     //     let parsedData = await data.json();
//     //     this.setState({
//     //         page : this.state.page+1,
//     //         articles:parsedData.articles,
//     //         loading : false
//     //     });
//     // }
//     // this.setState({ page: this.state.page + 1 }, () =>
//     // this.updateNews());
//     await this.setState({
//       page: this.state.page + 1,
//     });
//     await this.updateNews();
//   };
//   handlePrevClick = async () => {
//     // let url="";
//     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcc2e10acb8448e2bbfa779073d541ae&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//     // this.setState({
//     //     loading : true
//     // });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({
//     //     page : this.state.page-1,
//     //     articles:parsedData.articles,
//     //     loading:false
//     // });
//     await this.setState({
//       page: this.state.page - 1,
//     });
//     await this.updateNews();
//     // this.setState({ page: this.state.page - 1 }, () =>
//     // this.updateNews());
//   };
//   render() {
//     return (
//       <>
//         <h1 className="text-center">NewsEveryday - {this.props.category} Top Headlines</h1>
//         {/* {this.state.loading && <Spinner />} */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={this.state.loading && <Spinner/>}
//         >
//             <div className="container my-3">
//               <div className="row">
//                 {this.state.articles.map((element,index) => {
//                   return <div className="col-md-4" key={index}>
//                         <NewsItem title={element.title === null? element.title: element.title.slice(0, 40)}description={element.description === null? element.description: element.description.slice(0, 80)} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//                       </div>
//                   })}
//               </div>
//             </div>
//           </InfiniteScroll>
//         {/* <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             onClick={this.handlePrevClick}
//             className="btn btn-dark mx-2"
//           >
//             {" "}
//             &larr; Previous
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / this.props.pageSize)
//             }
//             type="button"
//             className="btn btn-dark mx-2"
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;{" "}
//           </button> */}
//         {/* </div> */}
//       </>
//     );
//   }
// }

// export default News;



// For search functionality:
// Add in Navbar component,
// 1. constructor(props) {
//     super(props);
//     this.state = {
//       searchInput: ''
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({ searchInput: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSearch(this.state.searchInput);
//   };
// 2. <form className="d-none d-lg-flex" onSubmit={this.handleSubmit}>
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={this.state.searchInput}
//                 onChange={this.handleInputChange}
//               />

// Add in App.js
//  1. constructor() {
//     super();
//     this.state = {
//       searchQuery: ''
//     };
//   }

//   handleSearch = (query) => {
//     this.setState({ searchQuery: query });
//   };
// 2. <Navbar onSearch={this.handleSearch} />

// Add in News.js,
//   async componentDidUpdate(prevProps) {
//         if (prevProps.searchQuery !== this.props.searchQuery) {
//             await this.updateNews();
//         }
//     }

// *Don't forget to add q param in your API