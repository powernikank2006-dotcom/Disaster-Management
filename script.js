/* ==========================================
   DISASTER INFORMATION
========================================== */

const disasters = {

    earthquake: {

        title: "Earthquake",

        icon: "fa-house-crack",

        description:
            "An earthquake is the sudden shaking of the ground caused by movement of tectonic plates beneath the Earth's surface.",

        dos: [
            "Drop, Cover and Hold On.",
            "Stay away from windows and glass objects.",
            "Protect your head and neck.",
            "Move to an open area after the shaking stops.",
            "Follow instructions from emergency authorities."
        ],

        donts: [
            "Do not use elevators during an earthquake.",
            "Do not stand near windows.",
            "Do not run outside while the ground is shaking.",
            "Do not touch damaged electrical wires.",
            "Do not return to damaged buildings."
        ],

        tip:
            "Keep an emergency kit ready and identify safe places inside your home before an earthquake occurs."
    },


    flood: {

        title: "Flood",

        icon: "fa-water",

        description:
            "A flood occurs when water covers land that is normally dry. Heavy rainfall, overflowing rivers and storms can cause floods.",

        dos: [
            "Move to higher ground immediately.",
            "Keep emergency supplies ready.",
            "Listen to official weather warnings.",
            "Switch off electricity if it is safe to do so.",
            "Keep drinking water in clean containers."
        ],

        donts: [
            "Do not walk through fast-moving flood water.",
            "Do not drive through flooded roads.",
            "Do not touch electrical equipment while wet.",
            "Do not drink contaminated flood water.",
            "Do not ignore evacuation instructions."
        ],

        tip:
            "Never underestimate moving water. Even shallow flood water can be dangerous."
    },


    forestfire: {

        title: "Forest Fire",

        icon: "fa-tree",

        description:
            "A forest fire is an uncontrolled fire that spreads through vegetation, forests and grasslands. It can be caused by natural events or human activities.",

        dos: [
            "Move away from the fire area quickly.",
            "Follow evacuation orders.",
            "Cover your nose and mouth from smoke.",
            "Stay indoors if authorities advise you to do so.",
            "Call emergency services if you see an uncontrolled fire."
        ],

        donts: [
            "Do not attempt to fight a large forest fire yourself.",
            "Do not move toward the fire to take photographs.",
            "Do not ignore evacuation warnings.",
            "Do not start campfires in restricted areas.",
            "Do not throw burning objects in dry vegetation."
        ],

        tip:
            "If heavy smoke is present, stay low and move away from the direction of the fire."
    },


    cyclone: {

        title: "Cyclone",

        icon: "fa-hurricane",

        description:
            "A cyclone is a powerful rotating storm that forms over warm ocean water and can bring strong winds, heavy rainfall and flooding.",

        dos: [
            "Stay indoors in a strong building.",
            "Secure loose objects outside your home.",
            "Keep emergency food and water ready.",
            "Listen to official cyclone warnings.",
            "Evacuate if authorities instruct you to leave."
        ],

        donts: [
            "Do not go outside during strong winds.",
            "Do not stand near windows.",
            "Do not travel unnecessarily.",
            "Do not touch fallen electrical wires.",
            "Do not ignore evacuation orders."
        ],

        tip:
            "Charge mobile phones and power banks before the cyclone reaches your area."
    },


    tsunami: {

        title: "Tsunami",

        icon: "fa-house-tsunami",

        description:
            "A tsunami is a series of large ocean waves usually caused by underwater earthquakes, volcanic eruptions or other disturbances.",

        dos: [
            "Move to higher ground immediately.",
            "Move inland away from the coast.",
            "Follow official evacuation routes.",
            "Listen to tsunami warnings.",
            "Stay away from the beach until authorities say it is safe."
        ],

        donts: [
            "Do not go to the beach to watch the waves.",
            "Do not return after the first wave.",
            "Do not ignore tsunami warning sirens.",
            "Do not use unsafe coastal roads.",
            "Do not assume the danger is over after one wave."
        ],

        tip:
            "If you are near the coast and feel a strong earthquake, move to higher ground without waiting for an official warning."
    },


    landslide: {

        title: "Landslide",

        icon: "fa-mountain",

        description:
            "A landslide occurs when rocks, soil and debris move rapidly down a slope. Heavy rainfall, earthquakes and human activities can trigger landslides.",

        dos: [
            "Move away from steep slopes.",
            "Follow evacuation instructions.",
            "Watch for cracks in the ground.",
            "Stay alert during heavy rainfall.",
            "Inform authorities about signs of slope movement."
        ],

        donts: [
            "Do not stay near unstable slopes.",
            "Do not cross an active landslide area.",
            "Do not ignore warning signs.",
            "Do not stand below steep cliffs.",
            "Do not return until authorities declare the area safe."
        ],

        tip:
            "During heavy rainfall, avoid travelling through areas known to be vulnerable to landslides."
    }

};


/* ==========================================
   SHOW SELECTED DISASTER
========================================== */

function showDisaster(type) {

    const disaster = disasters[type];

    if (!disaster) {
        return;
    }


    // Hide disaster list

    document.getElementById("disaster-list").style.display = "none";


    // Show details page

    document.getElementById("disaster-details").style.display = "block";


    // Change title

    document.getElementById("detail-title").textContent =
        disaster.title;


    // Change icon

    const iconElement =
        document.getElementById("detail-icon");

    iconElement.innerHTML =
        `<i class="fa-solid ${disaster.icon}"></i>`;


    // Change description

    document.getElementById("detail-description").textContent =
        disaster.description;


    // Clear old Do's

    const dosList =
        document.getElementById("detail-dos");

    dosList.innerHTML = "";


    // Add Do's

    disaster.dos.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        dosList.appendChild(li);

    });


    // Clear old Don'ts

    const dontsList =
        document.getElementById("detail-donts");

    dontsList.innerHTML = "";


    // Add Don'ts

    disaster.donts.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        dontsList.appendChild(li);

    });


    // Safety tip

    document.getElementById("detail-tip").textContent =
        disaster.tip;


    // Move screen to disaster section

    document.getElementById("disasters").scrollIntoView({
        behavior: "smooth"
    });

}


/* ==========================================
   BACK TO DISASTER LIST
========================================== */

function goBack() {

    // Hide details

    document.getElementById("disaster-details").style.display =
        "none";


    // Show disaster list

    document.getElementById("disaster-list").style.display =
        "block";


    // Scroll to disaster list

    document.getElementById("disasters").scrollIntoView({
        behavior: "smooth"
    });

}
