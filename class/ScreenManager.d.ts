declare const SCREENMAN: ScreenManager;

declare interface ScreenManager {
	/** 
	 * ITG
	 * Gets the actual screen. If used during when playing, see the [ScreenGameplay](https://sm.heysora.net/doc/#Class_ScreenGameplay) class.
	 */
	GetTopScreen(): ScreenGameplay;

	/**
	 * ITG
	 * Hides the current overlay message.
	 */
	HideOverlayMessage(): void;

	/**
	 * ITG
	 * Shows a overlay message.
	 * @param {string} message The message to show.
	 */
	OverlayMessage(message: string): void;

	/**
	 * ITG
	 * Sets the next screen to screenName.
	 * @param {string} screenName The screen name.
	 */
	SetNewScreen(screenName: string): void;

	/**
	 * ITG
	 * Shows a message that appears usually at the top of the screen for a few seconds. The message is also shown in the output log.
	 * @param {string} message The message to show.
	 */
	SystemMessage(message: string): void;
}