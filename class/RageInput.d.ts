declare const INPUTMAN: RageInput;

declare interface RageInput {
	/**
	* ITG
	* Creates a table of detected input devices' descriptions.
	*/
	GetDescriptions(): Object | Array<any>;

	/**
	* NotITG
	* Reloads every input devices.
	*/
	Reset(): void;
}