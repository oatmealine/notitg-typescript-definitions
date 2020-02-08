import '../enum/StepsType';
import '../enum/GoalType';
import './Song';

declare interface Profile {
	/**
	* ITG
	* Gets the amount of calories burned today.
	*/
	GetCaloriesBurnedToday(): number;

	/**
	* ITG
	* Gets a composite of high scores on every course matched by stepsType and difficulty.
	* @param {StepsType} stepsType The steps' type. See ITGStepsType.
	* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
	*/
	GetCoursesActual(stepsType: StepsType, difficulty: Difficulty): number;

	/**
	* ITG
	* Gets the percentage of completed courses matching stepsType and difficulty.
	* @param {StepsType} stepsType The steps' type. See ITGStepsType.
	* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
	*/
	GetCoursesPercentComplete(stepsType: StepsType, difficulty: Difficulty): number;

	/**
	* ITG
	* Gets the possible score of courses matched by stepsType and difficulty.
	* @param {StepsType} stepsType The steps' type. See ITGStepsType.
	* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
	*/
	GetCoursesPossible(stepsType: StepsType, difficulty: Difficulty): number;

	/**
	* ITG
	* Gets the number of calories needed for the goal.
	*/
	GetGoalCalories(): number;

	/**
	* ITG
	* Gets the number of seconds needed for the goal.
	*/
	GetGoalSeconds(): number;

	/**
	* ITG
	* Gets the goal type. See ITGGoalType.
	*/
	GetGoalType(): number;

	/**
	* ITG
	* Gets the profile's data.
	*/
	GetSaved(): Object | Array<any>;

	/**
	* NotITG
	* Gets the number of times a song have been played (and completed).
	* @param {Song} song The song.
	*/
	GetSongNumTimesPlayed(song: Song): number;

	/**
	* ITG
	* Gets a composite of high scores on every song matched by stepsType and difficulty.
	* @param {StepsType} stepsType The steps' type. See ITGStepsType.
	* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
	*/
	GetSongsActual(stepsType: StepsType, difficulty: Difficulty): number;

	/**
	* ITG
	* Gets the percentage of completed songs matching stepsType and difficulty.
	* @param {StepsType} stepsType The steps' type. See ITGStepsType.
	* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
	*/
	GetSongsPercentComplete(stepsType: StepsType, difficulty: number): number;

	/**
	* ITG
	* Gets the possible score of songs matched by stepsType and difficulty.
	* @param {StepsType} stepsType The steps' type. See ITGStepsType.
	* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
	*/
	GetSongsPossible(stepsType: StepsType, difficulty: Difficulty): number;

	/**
	* ITG
	* Gets the total number of songs played.
	*/
	GetTotalNumSongsPlayed(): number;

	/**
	* ITG
	* Gets the number of steps scored on a specific grade, matching stepsType and difficulty.
	* @param {StepsType} stepsType The steps' type. See ITGStepsType.
	* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
	* @param {Grade_} grade The grade. See ITGGrade.
	*/
	GetTotalStepsWithTopGrade(stepsType: StepsType, difficulty: Difficulty, grade: Grade_): number;

	/**
	* ITG
	* Gets the number of trails scored on a specific grade, matching stepsType and difficulty.
	* @param {StepsType} stepsType The steps' type. See ITGStepsType.
	* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
	* @param {Grade_} grade The grade. See ITGGrade.
	*/
	GetTotalTrailsWithTopGrade(stepsType: StepsType, difficulty: Difficulty, grade: Grade_): number;

	/**
	* ITG
	* Gets the weight of the player.
	*/
	GetWeightPounds(): number;

	/**
	* ITG
	* Returns true if the song with ID id is unlocked for the player.
	* @param {string} id The ID of the song.
	*/
	IsCodeUnlocked(id: string): boolean;

	/**
	* ITG
	* Sets a new goal, to calories.
	* @param {number} calories The new goal to set, in calories.
	*/
	SetGoalCalories(calories: number): void;

	/**
	* ITG
	* Sets a new goal, to seconds.
	* @param {number} seconds The new goal to set, in seconds.
	*/
	SetGoalSeconds(seconds: number): void;

	/**
	* ITG
	* Sets the goal type.
	* @param {GoalType} goalType The goal type. See ITGGoalType.
	*/
	SetGoalType(goalType: GoalType): void;

	/**
	* ITG
	* Sets the weight of the player.
	* @param {number} weight The new weight to set, in pounds.
	*/
	SetWeightPounds(weight: number): void;
}