declare interface RageSound {
	/**
	* NotITG
	* Gets the sound position, in seconds.
	*/
	GetSoundPosition(): number;

	/**
	* NotITG
	* Balances the sound.
	* @param {number} balance The new balance to apply. (0 = Left, 0.5 = Center, 1 = Right) (must be between 0 and 1)
	*/
	pan(balance: number): void;

	/**
	* NotITG
	* Alias of NotITGRageSound.speed().
	* @param {number} speed The new pitch. (must be between 0 and 100)
	*/
	pitch(speed: number): void;

	/**
	* NotITG
	* Changes the speed of the RageSound.
	* @param {number} speed The new speed. (must be between 0 and 100)
	*/
	speed(speed: number): void;

	/**
	* NotITG
	* Sets a property value.
	* @param {string} param The parameter name. (must be equal to "StartSecond", "Pitch", "Speed", "Pan", or "Volume")
	* @param {number} value The value to assign.
	*/
	SetParam(param: string, value: number): void;

	/**
	* NotITG
	* Changes the volume.
	* @param {number} volume The volume percentage. (must be between 0 and 1)
	*/
	volume(volume: number): void;
}