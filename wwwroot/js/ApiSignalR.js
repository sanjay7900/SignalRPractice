$(document).ready(function () {


    const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:7115/chat")
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.on("GetMessage", (message) => {
        console.log(message);
        //document.getElementById("num").innerText=message;
        var d = "<div>" + message + "<div>";
        $("#data").append(d);

        // Update your UI or do something with the incoming message
    });

    connection.start()
        .then(() => {
            console.log("Connected to SignalR hub");
        })
        .catch((err) => {
            console.error(err.toString());
        });
});