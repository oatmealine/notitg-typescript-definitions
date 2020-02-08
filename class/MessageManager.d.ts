declare const MESSAGEMAN: MessageManager;

declare interface MessageManager {
	/**
	* ITG
	* Broadcasts a message instantly. What is a message ?
	*/
	Broadcast(message: string): void;
}