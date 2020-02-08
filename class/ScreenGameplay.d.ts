declare interface ScreenGameplay extends ActorFrame {
	/**
	 * NotITG
	 * Gets the life from a player. (The life is a percentage between 0 and 1)
	 * @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2)
	 */
	GetLife(playerNumber: number): number;

	/**
	 * NotITG
	 * Pauses or unpauses the game.
	 * @param {boolean} pause true to pause the game, false to resume it.
	 */
	PauseGame(pause: boolean): void;

	/**
	 * NotITG
	 * Sets the life of a player.
	 * @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2)
	 * @param {number} life The new life to set. (must be between 0 and 1)
	 */
	SetLife(playerNumber: number, life: number): void;
}