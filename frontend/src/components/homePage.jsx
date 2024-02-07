/**
 * Homepage for the website
 * Goals: clean, clear page that displays skills and best works
 *  - Find a way to display skills that isn't "too much" (maybe a long line with tiny text thats for decoration? )
 *  - carousel with best projects
 *  - mini project cards, links to big project page
 */

import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"
import Project from '../models/project'
import {MiniCard} from './miniCard'
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
        <p>Hi my name is Rebecca Kuhlman and I'm a computer science student and jack-of-a-lot-of-trades!<br />
I'm always working on 10 projects at a time ;-; but I do get them done!<br />
I code, crochet, CAD, draw, design, woodwork, bake, I just love making things!<br />
While I have a lot of stuff I want to do I do have a clear goal that I want to get too…<br />
My dream job is to do AI for medical devices! (If I wasn't doing engineering, I'd probably want to be a neuroscientist) <br />
Only the best of the best can do something that important and awesome… but I'm doing my best to prepare for the challenge!  Making something to save lives is worth the hardship it might take to get there!
<br />Stay safe out there y'all!<br />

P.S. pardon the dust of this website ^-^ I'm experimenting with different styles and components from bootstrap and MUI!
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