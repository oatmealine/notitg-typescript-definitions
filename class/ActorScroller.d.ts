import './Actor';

declare interface ActorScroller extends Actor {
	/**
	* ITG
	* Scrolls to the item at index index, and makes it the current one.
	* 
	*/
	SetCurrentAndDestinationItem(index: number): void;
}