/**
 * Homepage for the website
 * Goals: clean, clear page that displays skills and best works
 *  - Find a way to display skills that isn't "too much" (maybe a long line with tiny text thats for decoration? )
 *  - carousel with best projects
 *  - mini project cards, links to big project page
 */

import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"
//import Project from '../models/project'
//import {MiniCard} from './miniCard'
import {QuestionBox} from './QuestionBox';
import React, { useState } from 'react';

export const HomePage = () => {
    const [answer, setAnswer] = useState([]);


    const handleSearch = (query) => {

    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // logging as well for now
      setAnswer(data.results);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

    return <div className="m-3 p-10">
        
        {/** button resume
        */}
        <TopNav />
        <div className="m-3 p-10">
        <img src={require('../bqkLogo.png')} alt="it me" class="w-25 h-30 rounded"/>
        <p>My name is Rebecca Kuhlman, and I am currently pursuing a degree in Computer Science. I consider myself to be a multifaceted professional with a diverse set of skills.

I am always engaged in a variety projects, always experimenting with different ideas and crafts.
            My skill set spans coding, crocheting, writing, designing, woodworking, baking, and much more.
            My passion lies in creation and innovation across a broad spectrum of disciplines.
My aspiration is to specialize in artificial intelligence. In the last couple of years, it has become even more prevalent in our daily lives, furthering my determination to be in the field.
The journey may be demanding, but the impact of creating the future is a worthy goal that drives my professional development.<br />Stay safe, and remember to clear your cookies<br />

P.S. pardon the dust of this website - I'm experimenting with different styles and components from bootstrap and MUI, as well as gpt integration.
</p>
    <div className="m-3 p-10">
      <QuestionBox onSearch={handleSearch} />
    </div>
            <div>
        {answer.length > 0 ? (
          <div>
            <h2>Search Results:</h2>
            <ul>
              {answer.map((result, index) => (
                <li key={index}>{result}</li> // update later
              ))}
            </ul>
          </div>
        ) : null}
      </div>

<br />
<br />
<br />
        {/** <p>Skills: </p>*/} 
        {/** TODO: Project highlights, lots of links*/}
        {/**<MiniCard/>*/}
        </div>
        <span className="fixed-bottom"><BottomNav /></span>
        
    </div>
};