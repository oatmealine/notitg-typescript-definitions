declare interface RageTexture {
	/**
	* NotITG
	* Gets the height of the image.
	*/
	GetImageHeight(): number;

	/**
	* NotITG
	* Gets the width of the image.
	*/
	GetImageWidth(): number;

	/**
	* NotITG
	* Gets the number of frames in the texture.
	*/
	GetNumFrames(): number;

	/**
	* NotITG
	* Gets the path to the texture's file.
	*/
	GetPath(): string;

	/**
	* NotITG
	* Gets the coordinate of the texture as a table of floats : left, top, right, bottom.
	*/
	GetTextureCoordRect(): Object | Array<any>;

	/**
	* NotITG
	* Gets the height of the texture.
	*/
	GetTextureHeight(): number;

	/**
	* NotITG
	* Gets the width of the texture.
	*/
	GetTextureWidth(): number;

	/**
	* NotITG
	* Determines if the animation should loop or not.
	* @param {boolean} enable true to loop the animation, false to play it only once.
	*/
	loop(enable: boolean): void;

	/**
	* NotITG
	* Sets the position of the animation.
	* @param {number} position The position.
	*/
	position(position: number): void;

	/**
	* NotITG
	* Sets the rate of the animation.
	* @param {number} rate The rate to apply. (must be between 0 and 1)
	*/
	rate(rate: number): void;

	/**
	* NotITG
	* Reloads the texture.
	*/
	Reload(): void;
}