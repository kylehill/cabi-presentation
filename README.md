**Tour de Bikeshare: Setting World* Records with JavaScript**

Hi friends. I want to make a disclaimer before I start: I think there are a lot of very important talks that are happening at JSConf this year, on important topics that can help us as technologists make the world a more equitable, accessible, and affirming place. This is... this is not one of those talks.

My name is Kyle Hill, I live in Washington, DC, and these days a I'm a code school teacher that works with new developers. This is a story about terrible ideas: in general, through the lens of a specific one I had in the summer of 2019.

In 2010, the DC government introduced a docked bikeshare system called Capital Bikeshare. For a while it was the largest such system in the entire world, at least until NYC installed theirs in 2013. At this point, there are something like 570 of these stations between the District and all the surrounding counties, with more still being added every week. Seriously, I watched them install a new station while writing this talk a couple weeks ago.

If you've never encountered a docked bikeshare station before, they're actually really well designed. The stations are solar powered and communicate via cellular signal with a central server. To rent a bike, you can insert your credit card in the station's kiosk, consent to a couple hundred pages of terms and conditions that nobody reads, and use a code that prints on a reciept to unlock any of the bikes at the station. You then have half an hour to ride to another station, slide your bike into any of the open docks, wait for the green light and happy acknowledgement sound to go off, [chime] and walk away.

Pricing differs from city to city, but in DC's system, one-off rides cost a couple of bucks. You can also buy an annual membership, which comes with unlimited rides and this plastic RFID key that lets you skip the credit card and printed code step.

The bikes themselves are... you know what, we're going to be positive and uplifting here today. They're **durable**. Each one weighs 40 pounds, roughly twice as much as your average road bike. The turning radius is, like, the size of the stage I'm on. Sometimes the front brakes don't work. Sometimes the back brakes don't work. These are not mutually exclusive conditions. 

Oh, and they're not fixies -- they have three gears, which are roughly:

* 1st gear: [404 usage not found]
* 2nd gear: you're climbing the Tourmalet
* 3rd gear: pedaling through Jello

But, hey, it's public infrastructure, and nine years on from when the system was first installed, a lot of the original bikes are still in use. 

And I really do mean that when I call it infrastructure. On a weekday with nice weather, system-wide you'll have almost 20,000 trips. There are literally thousands of people who live in DC that will use Capital Bikeshare to get from home to work every morning, and then every evening use Capital Bikeshare to get from work to... uh, close to home?

So, I know this is a talk about JavaScript and stuff, but I want to take a really indulgent 60 seconds to talk about my actual favorite topic in the world: DC. Ready?

The Constitution gave Congress to right to designate ten square miles of some existing state as the new capital and in 1790 they decided on some land on the Potomac River between Maryland and Virginia, so they hired a French guy named Pierre L'Enfant to come up with a design for the city and he started off with a sensible grid but then drew these diagonal avenues just coming off of fucking everywhere, and then he acted like an asshole so Thomas Jefferson fired him and these three Quaker brothers and their free black neighbor actually did the real work of finishing the plan, which included a road that ran along the top called Boundary Road because it was where the city was supposed to end because how many people were ever going to to live here, really, have you **been** here during the summer? but also mostly there's this gigantic steep hill that runs directly north of that road that's some bullshit to climb with your horse, so anyway everyone ignored the L'Enfant Plan for twenty years until then the British came and burned half of the city and then we kind of stuck to it and the Plan is basically what exists these days except for that we that we never built those canals on the National Mall, and also Delaware Avenue got turned into train tracks, and also that Virginia took it's part back during the Civil War and kept it, and also that we expanded all the way beyond Boundary Road, which has this one intersection that got overlooked and somehow turned into a Wendy's and it is **by far** the worst intersection in the city but if we all work together we can tear down Dave Thomas Circle one Honda Civic at a time.

(deep breath)

Anyway, one side effect to the L'Enfant Plan is that the big important buildings -- Congress, the White House, the Supreme Court, the cabinet departments -- they're all built in that downtown core. And if your company wants to work with politicians and the federal government, you probably want to have your office next door, right?

Well, DC has this really fun law called the Height of Buildings Act. Congress passed it back in 1910, and there's a lot of wild myths around the height limit being "no taller than the Capitol Dome" or something, what it really does is restrict the height of any residential or commercial buildings to the width of the street that it's on. This functionally caps our "skyscrapers" at, like, 12 stories. 

Supply and demand and DC residents inability to have any input into the rules that govern it dictates if there's a limited amount of proximate space available to work downtown, and if there's a limited amount of vertical space too, eventually there won't be much space for people to **live** downtown. Which is more or less what happened! I call it the Law of Massachusetts Avenue. There are a bunch of exceptions, but generally the neighborhoods in which people live and play are north of this line, while their jobs (and the tourists) are to the south.

