import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"

export const Blog = () =>{

    return <div>
        {
            //Add front stuff
            //create component to store list items
        }
        <TopNav />
        <ul>
        <li><div class="card w-75 bg-light">
  <div class="card-body">
    <h5 class="card-title">Astro and AI's weaknesses</h5>
    <h6 class="card-subtitle mb-2 text-muted">6/12/2022</h6>
    <p class="card-text">AI is so nice until we relieze how limited it can be. Astro is Amazon's attempt at that all so attrative
    sci-fi relitity of a robot butler. Ah a walking security robot that I can occucastionally use to google if I'm lazy? Personally I 
    thought looking it up myself was faster than attempting to ask Alexa. Astro can play music to but, so can my phone. 
    At 1000$, he's not looking so hot on the pros and cons list. Astro also faces the same privacy concerns that plain Alexa
    deals with video to boot. Astro's face recognizition isn't ideal either, and likely is even worse with people of color. While a seemly
    mild annoyance, astro will have the abilty to call authorities if it suspects a intruder, which opens a very trobling can of worms if Astro is mistaken. 
    A weakness of working with huge corprations is that the leadership department
    doesn't think about deadlines and challenges the same way that designers and developers do, and the team working on astro has 
    some concerns about astro and basic functionailty. Stairs apear to be a challenge for the little guy, which is a major problem
    considering the target demographic for this robot. I wonder if Astro can sustain a fall from a flight of stairs? AI and movement is always a 
    challenge, and it takes time to really adjust for these issues, and lots of testing. But Amazon wants its cute little robot to be
    availble asap, and often it is not the engineers that win this fight. 
    </p>
  </div>
</div></li>
            <li><div class="card w-75 bg-light">
  <div class="card-body">
    <h5 class="card-title">Data > Customer</h5>
    <h6 class="card-subtitle mb-2 text-muted">6/4/2022</h6>
    <p class="card-text">AI is so nice until we relieze how limited it can be. A good AI requires a lot of good data, and companies with the resources to undergo big AI Projects
    tend to be a tad greedy and unethical in that collection of data. Amazon's collection of user data is known, but the true extent is not. The company keeps track of 
    of users search history and purchases, the variety of creepy data collection we're unfoutunatly used to. Amazon however, is the owner of Ring secuirty systems, and the alexa line of 
    products. While the Alexa line has a mute button, more often that not users leave it on to listen to everything... and amazon collects and stores all of those recordings. 
    Ring has video that is always watching too, as its purpose as a security system. It is really ethical for this to be the case, that the price of convience or feeling safe is that
    we risk ourselves and give our data to the uncaring corprations. It would not be technically hard to install privacy measures, as alternate program to Alexa that's only purpose is to 
    activate alexa if it hears the keywords, and discard the rest. Or that ring deletes its data after a set time period, unless the recording has been flagged. 
    The privacy option is there, but it doesn't benfit amazon to ofter it. After all, our data is much too presious to them to give up.</p>
  </div>
</div></li>
            <li>5/17/2022: 
In leu of a… "coders block"… I've been timing myself work, and "paying" myself for the time I sit down and work. I think I can make this idea into a react app, "Project Payer". It will work as a stopwatch, and calculate what I've earned automatically. It could also separate projects out, which would be useful if it was used for hourly contractors, and if different projects paid different amounts. A full version would require a database and accounts, so for now I'll develop the frontend and when I take Databases next semester, I'll fully flesh it out.
</li>
            <li>5/13/2022 :
This summer, I have decided to dedicate a lot of my time to doing side projects. The first project I'll spent a good amount of time on is a personal website. It's a great starting place, a good organization point, etc. I'll use the things a learned during GUI, then updated it as my programming skills improve and I learn new things. I have a lot of engineering projects that I'd like to show off, more than just what my github could show off. I'll have to look into making a list of applications I'd like to make as well. I'm not too much of a fan of remaking tic-tac-toe for the sake of practice - I want to create something new and improved. 
</li>
        </ul>
        {
            //Add bot stuff
        }
        <BottomNav />
    </div>
}
