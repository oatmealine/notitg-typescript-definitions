declare const NOTESKIN: NoteSkinManager;

declare interface NoteSkinManager {
	/**
	* ITG
	* Gets the path for a specific button and element.
	* @param {string} button The wanted button.
	* @param {string} element The wanted element.
	*/
	GetPath(button: string, element: string): string;

	/**
	* ITG
	* Creates a table of every NoteSkin names that are valid for the current GameType.
	*/
	GetNoteSkinNames(): Object | Array<any>;
}