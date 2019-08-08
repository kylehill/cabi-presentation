**Tour de Bikeshare: Setting World* Records with JavaScript**

Hi friends. I want to make a disclaimer before I start: I think there are a lot of very important talks that are happening at JSConf this year, on important topics that can help us as technologists make the world a more equitable, accessible, and affirming place. This is... this is not one of those talks.

My name is Kyle Hill, I live in Washington, DC, and these days I'm a code school teacher that works with new developers. This is a story about terrible ideas: in general, and through the lens of a specific one I had this summer.

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

[**Transcribers' note: This next bit is going to be spoken very quickly; I apologize for the accessibility nightmare that it entails. While I'll improvise elsewhere, I'm near certain to adhere to this script from here on through the end of this paragraph, if you wanted to have it at the ready.**]

The Constitution gave Congress to right to designate ten square miles of some existing state as a new capital and in 1790 they decided on some land on the Potomac River between Maryland and Virginia, so they hired a French guy named Pierre L'Enfant to come up with a design for the city and he started with a sensible grid but then had a terrible idea and drew these diagonal avenues just coming off everywhere, and then he acted like a jerk so Thomas Jefferson fired him and these three Quaker brothers and their free black neighbor actually did the real work of finishing the plan, which included a road that ran along the top called Boundary Road because it was where the city was supposed to end because how many people were ever going to to live here, really, have you **been** here during the summer? but also mostly there's this gigantic steep hill that runs directly north of that road that your horse doesn't want to climb, so anyway everyone ignored that whole terrible idea for twenty years until then the British came and burned half of the city and then we kind of stuck to it and the L'Enfant Plan is basically what exists these days except for that we that we never built those canals on the National Mall, and also Delaware Avenue got turned into train tracks, and also that Virginia took it's part back during the Civil War and kept it, and also that we expanded all the way beyond Boundary Road, which has this one intersection that got overlooked and somehow turned into a Wendy's and it is **by far** the must frustrating place in the city but if we all work together we can tear down Dave Thomas Circle one Honda Civic at a time.

(deep breath)

Anyway, one side effect to the L'Enfant Plan is that the big important buildings -- Congress, the White House, the Supreme Court, the cabinet departments -- they're all built in that downtown core. And if your company wants to work with politicians and the federal government, you probably want to have your office next door, right?

Well, DC has this really fun law called the Height of Buildings Act. Congress passed it back in 1910, and there's a lot of wild myths around the height limit being "no taller than the Capitol Dome" or something, what it really does is restrict the height of any residential or commercial buildings to the width of the street that it's on. This functionally caps our "skyscrapers" at, like, 12 stories. 

Supply and demand and DC residents' inability to have any input into the rules that govern them, dictates if there's a limited amount of proximate space available to work downtown, and if there's a limited amount of vertical space too, eventually there won't be much space for people to **live** downtown. Which is more or less what happened! I call it the Law of Massachusetts Avenue. There are a bunch of exceptions, but generally the neighborhoods in which people live and play are north of this line, while their jobs (and the tourists) are to the south.

But then there's the elevation problem. The roads of the L'Enfant Plan exist on a mostly flat plain. It's when you get past Boundary Road -- which is now called Florida Avenue -- that you hit this steep incline.

Here, look at this, it's the 15th Street NW Cycle Track. It was the first north/south protected cycle lane in the city, running from the residential neighborhood of Columbia Heights all the way down to the White House. There is this one stretch, directly north of Florida Avenue, where you hit a gradient of 9%. My friend Eli's place used to be on that street; trust me, *walking* up that hill sucks. Tour de France riders struggle with that. Dragging along on an 18kg tank-bike can feel impossible. And when it's the end of a long day of work, and you're lazy, and you know there's that one Bikeshare station right at the bottom of that hill... [chime]

These problems aren't unique to DC, of course, and so the company that runs our bikeshare system and a dozen others employs folks to drive around all day in rebalancing vans, manually moving bikes around. Sometimes this isn't enough, so last year they introduced a gamified program called **Bike Angels** and now we can finally talk about _my_ terrible idea.

Somewhere on an AWS instance, there is an algorithm running.

Look, I have to be honest here. I don't have a real origin story for this one. I distinctly remember telling my friend a few months ago "hey, I have this terrible idea; I want to set the record for most Bike Angels points in a single day." I also distinctly remember my friend looking at me sideways, as I was smoking a clove and finishing my fourth beer, visibly going through an entire list of questions to ask in their head, and finally just replying "... how?" And I distinctly remember responding with:

"Technology."

Every 15 minutes, the Bike Angels code looks at the number of available bikes and open docks at each bikeshare station, compares it to whatever it expects demand will be, and then designates some stations to be worth 1, 2, or 3 points for moving bikes in or out accordingly. You need to register for the program but once you do, you see this extra layer on the system map. 

Take a bike from a white station and you'll get points. Park a bike at a black station and you'll get points. Ride from a white station to a black station and you'll get both. There are some edge case rules, but the upshot is that you actually need to bring more bikes to where they need to be, not just shuffle them around.

So, you've gamified your thing; what's the best way to get people to play with it? Well, here's the page on Capital Bikeshare's website that shows a live-updated monthly leaderboard. It also has this curious little section at the bottom that's labeled "Record Holders." Specifically, it has a row: the record for a single day is 124 points.

I could do that. Right?

The maximum points you can get on any individual ride is six; I would need to do at least 21 of those in a day if I wanted to break that record. If there's any way to predict where and when the algorithm might pop up points, I'd obviously want to know it. 

Job one in forensics: collect data. Luckily, Capital Bikeshare publishes historical ride data going all the way back to 2010, and they have an endpoint that lists all of the stations, their available bikes, docks, and any Bike Angels points. It's not exactly an API, but I've been using it for years to demonstrate AJAX to code school students, so hey, thanks for the benign neglect. I wrote a scraper to fetch and process data every fifteen minutes, threw it into the crontab on a $5 droplet, and let it run for a few weeks.

In the meantime, I used Bikeshare to get around town as much as I could, because sometimes the weather in DC in  pleasant. This gave me a few opportunities to memorize all of these one-way east/west bike lanes downtown, but also let me play with expectations. 

Say I take the last bike out of a station. Would it take a while before the algorithm would make that now empty station worth some points to park in? Could I force bonuses to appear? Well.. sort of.

What I figured out pretty quickly is that while the assignment of points to a station is partially a function of the number of bikes there, there's something more sophisticated, some machine learning going on in the code that makes deducing its priors a practical impossibility. It sure seems like the algorithm also takes into account:

* Visits from rebalancing vans
* The day of the week
* The weather
* Historical demand at this time of day
* Historical demand at this time of *year*
* Nearby stations (< 500m)

So, deduction's impossible here, but what about _induction_? No one's never going to know what kind of galaxy brain ideas this machine learned. But if I make some educated guesses, I can find out if they're approaching correct, and until those guesses are disproven I can work within my own logical framework to maximize points for minimal effort. This means that I'm not just going to do what the algorithm tells me to do. It means that I'm playing a game, _against_ the computer.

After I had a few weeks' scraped data, I built this visualization tool so that I could see where points had been assigned over time. (By the way, if you want to know about other terrible ideas, I wrote my own React components to make this map. Maybe don't do this one.)

