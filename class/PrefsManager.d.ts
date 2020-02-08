declare const PREFSMAN: PrefsManager;

declare interface PrefsManager {
	/**
	* ITG
	* Gets the value of the preference pref.
	* @param {string} pref The name of the preference.
	*/
	GetPreference(pref: string): any;

	/**
	* ITG
	* Set the value of a preference.
	* @param {string} pref The name of the preference.
	* @param {any} value The new value.
	*/
	SetPreference(pref: string, value: any): void;
}