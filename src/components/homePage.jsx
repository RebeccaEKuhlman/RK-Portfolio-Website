import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"

export const HomePage = () => { 
    
    return <div>
        
        {/** TODO: Contact Info top in buttons: github, resume
         * https://www.linkedin.com/in/rebecca-kuhlman-8bab731a0/
         * import LinkedInIcon from '@mui/icons-material/LinkedIn';
         * https://github.com/RebeccaEKuhlman
         * DIG website?
        */}
        <TopNav />
        {/** TODO: Cute artist BQ, highlighted skills*/}
        <img src="" alt=""/>
        <p>Skills: </p>
        {/** TODO: Project highlights, lots of links*/}
        {/** TODO: Fancy Info bottom container*/}
        <BottomNav value={0} />
    </div>
};