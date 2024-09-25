import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    //console.log("cdm");
    let apiKey = "316379ccdd094a049132f4ef28ca9f20";
    let url = `
      
https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult,
      loading: false,
    });
  }
  handelpreviousclick = async () => {
    let apiKey = "316379ccdd094a049132f4ef28ca9f20";
    let url = `
      
https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextclick = async () => {
    console.log("click");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResult / this.props.pagesize)
    ) {
    } else {
      let apiKey = "316379ccdd094a049132f4ef28ca9f20";
      let url = `
        
  https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${apiKey}&page=${
        this.state.page + 1
      }&pagesize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    //  console.log("hii");
    return (
      <div className="container my-3 h-100">
        <h2 className="text-center">NewsSide--top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row g-6">
    {!this.state.loading &&
      this.state.articles.map((element) => {
        return (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center" key={element.url}>
            <Newsitem
              title={element.title ? element.title : ""}
              description={element.description ? element.description : ""}
              imageurl={element.urlToImage}
              newsurl={element.url}
            />
          </div>
        );
      })}
  </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handelpreviousclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
