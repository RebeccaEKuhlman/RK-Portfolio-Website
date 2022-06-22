import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"
import Project from '../models/project'
import {MiniCard} from './miniCard'

export const HomePage = () => { 
    //var a = Project("tester", "../../public/logo192", "4/20/6969", "cooooooool", "cool");
    return <div className="m-3 p-10">
        
        {/** button resume
        */}
        <TopNav />
        {/** TODO: Cute artist BQ, highlighted skills*/}
        <div className="m-3 p-10">
        <img src="../bqkLogo" alt="it me" class=""/>
        <p>Skills: </p>
        {/** TODO: Project highlights, lots of links*/}
        {/**<MiniCard/>*/}
        {/** TODO: Fancy Info bottom container*/}
        </div>
        <span className="fixed-bottom"><BottomNav /></span>
        
    </div>
};