Here's one thing I noticed fast: At :15, :30, and :45 past the hour, the points available at full or empty stations would change if those conditions were no longer true. On the top of the hour, _everything_ changed. My guess is that historical expectations of demand are bucketed into the hours of the day and dramatically influence the calculations for the subsequent four segments.

Some basic math told me that if I focused on the goal of 12 points an hour, or, three per segment, I'd be able to get this done with 10 hours. That seemed like it could be a reasonable ask of effort, especially if I could leverage the higher point values on offer during morning and evening rush hours. 

I did some test runs, and it let me know that the limiting reagent was actually going to be walking between stations. To sustainably hit 3 points every fifteen minutes, I was going to need to look for nearby station pairs with point asymmetries, but over the course of a few hours during lunch breaks I felt confident that could actually pull it off.

So, on Monday, July 15th, I decided to just go for it.

[S1]

For Record Attempt #1 -- spoiler alert -- I started after breakfast in a pretty residential part of town; I opened app on my phone and saw that I was surrounded by 2-3 point white stations. Great! All I needed to do was find a nearby station with a bike and... yeah, I had to walk a kilometer to the nearest one. Great start, Kylf.

Once I finally got a bike from the station outside Metro Center I rode uphill a few blocks from where I started. First ride, 5 points. There was another station a couple of blocks away that had several bikes, so I grabbed one of them and realized that where I wanted to go was contraflow to traffic, salmoned along the sidewalk for longer than I'm proud to admit, but parked it for another 3.

