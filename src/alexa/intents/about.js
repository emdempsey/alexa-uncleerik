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
        msg = `Hey, who are you again?<break time="750ms"/>Got that right`;
    }
    else if(name === "Hannah" || name ==="Hanah" || name === "Hana"){
        msg = `I have something I need to tell you.<break time="750ms"/>oh man you are so fast, I love you too`;
    }
    else if(name === "Levi"){
        msg = 'Who am I?<break time="750ms"/>Got that right';
    }
    else{
        msg = `I am sorry, I didn't quite understand what you said.  Please try again.`;
    }

    console.log(msg);

    response.say(msg).shouldEndSession(true).send();
}

module.exports = intent;