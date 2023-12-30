using Microsoft.AspNetCore.SignalR;

namespace SignalRPractice.SignalRServices
{
    public class Myhub:Hub
    {
        public async Task  SendMessagesAsync(string message)
        {
            await Clients.All.SendAsync("SendMessage", "Hello every one im Signal R");
        }
    }
}
