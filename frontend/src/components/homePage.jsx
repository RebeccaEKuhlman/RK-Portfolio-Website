/**
 * Homepage for the website
 * Goals: clean, clear page that displays skills and best works
 *  - Find a way to display skills that isn't "too much" (maybe a long line with tiny text thats for decoration? )
 *  - carousel with best projects
 *  - mini project cards, links to big project page
 */

import { ThemeProvider, createTheme, createColor} from "@mui/material/styles";
import Button from '@mui/material/Button';
import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"
import React, { useState } from 'react';
import '../styling.css';
import { purple } from '@mui/material/colors';

//const redColor = red[500];


/*const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    violet: createColor('#b19cd9'),
  },
});
const primary = {
  main: '#b19cd9',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
};*/

const theme = createTheme({
  palette: {
    primary:{
      main: '#b19cd9',
      light: '#c6b2eb',
      dark: '#967bb6',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b1eda4',
      main: '#a0eb8f',
      dark: '#527a49',
      contrastText: '#000',
    },
  },
});


//<button type="submit" className="btn btn-light-purple">Search</button>
export const HomePage = () => {
    const [answer, setAnswer] = useState(''); // message history needs array
    const [query, setQuery] = useState('');


    const handleSearch = (event) => {
        console.log("handleSearch " + query)
        event.preventDefault();
        //console.log(JSON.stringify(query))
    fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({ query: query })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // logging as well for now
      if (data) {
        setAnswer(data);
      } else {
        console.error('Unexpected response structure:', data);
        setAnswer([]);
      }
      console.log(answer)
      setQuery("");
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
        <div className="row">
        <div className="col-sm-4">
            <img src={require('../bqkLogo.png')} alt="A logo for BQ Kuhli, the pen name of Rebecca. Digitally drawn by Rebecca." class="w-60 h-60 rounded img-fluid"/>
          </div>
        <div className="col-sm-6">
        <p>My name is Rebecca Kuhlman, and I am currently pursuing a degree in Computer Science and Data Science.
I am always engaged in a variety of projects, and am always experimenting with different ideas and crafts.
            My skill set spans programming, crocheting, writing and poetry, designing, woodworking, machine maintenance, baking, and much more.
            My passion lies in creation and innovation across a broad spectrum of disciplines.
My aspiration is to specialize in artificial intelligence. In the last couple of years, it has become even more prevalent in our daily lives, furthering my determination to be in the field.
The journey may be demanding, but the impact of creating the future is a worthy goal that drives my professional development.
<br />Stay safe, and remember to clear your cookies.<br />

P.S. pardon the dust of this website - I'm experimenting with different styles and components from bootstrap and MUI, as well as gpt integration.
</p>
          </div>
          </div>
    <div className="m-3 p-10">
        <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about Rebecca..."
        className="form-control"
      />
    <br />
    <ThemeProvider theme={theme}>
    <Button type="submit"  className="btn" variant="contained">Search</Button>
    </ThemeProvider>
    </form>
    </div>
            <div>
        {answer.length > 0 ? (
          <div>
            <h3>Assistant:</h3>
              <p>{answer}</p>
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