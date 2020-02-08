/**
* You can get an instance of Game by using ITGGameState.GetCurrentGame()
*/
declare interface Game {
	/**
	* ITG
	* Gets the name of the current game ("dance" or "lights").
	*/
	GetName(): string;
}