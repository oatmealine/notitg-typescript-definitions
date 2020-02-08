declare interface PlayerStageStats {
	/**
	* ITG
	* Returns true if a Full Combo was obtained
	*/
	FullCombo(): boolean;

	/**
	* ITG
	* Gets the actual DP.
	*/
	GetActualDancePoints(): number;

	/**
	* ITG
	* Gets the number of calories burned.
	*/
	GetCaloriesBurned(): number;

	/**
	* ITG
	* Gets the current combo.
	*/
	GetCurrentCombo(): number;

	/**
	* ITG
	* Gets the percentage (between 0 and 1) of the current life.
	*/
	GetCurrentLife(): number;

	/**
	* ITG
	* Gets the grade. See ITGGrade.
	*/
	GetGrade(): Grade_;

	/**
	* ITG
	* Gets the amount of judgments corresponding to holdNoteScore.
	* @param {HoldNoteScore} holdNoteScore The wanted judgment. See ITGHoldNoteScore. (must be between 0 and 2)
	*/
	GetHoldNoteScores(holdNoteScore: HoldNoteScore): number;

	/**
	* ITG
	* Gets the life remaining seconds.
	*/
	GetLifeRemainingSeconds(): number;

	/**
	* ITG
	* Gets the DP percentage.
	*/
	GetPercentDancePoints(): number;

	/**
	* ITG
	* Creates a table (of Steps instances) of every played steps.
	*/
	GetPlayedSteps(): Object | Array<any>;

	/**
	* ITG
	* Gets the number of possible DP.
	*/
	GetPossibleDancePoints(): number;

	/**
	* ITG
	* Creates a table (of Steps instances) of every possible steps.
	*/
	GetPossibleSteps(): Object | Array<any>;

	/**
	* ITG
	* Gets the score.
	*/
	GetScore(): number;

	/**
	* ITG
	* Gets the amount of seconds the player survived.
	*/
	GetSurvivalSeconds(): number;

	/**
	* ITG
	* Gets the amount of judgments corresponding to tapNoteScore.
	* @param {TapNoteScore} tapNoteScore The wanted judgment. See ITGTapNoteScore. (must be between 0 and 8)
	*/
	GetTapNoteScores(tapNoteScore: TapNoteScore): number;

	/**
	* ITG
	* Gets the max combo.
	*/
	MaxCombo(): number;

	/**
	* NotITG
	* Sets the amount of DP to amount.
	* @param {number} amount The new amount.
	*/
	SetActualDancePoints(amount: number): void;

	/**
	* NotITG
	* Sets the amount of possible DP to amount.
	* @param {number} amount The new amount.
	*/
	SetPossibleDancePoints(amount: number): void;

	/**
	* NotITG
	* Sets the score to score.
	* @param {number} score The new score.
	*/
	SetScore(score: number): void;
}