After a few more rides, all along that 15th Street Cycle Track, I'd hit 14 points in my first hour, all with a gigantic self-imposed logistical handicap. Easy, right? Oh, man, it got even sweeter.

At 10:10am I found a pair of stations that were three blocks apart - taking a bike out from one of them was worth 1 point, and parking it at the other was worth 3. The destination was a well-trafficked station on Massachusetts Avenue, and I put the only bike in there at 10:14am. 

At 10:15 I pulled up the map and watched the points for the next segment. Where I was still worth 3 points, but now the algorithm decided that the station 200 meters away needed to get rid of bikes too.

In the next fifteen minutes, I did that loop five times. Folks, I _ran_ between stations. At 10:30 in morning I was up to 38 points. I took a iced coffee break, because it was a touch warmer outside than I'd anticipated it being, and also I had to tell the polycule group text about how awesome this was all going and how I was going to be done before happy hour, but I got a couple more 2-point rides in before the expectations change at 11am.

Whereupon the points started drying up immediately. The station at Metro Center was basically full and wanted to get rid of bikes, so I started moving them anywhere there was space within a few blocks. Then the Metro Center station started to be worth fewer points. There was a station pair halfway across the city at the Wharf that had a real tasty point asymmetry, and I thought it might sense to farm those. So I took a longer ride than usual, docked in at 7th/Maine SW, looked at the map, and said a faint cuss word. There were no points available for a kilometer in every direction.

[/S1]

Okay, so now it's noon, and uh, it's gotten hotter out, and I am starting to experience consequences like "dehydration" and "Kyle you should have put on sunblock." I made my way to a station that was near a lunch place, parked in the only empty dock, got halfway across the street and then I realized what that probably was going to mean. If I could just be patient for ten minutes, the algorithm might notice.

[S2]

So instead of getting lunch, or Gatorade, or sunblock, I got a bunch more points. That took me up to 60 -- almost halfway there! And at the end of the hour I jumped on a 4 point ride that took me across town again, this time to the station outside Eastern Market, crossing the halfway point.

But now... y'all, that Monday was supposed to have kind of nice weather, and it ended up being 94 degrees Fahrenheit. The heat index topped out at 102. For reference, when the heat index crosses _90_, children in DC schools aren't allowed to play outside. I might have been better off trying to hang out in the shade, but all of those bikeshare stations that are solar powered? They're somewhat deliberately not going to be helpful. Still, I soldiered on. 

I took the Metro over to Union Station and grabbed a bike from the large, full station there for another 3. I did that, then saw another opportunity a few blocks away for one more ride. It took me to the station that's right by to my house, and honestly? I think I knew it was over when I chose to do it. It took all the energy I had left to make it up the false flat at the end. 

I docked my bike for two more points, looked at my phone, realized I had 8% battery left and it was going to be another kilometer's walk to get to any stations with points, and I... just went home instead. I was completely physically finished, in a very real way that I had honestly never experienced before.

[/S2]

And that was attempt number one! Technically, I _was_ done before happy hour.

I'll admit that my preparation was maybe a little suboptimal; there was definitely room for improvement. But I couldn't try again for the next week -- the entire east coast immediately experienced a roasting heat wave. For the next eight days the high temperature stayed north of 95, with heat indexes in the 110s. No horsepoop, even just standing in the shade in that for an hour is not just uncomfortable, but legitimately dangerous.

