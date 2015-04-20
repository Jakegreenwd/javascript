var user = prompt("You are the LMP of the secret Apollo 18 mission. Your mission is to explore a crater that is suspected to be an ancient alien city on the dark side of the moon.  You walk into the crater and to your amazement you see a clear dome housing an alien city inside it. What do you do? RUN, RADIO Houston, or EXPLORE?").toUpperCase();

switch(user) {
    case 'RUN':
        console.log("You are spooked seeing the city, you have always been told there are no much things as aliens so you hightail it back the the LM in fear of the unknown.");
        break;
    case 'RADIO':
        console.log("Upon seeing the city, you immediately radio Houston and snap a few photos before returning to the LM, not wanting to call attention to yourself.");
        var orders = prompt("NASA orders you to explore the city. Do you refuse? YES or NO?");
        var photos = prompt("Upon inspection of the photos you took, you notice they are blurry. DO oyu go back to take more photos? YES or NO?");
        if(orders === "YES" || photos === "NO") {
            console.log("You go back to the city once more to take photos and to explore");
        }
        else {
            console.log("You fire up the LM accent stage and blast off the surface of the moon to the CSM.");
        }
        break;
    case 'EXPLORE':
        console.log("You are amazed seeing the alien city. Wanting to see more, you walk towards it. Much to your surprise, the aliens look human, they are wearing… SS Nazi uniforms? What is going on?! Being your inquisitive self, you want to explore further so you walk towards the gates to the city…");
        var brave = prompt("Are you brave enough to enter the city? YES or NO?");
        var answer = prompt("A voice over a speaker in broken english asks you if you are American. YES or NO?");
        if(brave === "YES" && answer === "YES") {
            console.log("The gates open into an airlock then into the city where you marvel at the flying cars and maglev trains among the towering skyscrappers. Immediately Nazi soliders arrest you as you are taken as a prisoner of war. Confused, you explain to them that WWII has been over for some time but they do not believe you.");
        }
        else {
            console.log("You are not allowed into the city and are ordered to leave immediately");
        }
        break;
    default:
        console.log("Please enter either run, radio, or explore. Please and thank you.");
}        