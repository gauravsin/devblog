import React, { Component } from 'react';
export default class Content extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="content-wrap">
        <div className="row">
          <div id="main" className="eight columns">
            <article className="entry">
              <header className="entry-header">
                <h2 className="entry-title">
                  <a href="single.html" title>Hey, We Love Open Sans!</a>
                </h2> 				 
                <div className="entry-meta">
                  <ul>
                    <li>July 12, 2014</li>
                    <span className="meta-sep">•</span>								
                    <li><a href="#" title rel="category tag">Ghost</a></li>
                    <span className="meta-sep">•</span>
                    <li>John Doe</li>
                  </ul>
                </div> 
              </header> 
              <div className="entry-content">
                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
              </div> 
            </article> {/* end entry */}
            <article className="entry">
              <header className="entry-header">
                <h2 className="entry-title">
                  <a href="single.html" title>We All Love Good Typography.</a>
                </h2> 				 
                <div className="entry-meta">
                  <ul>
                    <li>July 11, 2014</li>
                    <span className="meta-sep">•</span>							
                    <li>
                      <a href="#" title rel="category tag">Wordpress</a>,
                      <a href="#" title rel="category tag">Ghost</a>  
                    </li>
                    <span className="meta-sep">•</span>
                    <li>Jane Doe</li>
                  </ul>
                </div>
              </header> 			
              <div className="entry-content">
                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in.</p>
              </div> 
            </article> {/* end entry */}
            <article className="entry">
              <header className="entry-header">
                <h2 className="entry-title">
                  <a href="single.html" title>White Space Everywhere.</a>
                </h2> 				 
                <div className="entry-meta">
                  <ul>
                    <li>July 10, 2014</li>
                    <span className="meta-sep">•</span>								
                    <li>
                      <a href="#" title rel="category tag">Joomla</a>,
                      <a href="#" title rel="category tag">Drupal</a>  
                    </li>
                    <span className="meta-sep">•</span>
                    <li>Naruto Uzumaki</li>
                  </ul>
                </div> 
              </header> 			
              <div className="entry-content">
                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
              </div> 
            </article> {/* end entry */}  
            <article className="entry">
              <header className="entry-header">
                <h2 className="entry-title">
                  <a href="single.html" title>Simple And Minimalist Designs.</a>
                </h2> 				 
                <div className="entry-meta">
                  <ul>
                    <li>July 09, 2014</li>
                    <span className="meta-sep">•</span>								
                    <li>
                      <a href="#" title rel="category tag">Ghost</a>  
                    </li>
                    <span className="meta-sep">•</span>
                    <li>Naruto Uzumaki</li>
                  </ul>
                </div> 
              </header> 			
              <div className="entry-content">
                <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
              </div> 
            </article> {/* end entry */}  	
          </div> {/* end main */}
          <div id="sidebar" className="four columns">
            <div className="widget widget_search">
              <h3>Search</h3> 
              <form action="#">
                <input type="text" defaultValue="Search here..." onblur="if(this.value == '') { this.value = 'Search here...'; }" onfocus="if (this.value == 'Search here...') { this.value = ''; }" className="text-search" />
                <input type="submit" defaultValue className="submit-search" />
              </form>
            </div>
            <div className="widget widget_categories group">
              <h3>Categories.</h3> 
              <ul>
                <li><a href="#" title>Wordpress</a> (2)</li>
                <li><a href="#" title>Ghost</a> (14)</li>
                <li><a href="#" title>Joomla</a> (5)</li>
                <li><a href="#" title>Drupal</a> (3)</li>
                <li><a href="#" title>Magento</a> (2)</li>
                <li><a href="#" title>Uncategorized</a> (9)</li>						
              </ul>
            </div>
            <div className="widget widget_text group">
              <h3>Widget Text.</h3>
              <p>Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur sint cillum sint consectetur voluptate adipisicing Duis irure magna ut sit amet reprehenderit.</p>
            </div>
            <div className="widget widget_tags">
              <h3>Post Tags.</h3>
              <div className="tagcloud group">
                <a href="#">Corporate</a>
                <a href="#">Onepage</a>
                <a href="#">Agency</a>
                <a href="#">Multipurpose</a>
                <a href="#">Blog</a>
                <a href="#">Landing Page</a>
                <a href="#">Resume</a>
              </div>
            </div>
            <div className="widget widget_popular">
              <h3>Popular Post.</h3>
              <ul className="link-list">
                <li><a href="#">Sint cillum consectetur voluptate.</a></li>
                <li><a href="#">Lorem ipsum Ullamco commodo.</a></li>
                <li><a href="#">Fugiat minim eiusmod do.</a></li>                     
              </ul>
            </div>
          </div> {/* end sidebar */}
        </div> {/* end row */}
      </div> {/* end content-wrap */}
      </React.Fragment>
    );
  }
}