But: let's pretend that I prepared correctly. Let's assume that next time out, I made smarter routing decisions. Let's control for the weather and let's presuppose I focused on keeping a sustainable pace the entire time instead of burning out early. If the question I asked, like, several hundred slides ago was "can I do this? Can I score more than 124 points in a day?" I think the answer is... yeah. I think I can. It's definitely possible, at least. The algorithm has weak points and I successfully exploited some of them to get as close as I did.

So, all my free time for the next week was focused on building tools to make all those assumptions true.

First up, let's look at the paths I can take. It's fine to know the distance between stations as the crow flies, but turns out lots of folks aren't cool with me riding through their building's lobby. What's more, there are a lot of roads -- mostly those diagonal state avenues, thanks to L'Enfant's terrible idea -- that don't feel safe to ride along. If I want to stick to the bike lanes as much as possible, then the quantity of asphalt that I'm going to ever see will shrink dramatically.

From that, I figured that I can turn all of the stations and one-way bike lane intersections in DC into a directed graph. It's relatively easy to map out the distance between them, right? 

The other part that sucks is going uphill. Luckily, there's the Open Elevation API. I ran all of the node locations against it, and since this is a directed graph, could figure out a rough approximation of elevation gain going each way. And by mathing together the distance and hills on each vector, I was able to reason out a single effort value between each pair of stations. And that makes this "just" a travelling salesman problem!

Next up, routing. After a few hours of riding and racewalking my decision-making really started to backslide. If I'm chilling on my couch with access to the whole system map and the data visualization, I could pick any random station and figure out a good route to take within a few seconds, but I'm not going to be able to do that as easily when I'm outside.

What if I could outsource my own decision-making here? Over a couple days I hacked together a real quick and dirty React app that let me input a station; it considered the combined distance/elevation metric, the current state of point bonuses, and what that scraped data implied that the point bonuses were soon _going to be_, and came back with a station pair within 500 meters, predicated on my own logic. 

So, uh, yeah, I made myself into an API.

Don't worry, this idea gets more terrible. I had concerns about conserving my cell battery, and iOS Chrome chews through it fast. So instead of using a web app, why not do some Selenium magic and just continually refresh the Capital Bikeshare member portal? The landing page shows details on my most recent ride; whenever that gets updated it's safe to assume that I'm ready for the next.

All it takes is one call to the decision-making API, and a second call to Twilio, and yeah, I just get a regular text message with stats and directions.

And _now_ I was ready to give this another shot. Wednesday, July 24th was going to be the day with the nicest weather all summer -- 83 degrees, party cloudy, and low humidity. Record Attempt #2 was going to take place on a day with probably the highest system-wide ridership in months. 

Home stretch, let's do this y'all.

[S1: 35 seconds (thru lunch)]

The day started out with a 3-point ride within my neighborhood. Within ten seconds of docking, I had a text message from API me, with instructions to take a bike from a station down R street towards Metro Center. Finished that route, got another text message, and then another. I'm fast-forwarding this whole part because there's hardly any drama to it. 

The high system-wide demand meant there were fewer dramatic point asymmetries. Enough people were riding around of their own volition. No 20-point segments today. But: I was able to stay within the same ten block radius of Metro Center pretty much the entire morning, and I was walking and riding at what I felt was a sustainable pace -- taking breaks to actually eat, hydrate, and reapply sunscreen.

[/S1]

I stopped to grab lunch and I bumped into my friend Alexis; we worked together a couple jobs ago and she asked what I was up to! I think what she actually meant was "where are you working these days?" but in that moment I interpreted it with a more... immediate focus.

See, terrible ideas are inscrutible. If something made sense enough to be able to explain the "how" and "why" of it all in the time it takes to assemble a sandwich, I'm not sure how terrible it is to begin with, and I'm guessing that also you're not only person to have had it. 

No, the most terrible of ideas are tragically personal. They're art, of the type that only you'll ever know how to create. Terrible ideas happen _to_ people, and until they're pursued they just live as this ethereal, unexplainable dream. Like, who wants to listen to some guy talk for about bikeshare points for a half hour?

[S2: 40 seconds (thru 2:44pm)]

