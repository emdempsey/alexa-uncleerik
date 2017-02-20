var intent = {
    name: "about",
    slots: {
        "FIRST_NAME": "AMAZON.US_FIRST_NAME"
    },
    utterances: [
        "{about |}{-|FIRST_NAME}"
    ]
};
intent.handler = function(request, response) {
    //response.say("Well, okay then bye").shouldEndSession(true).send();

    var name = request.slot("FIRST_NAME");
    console.log(name);
    var msg = "";

    if(name === "Malachi"){
        msg = `<p>Hey, who are you again?</p><p>Got that right</p>`;
    }
    else if(name === "Hannah" || name ==="Hanah" || name === "Hana"){
        msg = `<p>I have something I need to tell you.</p><p>oh man you are so fast, I love you too</p>`;
    }
    else if(name === "Levi"){
        msg = '<p>Who am I?</p><p>Got that right</p>';
    }
    else{
        msg = `I am sorry, I didn't quite understand what you said.  Please try again.`;
    }

    console.log(msg);

    response.say(msg).shouldEndSession(true).send();
}

module.exports = intent;