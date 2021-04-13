import React, { useState, useContext, useEffect, useLayoutEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import HomeContext from './HomeContext.js';
import './Home.css';

const Home = props => {

  const { storyItems, comments, getItemsApi } = useContext(HomeContext);
  useEffect(() => {
    getItemsApi();  
  }, []);

  return (
    <div className="home">
      <div>Stories</div>
      {
        storyItems.map((item)=>{
          return (
            <div key={item.id}>
              <div>{item.title}</div>
            </div>
          )
        })
      }
      <div>Comments</div>
      {
        comments.map((item)=>{
          return (
            <div key={item.id}>
              <div>{item.title}</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default withRouter(Home);