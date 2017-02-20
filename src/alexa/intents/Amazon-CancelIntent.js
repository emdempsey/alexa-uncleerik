var intent = {
    name: "AMAZON.CancelIntent",
    slots: {},
    utterances: []
};
intent.handler = function(request, response) {
    response.say("Well, okay then bye").shouldEndSession(true).send();
}

module.exports = intent;