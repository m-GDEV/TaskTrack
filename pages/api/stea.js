export default function stea(req, res) {
    const key = "717EDBD2C011A91505EE606EF6ACF717";
    const steamID = "76561198385824684";
    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${steamID}&format=json`;

    console.log(url);

    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                res.send(response);
            } else {
                res.send(response.status);
            }
        });

    res.send("got here");
}