But then there's the elevation problem. The roads of the L'Enfant Plan exist on a mostly flat plain. It's when you get past Boundary Road -- which is now called Florida Avenue -- that you hit this steep incline.

Here, look at this, it's the 15th Street NW Cycle Track. It was the first north/south protected cycle lane in the city, running from the residential neighborhood of Columbia Heights all the way down to the White House. There is this one stretch, directly north of Florida Avenue, where you hit a gradient of 9%. My friend Eli's place used to be on that street; trust me, *walking* up that hill sucks. Tour de France riders struggle with that. Dragging along on an 18kg tank-bike can feel impossible. And when it's the end of a long day of work, and you're lazy, and you know there's that one Bikeshare station right at the bottom of that hill... [chime]

These problems aren't unique to DC, of course, and so the company that runs our bikeshare system and dozen others employs folks to drive around all day in rebalancing vans, manually moving bikes around. Sometimes this isn't enough, so last year they introduced a gamified program called **Bike Angels** and now we can finally talk about _my_ terrible idea.

Somewhere on an AWS instance, there is an algorithm running.

#### THE ALGORITHM / LIVES IN / US-EAST-1

Look, I have to be honest here. I don't have a origin story for this. I do distinctly remember telling my friend a few months ago "hey, I have this terrible idea; I want to set the record for most Bike Angels points in a single day." I also distinctly remember my friend looking at me sideways, as I was smoking a clove and finishing my fourth beer, and just replying "... how?" And I distinctly remember responding with:

"Technology."

Every 15 minutes, the Bike Angels code looks at the number of available bikes and open docks at each bikeshare station, compares it to whatever it expects demand will be, and then designates some stations to be worth 1, 2, or 3 points for moving bikes in or out accordingly. You need to register for the program but once you do, you see this extra layer on the system map. 

Take a bike from a white station and you'll get points. Park a bike at a black station and you'll get points. Ride from a white station to a black station and you'll get both. There are some edge case rules, but the upshot is that you actually need to bring more bikes to where they need to be, not just shuffle them around.

So, you've gamified a thing; what's the best way to get people to play with it? Well, here's the page on Capital Bikeshare's website that shows a live-updated monthly leaderboard. It also has this curious little section at the bottom that's labeled "Record Holders." Specifically, it has a row: the record for a single day is 124 points.

I could do that. Right?

#### THE ALGORITHM / MAKES / ASSUMPTIONS

The maximum points you can get on any individual ride is six; I would need to do at least 21 of those in a day if I wanted to break that record. If there's any way to predict where and when the algorithm might points might pop up, I'd want to know what it was. 

Job one in forensics: collect data. Luckily, Capital Bikeshare publishes historical ride data going all the way back to 2010, and has an endpoint that lists all of the stations, their available bikes, docks, and any Bike Angels points. It's not exactly an API, but I've been using it for years to demonstrate AJAX to code school students, so hey, thanks for the benign neglect. I wrote a scraper to fetch and process data every fifteen minutes, threw it into the crontab on a $5 droplet, and let it run for a few weeks.

In the meantime, I used Bikeshare to get around town as much as I could, because sometimes the weather in DC in the summer is actually pleasant. This gave me a few opportunities to memorize all of the one-way east/west bike lanes downtown, but also let me play with expectations. 

Say I take the last bike out of a station. Would it take long before the algorithm would make that now empty station worth points to park in? Could I force bonuses to appear? Well.. sort of.

What I figured out pretty quickly is that while the assignment of points to a station is partially a function of the number of bikes there, there's something more sophisticated, some machine learning going on in the code that makes deducing its priors a practical impossibility. It sure seems like the algorithm also takes into account:

* Visits from rebalancing vans
* The day of the week
* The weather
* Historical demand at this time of day
* Historical demand at this time of *year*
* Nearby stations (< 500m)

#### THE ALGORITHM / CONSIDERS / EVERYTHING

So, deduction's impossible here, but what about _induction_? No one's never going to know what kind of galaxy brain ideas this machine learned. But if I make some educated guesses, I can find out if they're approaching correct, and until those guesses are disproven I can work within my own logical framework to maximize points for minimal effort. This means that I'm not just going to do what the algorithm tells me to do. It means that I'm playing a game _against_ the computer.

After I had a few weeks' scraped data, I built this visualization tool so that I could see where points had been assigned over time. (By the way, if you want to know about other terrible ideas, I wrote my own React components to make this map. Maybe don't do this one.)

Here's one thing I noticed fast: At :15, :30, and :45 past the hour, the points available at full or empty stations would change if those conditions were no longer true. On the top of the hour, _everything_ changed. My guess is that historical expectations of demand are bucketed into the hours of the day and dramatically influenced the calculations.

