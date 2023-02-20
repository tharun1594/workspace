const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "cricketMatchDetails.db");

let db = null;
const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () =>
      console.log("Server running at http://localhost:3000")
    );
  } catch (e) {
    console.log(`Db Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

const convertPlayersDbObjectToResponseObject = (dbObject) => {
  return {
    playerId: dbObject.player_id,
    playerName: dbObject.player_name,
  };
};

const convertMatchDbObjectToResponseObject = (dbObject) => {
  return {
    matchId: dbObject.match_id,
    match: dbObject.match,
    year: dbObject.year,
  };
};

const convertPlayersAndMatchDbObjectToResponseObject = (dbObject) => {
  return {
    playerId: dbObject.player_id,
    playerName: player_name,
  };
};

//API 1 => Returns a list of all the players in the player table
app.get("/players/", async (request, response) => {
  const getPlayersQuery = `
        SELECT * FROM player_details ORDER BY player_id;
    `;
  const playersArray = await db.all(getPlayersQuery);
  response.send(
    playersArray.map((eachPlayer) =>
      convertPlayersDbObjectToResponseObject(eachPlayer)
    )
  );
});

//API2 => Returns a specific player based on the player ID
app.get("/players/:playerId/", async (request, response) => {
  const { playerId } = request.params;
  const getPlayersQuery = `
        SELECT * FROM player_details WHERE player_id = ${playerId};
    `;
  const playersArray = await db.all(getPlayersQuery);
  response.send(
    playersArray.map((eachPlayer) =>
      convertPlayersDbObjectToResponseObject(eachPlayer)
    )
  );
});

//API3 => Updates the details of a specific player based on the player ID
app.put("/players/:playerId/", async (request, response) => {
  const { playerId } = request.params;
  const { playerName } = request.body;
  const getUpdateQuery = `
  UPDATE 
    player_details 
  SET 
    player_name = '${playerName}' 
  WHERE 
    player_id = ${playerId};
`;
  await db.run(getUpdateQuery);
  response.send("Player Details Updated");
});

//API 4 => Returns the match details of a specific match
app.get("/matches/:matchId/", async (request, response) => {
  const { matchId } = request.params;
  const getMatchesQuery = `
        SELECT * FROM match_details WHERE match_id = ${matchId};
    `;
  const matchesArray = await db.all(getMatchesQuery);
  response.send(
    matchesArray.map((eachMatch) =>
      convertMatchDbObjectToResponseObject(eachMatch)
    )
  );
});

//API 5 => Returns a list of all the matches of a player
app.get("/players/:playerId/matches/", async (request, response) => {
  const { playerId } = request.params;
  const getPlayerMatchesQuery = `
        SELECT * FROM match_details NATURAL JOIN player_match_score WHERE player_id = ${playerId};
    `;
  const playerMatchesArray = await db.all(getPlayerMatchesQuery);
  response.send(
    playerMatchesArray.map((playerMatch) =>
      convertMatchDbObjectToResponseObject(playerMatch)
    )
  );
});

//API 6 => Returns a list of players of a specific match
app.get("/matches/:matchId/players/", async (request, response) => {
  const { matchId } = request.params;
  const getSpecificPlayerQuery = `
        SELECT
    player_details.player_id AS playerId,
    player_details.player_name AS playerName,
    SUM(player_match_score.score) AS totalScore,
    SUM(fours) AS totalFours,
    SUM(sixes) AS totalSixes FROM 
    player_details INNER JOIN player_match_score ON
    player_details.player_id = player_match_score.player_id
    WHERE player_details.player_id = ${matchId};`;
  const specificMatchPlayersArray = await db.all(getSpecificPlayerQuery);
  response.send(specificMatchPlayersArray);
});

//API 7 => Returns the statistics of the total score, fours, sixes of a specific player based on the player ID
