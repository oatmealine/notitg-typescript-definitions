declare interface Trail {
	/**
	* ITG
	* Gets the difficulty. See ITGDifficulty.
	*/
	GetDifficulty(): Difficulty;

	/**
	* ITG
	* Gets the total length of the trail, in seconds.
	*/
	GetLengthSeconds(): number;

	/**
	* ITG
	* Gets the RadarValues for a specific player. See ITGRadarValues.GetValue().
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetRadarValues(playerNumber: number): RadarValues;
}