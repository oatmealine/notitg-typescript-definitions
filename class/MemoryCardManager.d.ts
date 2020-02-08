declare const MEMCARDMAN: MemoryCardManager

declare interface MemoryCardManager {
	/**
	* ITG
	* Gets the state of the specified player's card. See ITGMemoryCardState.
	*/
	GetCardState(playerNumber: number): MemoryCardState;
}