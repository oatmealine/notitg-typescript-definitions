declare interface ActorSound extends Actor {
	/**
	* NotITG
	* Gets the sound loaded in this ActorSound.
	*/
	get(): RageSound;

	/**
	* NotITG
	* Loads the sound into the ActorSound.
	* @param {string} path The path of the sound to play.
	*/
	load(path: string): void;

	/**
	* NotITG
	* Pauses/Resumes the sound.
	* @param {boolean} pause true to pause, false to resume.
	*/
	//pause(pause: boolean): void;

	/**
	* NotITG
	* Plays the sound from the beginning. If you just want to unpause a sound, see NotITGActorSound.pause().
	*/
	play(): void;

	/**
	* NotITG
	* Stops the sound.
	*/
	stop(): void;
}