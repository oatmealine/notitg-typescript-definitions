import { Profile} from './Profile';

declare const PROFILEMAN: ProfileManager;

declare interface ProfileManager {
	/**
	* ITG
	* Gets the machine profile.
	*/
	GetMachineProfile(): Profile;

	/**
	* ITG
	* Gets the profile for the player playerNumber.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetProfile(playerNumber: number): Profile;

	/**
	* ITG
	* Returns true if the profile for the player playerNumber is persistent.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	IsPersistentProfile(playerNumber: number): boolean;

	/**
	* ITG
	* Saves the machine profile.
	*/
	SaveMachineProfile(): void;
}