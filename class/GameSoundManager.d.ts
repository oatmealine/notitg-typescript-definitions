declare const SOUND: GameSoundManager;

declare interface GameSoundManager {
	/**
	* ITG
	* Set the volume of the sound to volume for duration seconds.
	* @param {number} volume The target volume. (must be between 0 and 1)
	* @param {number} duration The time during which the volume will be dimmed, in seconds. (must be greater or equal than 0)
	*/
	DimMusic(volume: number, duration: number): void;

	/**
	* ITG
	* Plays the sound once. (Please note that if the "MuteActions" preference is enabled, the song won't be played.
	* 
	*/
	PlayOnce(path: string): void;
}