import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import { FaSearch } from "react-icons/fa";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      search: "india",
      totalResult:16,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }
  async handleChange(e) {
    console.log(e.target.value);
    this.setState({
      search: e.target.value,
    });
  }

  async getData() {
    let apiKey = "316379ccdd094a049132f4ef28ca9f20";
    let url = `
    https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=${apiKey}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.getData();
  }
  handelpreviousclick = async () => {
    let apiKey = "316379ccdd094a049132f4ef28ca9f20";
    let url = `
      
    https://newsapi.org/v2/everything?q=${
      this.state.search
    }&apiKey=${apiKey}&page=${this.state.page - 1}&pagesize=${
      this.props.pagesize
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    //  console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
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
        
      https://newsapi.org/v2/everything?q=${
        this.state.search
      }&apiKey=${apiKey}&page=${this.state.page + 1}&pagesize=${
        this.props.pagesize
      }`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      //   console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        totalResult: parsedData.totalResults,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div className="container my-3 h-100">
        <div className="m-4  text-center">
          <input
            type="text"
            style={{
              minWidth: "35%",
              padding: "8px 6px",
              border: "1px solid",
              borderRadius: "8px",
              backgroundColor:'whitesmoke'
            }}
            name="search"
            placeholder="Enter the Type of News You Want"
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={this.getData}
            style={{
              marginLeft:'8px',
              padding: "8px 16px",
              backgroundColor: "#3b82f6",
              color: "white",
              fontWeight: 600,
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 200ms ease-in-out",
              outline: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#3b82f6")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.backgroundColor = "#1d4ed8")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
          >
            <FaSearch style={{ marginRight: "8px" }} />
            Search
          </button>
        </div>
        <h2 className="text-center">NewsSide--top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row g-6">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center"
                  key={element.url}
                >
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
        <div className="container d-flex justify-content-between" style={{marginTop:"40px"}}>
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handelpreviousclick}
          >
            &larr; Previous
          </button>
          <span>{`${this.state.page} / ${this.state.totalResult -this.state.page}`}</span>
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
