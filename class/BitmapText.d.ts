declare interface BitmapText extends Actor {
	/**
	* ITG
	* Gets the current shown text.
	*/
	GetText(): string;

	/**
	* ITG
	* Sets the maximum height (independant of zoom) allowed for the BitmapText.
	* @param {number} height The maximum height to set, or 0 to disable.
	*/
	maxheight(height: number): void;

	/**
	* ITG
	* Sets the maximum width (independant of zoom) allowed for the BitmapText.
	* @param {number} width The maximum width to set, or 0 to disable.
	*/
	maxwidth(width: number): void;

	/**
	* ITG
	* Sets the text to text.
	* @param {string} text The text to set.
	*/
	settext(text: string): void;

	/**
	* ITG
	* Wraps the text at width pixels.
	* @param {number} width The width to wrap the text.
	*/
	wrapwidthpixels(width: number): void;
}