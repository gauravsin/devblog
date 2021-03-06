import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let blogData = this.props.blogData;
    return (
      <React.Fragment>
      <header id="top">
        <div className="row">
          <div className="header-content twelve columns">
            <h1 id="logo-text"><a href="index.html" title>Dev Blog.</a></h1>
            <p id="intro"> {blogData.name} - {blogData.role}</p>
          </div>			
        </div>
        <nav id="nav-wrap"> 
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Menu</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide Menu</a>
          <div className="row">    		            
            <ul id="nav" className="nav">
              <li className="current"><a href="index.html">Home</a></li>
              <li className="has-children"><a href="#">Dropdown</a>
                <ul>
                  <li><a href="#">Submenu 01</a></li>
                  <li><a href="#">Submenu 02</a></li>
                  <li><a href="#">Submenu 03</a></li>
                </ul>
              </li>
              <li><a href="demo.html">Demo</a></li>	
              <li><a href="archives.html">Archives</a></li>
              <li className="has-children"><a href="single.html">Blog</a>
                <ul>
                  <li><a href="blog.html">Blog Entries</a></li>
                  <li><a href="single.html">Single Blog</a></li>	                     
                </ul>
              </li>		      	
              <li><a href="page.html">Page</a></li>
            </ul> {/* end #nav */}			   	 
          </div> 
        </nav> {/* end #nav-wrap */} 	     
      </header> {/* Header End */}
      </React.Fragment>
    );
  }
}