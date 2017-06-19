1.  List the names of all NFL teams

    nfl=# SELECT * FROM teams;


2.  List the stadium name and head coach of all NFC teams

SELECT stadium, head_coach FROM teams Where conference = 'NFC';

-- INSERT INTO teams (name, stadium, head_coach, conference, division, active) VALUES ('Dallas Cowboys', 'AT&T Stadium', 'Jason Garrett', 'NFC', 'East', 'true');

-- INSERT INTO players (name, position, salary, team_id) VALUES ('Mario Williams', 'DE', 5900000, 1);

3.  List the head coaches of the AFC South

SELECT head_coach FROM division Where conference = 'AFC';

4.  The total number of players in the NFL
