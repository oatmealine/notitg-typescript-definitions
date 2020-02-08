import { PlayerStageStats } from './PlayerStageStats';

interface StageStats {
	/**
	* ITG
	* Gets the number of seconds played.
	*/
	GetGameplaySeconds(): number;

	/**
	* ITG
	* Gets the PlayerStageStats instance for a player.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetPlayerStageStats(playerNumber: number): PlayerStageStats;
}