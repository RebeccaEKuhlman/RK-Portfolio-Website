/**
 * Blog using bootstrap components to format and style
 * Goals: make prettier, maybe hide text button
 */

import {TopNav} from "./TopNav"
import {BottomNav} from "./BottomNav"

export const Blog = () =>{

    return <div className="m-3">
        {
            //Add front stuff
            //create component to store list items
        }
    <TopNav />
    <div className="card w-75 bg-light p-2 m-2">
            <div className="card-body">
                <h5 className="card-title">Deep Work</h5>
                <h6 className="card-subtitle mb-2 text-muted">02/13/2024</h6>
                <p className="card-text">
                Deep Work is a method of getting work done efficiently using techniques proposed by Cal Newport. 
                    The goal is to obtain an extreme level of focus to get work done quickly, without interruption.
                    I've tried this method to varying success. The most that I get out of it is the timing aspect of it.
                    If I feel like I want a break from a task, and I see I have about 5 minutes left until break time, 
                    I'll work on the task a little more. However, as a student, it's not the most realistic thing to do. 
                    Often, I'll have shorter breaks in between meetings, classes, etc., and not enough time to do a true deep work session.
                    I'd have to book a study room, get set up there, and only have 30 minutes or so to work. 
                    In the evenings, I have to focus on housework, making food, let alone time to rest. Another aspect of deep work 
                    is to not work after 5 pm, which I do agree with, but it limits my options on true deep work. I'd love to try it
                    when I graduate, as the method works very well for my writing in my free time. Others have complaints about the 
                    Deep Work book itself, usually on its "quit social media" aspect. While not realistic for everyone, there is
                    a point to be made on how much time is spent on social media and the drawbacks on overall quality of life (and work) with it.
                    Deep work is an interesting concept, but not too far off from a lot of methods of focusing on work. At least it assures us that it’s okay to not check our emails every 15 minutes.
</p>
            </div>
        </div>
    <div className="card w-75 bg-light p-2 m-3">
            <div className="card-body">
                <h5 className="card-title">Buzzwords</h5>
                <h6 className="card-subtitle mb-2 text-muted">02/12/2024</h6>
                <p className="card-text">
                Buzzwords have taken over media - flashy words that are thrown around to make something "cool" and "modern".
                    AI and ML are such buzzwords, as well as analytics, among others. The problem with buzzwords is that the actual 
                    meaning behind them is obfuscated. The actual word's meaning is irrelevant in the buzzword use.
                    "AI can do anything and destroy the world" vs. "AI is a tool that can be used for good, neutral, and bad things".
                    Many people talk about AI, but how it works is often brushed under the rug. "It uses AI!" How does it use AI?
                    What data is it using? What is the use case?
                    The solution to buzzwords on an individual level is to notice how media and advertising promote things, and find and dictionary if necessary. 
                    Unfortunately, the future will likely spawn more as today's buzzwords lose their luster.
                </p>
            </div>
        </div>
        <div className="card w-75 bg-light p-2 m-3">
            <div className="card-body">
                <h5 className="card-title">Face recognition at the air port</h5>
                <h6 className="card-subtitle mb-2 text-muted">02/07/2024</h6>
                <p className="card-text">
                The Consumer Electronics Showcase (CES) 2024 showed off many AI products, for better or for worse.
                    Live translation technology is getting much better, and it's exciting to think about people being able to communicate better, and with more people.
                    CES also featured the Transportation Security Administration (TSA) working on facial recognition technology to verify people’s identity at airports.
                    Facial recognition is known to be very biased, and often unusable for some people based on their skin color.
                    The CBP One app is an example of this, with some asylum seekers unable to get appointments for legal immigration due to facial recognition not working for them. It also doesn’t help that the app is notoriously poor in quality, which is frankly unacceptable for a vital government service.
	To implement facial recognition on a large (and potentially involuntary) scale, there must be sufficient evidence to prove the particular model used will be as unbiased as possible. 
                    There are also privacy concerns with this technology as well... How is the data protected? When will the data be deleted? Who will see the data?
                    Ideally, people will be able to opt out of facial recognition regardless of circumstance. We will see if this remains the case at US airports.
                    As always, proceed with caution until proven otherwise.

                </p>
            </div>
        </div>
    <div class="card w-75 bg-light p-2 m-3">
      <div class="card-body">
        <h5 class="card-title">Astro and AI's weaknesses</h5>
        <h6 class="card-subtitle mb-2 text-muted">6/12/2022</h6>
        <p class="card-text">AI is so nice until we realize how limited it can be. Astro is Amazon's attempt at that all so attractive sci-fi reality of a robot butler. Ah a walking security robot that I can occasionally use to google? Personally I thought looking things up myself was faster than attempting to ask Alexa. Astro can play music too, but so can my phone. 
At 1000$, he's not looking so hot on the pros and cons list. Astro also faces the same privacy concerns that Alexa deals with, in addition to recording videos. Astro's facial recognition isn't ideal either, and likely is even worse looking in practice. While a seemly mild annoyance, Astro will have the ability to call authorities if it suspects a intruder, which opens a very troubling can of worms if Astro is mistaken. A weakness of working with huge corporations is that the leadership department doesn't think about deadlines and challenges the same way that designers and developers do, and the team working on Astro has some concerns about Astro and basic functionality. Stairs appear to be a challenge for the little guy, which is a major problem
considering the target demographic for this robot. AI and movement is always a challenge, and it takes time to really adjust for these issues, and lots of testing. But Amazon wants its cute little robot to be available asap, and often it is not the engineers that win this fight. 
        </p>
      </div>
    </div>
    <div class="card w-75 bg-light p-2 m-3">
      <div class="card-body">
        <h5 class="card-title">Data over the Customer</h5>
        <h6 class="card-subtitle mb-2 text-muted">6/4/2022</h6>
        <p class="card-text"> A good AI requires a lot of good data, and companies with the resources to undergo big AI Projects tend to be a tad greedy and unethical in that collection of data. Amazon's collection of user data is known, but the true extent is not. The company keeps track of users search history and purchases, the variety of creepy data collection we're unfortunately used to. Amazon however, is the owner of Ring security systems, and the Alexa line of products. While the Alexa line has a mute button, more often that not users leave it on to listen to everything... and amazon collects and stores all of those recordings. Ring has video that is always watching too, as its purpose as a security system. It is really ethical for this to be the case, that the price of convenience or feeling safe is that we risk ourselves and give our data to the uncaring corporations. It would not be technically hard to install privacy measures, as alternate program to Alexa that's only purpose is to activate Alexa if it hears the keywords, and discard the rest. Or that ring deletes its data after a set time period, unless the recording has been flagged. The privacy option is there, but it doesn't benefit amazon much to offer it. After all, our data is much too precious to them to give up.</p>
      </div>
    </div>
    <div class="card w-75 bg-light p-2 m-3">
      <div class="card-body">
        <h5 class="card-title">Project Payer</h5>
        <h6 class="card-subtitle mb-2 text-muted">5/17/2022</h6>
        <p class="card-text"> In leu of a… "coders block"… I've been timing myself work, and "paying" myself for the time I sit down and work. I think I can make this idea into a react app, "Project Payer". It will work as a stopwatch, and calculate what I've earned automatically. It could also separate projects out, which would be useful if it was used for hourly contractors, and if different projects paid different amounts. A full version would require a database and accounts, so for now I'll develop the frontend and when I take Databases next semester, I'll fully flesh it out.
</p>
      </div>
    </div>
    <div class="card w-75 bg-light p-2 m-3">
      <div class="card-body">
        <h5 class="card-title">Website Portfolio</h5>
        <h6 class="card-subtitle mb-2 text-muted">5/13/2022</h6>
        <p class="card-text"> This summer, I have decided to dedicate a lot of my time to doing side projects. The first project I'll spent a good amount of time on is a personal website. It's a great starting place, a good organization point, etc. I'll use the things a learned during GUI, then updated it as my programming skills improve and I learn new things. I have a lot of engineering projects that I'd like to show off, more than just what my github could show off. I'll have to look into making a list of applications I'd like to make as well. I'm not too much of a fan of remaking tic-tac-toe for the sake of practice - I want to create something new and improved.
</p>
      </div>
    </div>
        {
            //Add bot stuff
        }
        <span className="fixed-bottom"><BottomNav /></span>
        <div> oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo </div>
    </div>
    
}
