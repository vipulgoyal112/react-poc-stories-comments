import React, { useContext, useEffect, useLayoutEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import HomeContext from './HomeContext.js';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = props => {

  const { storyItems, comments, getItemsApi } = useContext(HomeContext);
  useEffect(() => {
    getItemsApi();  
  }, []);

  return (
    <div className="home">
      <h1 className="header">Top 10 Stories</h1>
      <ul>
        {
        storyItems.map((item, index)=>{
          if (index < 10) {
            return (
              <li key={index}>{item.title}</li>
            )
          }
        })
      }
      </ul>
      <h1 className="header">Top 20 Comments</h1>
      <ul>
      {
        comments.map((item, index)=>{
          if (index < 20) {
          return (
            <li key={index}>{item.title}</li>
          )
        }
        })
      }
      </ul>
    </div>
  );
}

export default withRouter(Home);