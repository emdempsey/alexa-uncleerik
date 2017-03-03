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
    var delay = "1000ms";
    var endSession = true;
    var audioUrl = "https://alexa-uncleerik.azurewebsites.net/audio/";

    if(name === "Malachi"){
        audioUrl += "Malachi.mp3";
        msg = `<audio src="${audioUrl}" />`;//`Hey, who are you again?<break time="${delay}"/>Got that right`;
    }
    else if(name === "Hannah" || name ==="Hanah" || name === "Hana"){
        audioUrl += "Hannah.mp3";
        msg = `<audio src="${audioUrl}" />`;//`I have something I need to tell you.<break time="${delay}"/>oh man you are so fast, I love you too`;
    }
    else if(name === "Levi"){
        audioUrl += "Levi.mp3";
        msg = `<audio src="${audioUrl}" />`;//`Who am I?<break time="${delay}"/>Got that right`;
    }
    else{
        msg = `<p>I am sorry, I didn't quite understand what you said.</p><p>Please say the name again.</p>`;
        endSession = false;
    }

    console.log(msg);

    response.say(msg).shouldEndSession(endSession).send();
}

module.exports = intent;