I took the Metro over to Union Station in the afternoon, since that's always the one big blue dot that came up on the data visualization. For the next two hours, I just moved bikes, over and over again, to the supermarket nearby. The station was next to a window ledge, where employees would sit on their smoke breaks and watch me park a bike and walk away with intent, every ten minutes, like a Russian Doll time loop. 

I wonder what they thought I was doing.

So eventually at 2:30 I emptied one of the smaller stations, with the help of a group of mildly confused tourists. That's when I sent a text to my wife -- I'm on an incredible pace, and I'm pretty sure that at the next segment change the station I emptied is now going to be worth points for putting bikes _back in_. Kate, I was going to be done by happy hour!

[/S2]

At 2:45, the points updated. That small station I'd completely emptied, at 2nd and G? It was now worth points for taking bikes out of there -- bikes which didn't actually exist.

I'm not entirely sure what I had done to that algorithm in that moment, what untested and unknown depths of its machine learning I revealed for the first time, but honestly? I think I instantiated a corner case that was so strange, so alien that it just started instinctually defending itself.

[S3: 1:10 at last trip on U Street (4:59pm)]

So, hey, Capitol Hill stopped being fruitful with points, but I was getting close to finishing; I just needed to change neighborhoods. The API wouldn't help me here. On the map I found a 5-point station pair that would take me on a ride across downtown, but I needed to get to the origin station quickly. I took the Metro across town and when I sprinted up the escalator to get a bike before the segment change? I think that's when I turned my ankle, but honestly I don't know for sure. Whenever it was, from that point walking started to really suck.

Which was a problem because the API started sending me to stations that were farther and farther apart, and it wasn't able to take my particular discomfort into consideration.

But I hit triple digits! And then after my ride at 4:17 -- the API crashed. Turns out: No matter how quick of a hack your code is, you should probably always check for empty arrays, especially when that array is "stations with points within a km.""

So I'm was on my own again, exhausted and in pain. 15 minutes passed -- it seemed like there was nothing around. The second segment brought a station pair within three blocks, worth a single point. Limping the whole way, I did the loop four times. At 5pm, the points nearby evaporated again. 

The algorithm, so confused and tired and wounded itself, had started cheating. And I was all alone, 18 points from the record. I sat down on a curb, gave it some thought, sent a couple text messages, and called for a Lyft to go home.

[/S3]

You know that feeling, where you desperately need no part of your body to possibly touch any other part of your body? This how I was sitting, motionless on my bed, stuck with my internal monologue giving me a lecture. 

"Why was I doing this? What was I actually hoping to achieve? Who is ever going to understand what I'm doing? Do I understand what I'm doing? Why didn't I prepare better? Since I quit everything else I ever do when it's 80% done, why should this be any different?"

[sniffs]

"And you smell awful!"

You know, on this point my internal monologue and my actual senses were in agreement. I got up, slowly made my way into the shower, turned it on and just stood there. For 5-10 minutes I just stood there, mind blank, blistered and sore and defeated. And eventually I thought about a text that I got from my wife right before I gave up. 

And my ankle started to feel a little better. Like, I didn't want to walk anymore, but I could... I could make it to happy hour. I might as well bike over.

[S4: 1:00]

Y'all seem smart, so you probably already know how this part ends. Spoiler alert, there wasn't Record Attempt #3.

A terrible idea can't be shared with anyone else, but once you've seen it to whatever it's logical conclusion might be, it creates a beautiful corpse. And that can be shared. I have code that I wrote, I have actually good ideas that it inspired. I have a rekindled love, for JavaScript and for the city I live in. I have a real, honestly-learned life lesson in determination.

I have a story I can tell, a story about that one time that I rode 41 miles and walked a half marathon, and broke a world record for bikeshare points in a single day. About how when I took out my last bike, at that very moment, the skies opened. About how that last ride down 15th Street was through the most celebratory thunderstorm -- not an obstacle placed in my path by an algorithm but a real, alive, visceral experience.

[/S4]

And about how I then rocked up, soaked to the skin, into an extraordinarily crowded bar, whereupon Kate handed me that margarita, and introduced me to her new colleague, and he asked:

"What did you do today?"