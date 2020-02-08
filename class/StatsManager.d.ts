import { StageStats } from './StageStats';

declare const STATSMAN: StatsManager;

declare interface StatsManager {
	/**
	* ITG
	* Gets a StageStats instance including every game until now.
	*/
	GetAccumStageStats(): StageStats;

	/**
	* ITG
	* Gets the best grade. See ITGGrade.
	*/
	GetBestGrade(): Grade_;

	/**
	* ITG
	* Gets the current StageStats.
	*/
	GetCurStageStats(): StageStats;

	/**
	* ITG
	* Gets the final grade for the specified player. See ITGGrade.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetFinalGrade(playerNumber: number): Grade_;

	/**
	* ITG
	* Gets a StageStats instance including the rounds last rounds played.
	* @param {number} rounds The number of rounds to count.
	*/
	GetPlayedStageStats(rounds: number): StageStats;

	/**
	* ITG
	* Gets the number of stages played.
	*/
	GetStagesPlayed(): number;

	/**
	* ITG
	* Gets the worst grade. See ITGGrade.
	*/
	GetWorstGrade(): Grade_;

	/**
	* ITG
	* Resets the stats.
	*/
	Reset(): void;
}