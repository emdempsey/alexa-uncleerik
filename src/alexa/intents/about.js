var intent = {
    name: "about",
    slots: {
        "FIRST_NAME": "AMAZON.US_FIRST_NAME"
    },
    utterances: [
        "{-|FIRST_NAME}"
    ]
};
intent.handler = function(request, response) {
    //response.say("Well, okay then bye").shouldEndSession(true).send();

    var name = response.slot("FIRST_NAME");
    var msg = "";

    if(name === "malachi"){
        msg = `<p>Hey, who are you again?</p><p>Got that right</p>`;
    }
    else if(name === "hannah" || name ==="hanah" || name === "hana"){
        msg = `<p>I have something I need to tell you.</p><p>oh man you are so fast, I love you too</p>`;
    }
    else if(name === "levi"){
        msg = '<p>Who am I?</p><p>Got that right.</p>';
    }

    response.say(msg).shouldEndSession(true).send();
}

module.exports = intent;