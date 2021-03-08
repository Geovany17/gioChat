const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1167884",
    key: "859f3af4b73cb6794593",
    secret: "c76575a2486abad14024",
    cluster: "us2",
    useTLS: true

});

pusher.trigger("my-channel", "my-event", {
    message: "Hola!!!!"
});