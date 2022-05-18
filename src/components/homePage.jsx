import {IconBreadcrumbs} from "./IconBreadcrumbs"
import {BottomNav} from "./BottomNav"
export const homePage = () => { 
    
    return <div>
        RebeccaKuhlman.com
        {/** TODO: Contact Info top in buttons: github, resume
         * https://www.linkedin.com/in/rebecca-kuhlman-8bab731a0/
         * https://github.com/RebeccaEKuhlman
         * 
        */}
        <IconBreadcrumbs />
        {/** TODO: Cute artist BQ, highlighted skills*/}
        <img src="" />
        <p>Skills: </p>
        {/** TODO: Project highlights, lots of links*/}
        {/** TODO: Fancy Info bottom container*/}
        <BottomNav value={0} />
    </div>
};