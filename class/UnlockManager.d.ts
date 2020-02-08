declare const UNLOCKMAN: UnlockManager;

declare interface UnlockManager {
	/**
	* ITG
	* Gets the associated Code.
	* @param {string} name The name.
	*/
	FindCode(name: string): string;

	/**
	* ITG
	* Gets a table of songs unlocked by unlockCode.
	* @param {string} unlockCode The unlock code.
	*/
	GetSongsUnlockedByCode(unlockCode: string): Object | Array<any>;

	/**
	* ITG
	* Gets a table of steps unlocked by unlockCode.
	* @param {string} unlockCode The unlock code.
	*/
	GetStepsUnlockedByCode(unlockCode: string): Object | Array<any>;

	/**
	* ITG
	* Sets the preferred Song/Course to the specified code.
	* @param {string} unlockCode The unlock code.
	*/
	PreferUnlockCode(unlockCode: string): void;

	/**
	* ITG
	* Unlocks an entry by unlockCode.
	* @param {string} unlockCode The unlock code.
	*/
	UnlockCode(unlockCode: string): void;
}