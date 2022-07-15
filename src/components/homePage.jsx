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

export const HomePage = () => { 
    return <div className="m-3 p-10">
        
        {/** button resume
        */}
        <TopNav />
        <div className="m-3 p-10">
        <img  src={require('../bqkLogo.png')} alt="it me" class="w-25 h-30 rounded"/>
        {/** <p>Skills: </p>*/} 
        {/** TODO: Project highlights, lots of links*/}
        {/**<MiniCard/>*/}
        </div>
        <span className="fixed-bottom"><BottomNav /></span>
        
    </div>
};