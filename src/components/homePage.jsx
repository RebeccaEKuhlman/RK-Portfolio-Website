import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"
import Project from '../models/project'
import {MiniCard} from './miniCard'

export const HomePage = () => { 
    //var a = Project("tester", "../../public/logo192", "4/20/6969", "cooooooool", "cool");
    return <div>
        
        {/** button resume
        */}
        <TopNav />
        {/** TODO: Cute artist BQ, highlighted skills*/}
        <img src="" alt=""/>
        <p>Skills: </p>
        {/** TODO: Project highlights, lots of links*/}
        {/**<MiniCard/>*/}
        {/** TODO: Fancy Info bottom container*/}
        <BottomNav value={0} />
    </div>
};