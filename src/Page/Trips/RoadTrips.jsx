import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../Layout";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


const RoadTrips = () => {
  return (
    <div>
      <Layout>
        <div className="container">
            <div class="text-center">
                <h1 class="display-4 font-italic">Road trip</h1>
                <h3 class="font-italic">6,000 Miles of fun</h3>
                <hr class="featurette-divider"/>
                <p>
                Chloe and Chris drove all the way from Madison out to the west coast after their graduation. Their first leg was all the way to Montana where they slept on a cattle farm under the stars. They woke at sunrise to the roosters in the barn just yards away. After packing up their gear, they were on the road again for another long day of driving. The hours melted away as the pair sang along to songs and listened to podcasts.
                </p>
                <p>

As the sun was setting they drove upon their second stop. A yurt outside of missoula that boasted a stunning view of the mountains and a wildlife reserve. They enjoyed their peaceful evening by drinking wine by a fire. The yurt was a beautiful and quiet way to relax and get ready for the legs to come.
</p>
<Image className="featurette-image mx-auto" src={require("../../static/images/ChloeSunset.jpg")} fluid rounded/>


<p>

Morning came and the pair cooked eggs over the fire to fuel up. Seattle was the next destination and it was a long and beautiful drive through the some of the greenest trees and stunning mountains that the Pacific Northwest has to offer. Seattle was a metropolis among the serein nature that surrounded it. They stayed in a hostel across the street from Pike Place Market which had deliciously unique foods and some exceptional clam chowder. After some strange encounters and delicious food they made their way back into the forest.
</p>
<p>

Next up on their journey was the Olympic State national park. The campsite was feet away from the shoreline and bolstered some of the best sunsets either had seen. Their 2 nights there had been magical to live in the woods and explore local beaches and the local town of Forks (where twight took place). They saw no vampires but they had blood sucking fun! After their time there they pickup up their stuff and set off in search of more adventure
</p>
<p>

After a quick drive, the two ended up in Portland Oregon, where they explored the city and the food trucks they had to offer as well as getting tattoos at a local tattoo shop. They had so much fun there that they decided to stay an extra night to really get the full experience of the town. The extra night proved to me as magical as they expected and as they explored some of the cities night life and local bars. They were sad to leave the place but still hope to return some day.
</p>
<p>
The redwoods were the next destination after a long day of driving. They had set their sights on a number of camp spots but upon entering the park, directions were tricky and they ended up stumbling on a site they may have been full or something but they made due in what looked like a free site. The night was relaxing and a makeshift good time as they had no firewood so they had to go foraging for some even though the signs said not to.  The next day was spent driving through the massive trees that surrounded the area. Some of the most beautiful wonders of nature surrounded them and they even managed to drive through a tree!
</p>
<Image className="featurette-image mx-auto" src={require("../../static/images/IMG_2755.jpg")} fluid rounded/>

<p>
Finally they managed their way to sunny San Francisco where they stayed the night at a hotel near the water. It proved to be a turbulent time as the pair went out for a night on the town while someone decided to break into the car and steal a number of items, including a laptop and all camping gear. Feeling defeated, the two mustard up enough energy to still make the most of their day there. It was long and stressful but at the end of the mess they rewarded themselves with one of the best chicken sandwiches in the world and a sensational pesto pizza. They then settled in for a night of keeping up with the Kardashian in the hotel room. The next day was spent retrieving the partially repaired car that was still missing a rear windshield and driving as far east as they had the energy. Eventually they arrived at a motel in Nevada instead of the planned night in lake Tahoe.
</p>
<p>
After the shady motel and turbulent time in san Fran, the two made it to Glenwood springs, CO. there they were met with relaxing hot springs and an adorable hotel room themed after The Game of Thrones. They spent the next day rafting down the Colorado river in a valley with monumental mountains on their side. It was freezing cold water and neither were dressed properly for it, but their love warmed each other through it all
</p>
<p>
After that, they set their sights for The Blue Lakes in Colorado. They had to rebuy all the camping gear that was lost in the robbery. Unfortunately after all the hassle of buying the blue lakes, which sits at about 10,000 feet was still under a few feet of snow. Being the adaptive duo that they were they managed to find a campsite close by that was beautiful and peaceful. They spent their night around a fire drinking, talking and enjoying the open air and each other's company. When morning came, they stopped by a small bakery for much needed coffee and food and headed east, back home.
</p>
<Image className="featurette-image mx-auto" src={require("../../static/images/IMG_2844.jpg")} fluid rounded/>

<p>
An overnight stop in Lincoln Nebraska turned into a fun night of great food and drink in a city that didn't feel like it was in the middle of the most boring state in the country. They laughed and explored and, most importantly got some rest after a hectic few days of long drives.
</p>
<p>
After Lincoln, it was time to put an end to the trip and head back to Madison, where they would build a life with each other. They had a busy summer ahead of them and their trip will forever live in each of them as some of the most magical days either had known.  After the 15 days and 6000 miles together, what remained was the unforgettable memories the two made and the bond that they shared.
                </p>
            </div>
        </div>
      </Layout>

    </div>
  );
};

export default RoadTrips;
