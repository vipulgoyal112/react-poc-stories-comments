import React, { useState, useContext, useEffect, useLayoutEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import HomeContext from './HomeContext.js';
import './Home.css';

const Home = props => {

  const { storyItems, commentItems, getItemsApi } = useContext(HomeContext);
  useEffect(() => {
    getItemsApi();  
  }, []);

  return (
    <div className="home">
      <div>Stories</div>
      {console.log('stories : ', storyItems)}
      {storyItems.map((item)=>{
        <div>{item.title}</div>
      })}
      {storyItems.map((item, index) => {
          return (
              <Fragment key={index}>
                  <div>{item.title}</div>
              </Fragment>
          )
      })}
    </div>
  );
}

export default withRouter(Home);