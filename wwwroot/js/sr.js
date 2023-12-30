$(document).ready(function () {
    console.log("hjnd");
   


    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/hub")  // Adjust the URL based on your SignalR hub configuration
        .configureLogging(signalR.LogLevel.Information)
        .build();

    // Define a method to handle incoming messages from the server
    connection.on("SendMessage", (message) => {
        console.log(message);
        //document.getElementById("num").innerText=message;
        $("#num").htmt(message);
        // Update your UI or do something with the incoming message
    });

    // Start the connection
    connection.start()
        .then(() => {
            console.log("Connected to SignalR hub");
        })
        .catch((err) => {
            console.error(err.toString());
        });

    // Send a message to the server
    function sendMessage(message) {
        connection.invoke("SendMessagesAsync", message)
            .catch((err) => {
                console.error(err.toString());
            });
    }
    $("#clickR").click(function () {
        console.log("hii");
        //sendMessage("jnd");
        connection.invoke("SendMessagesAsync", "kkdkm")
            .catch((err) => {
                console.error(err.toString());
            });
    })

});