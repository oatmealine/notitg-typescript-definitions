declare interface Sprite extends Actor {
	/**
	* ITG
	* Scales the image to a rectangle.
	* @param {number} left The left coordinate of the rectangle.
	* @param {number} top The top coordinate of the rectangle.
	* @param {number} right The right coordinate of the rectangle.
	* @param {number} bottom The bottom coordinate of the rectangle.
	*/
	customtexturerect(left: number, top: number, right: number, bottom: number): void;

	/**
	* NotITG
	* Gets the sprite's texture.
	*/
	GetTexture(): RageTexture;

	/**
	* ITG
	* Load the texture at path path, or unload the texture if path is nil or if no arguments were passed.
	* @param {string} path The path to load.
	*/
	Load(path: string): void;

	/**
	* ITG
	* Loads the song background texture.
	* @param {string} path The path to load.
	*/
	LoadBackground(path: string): void;

	/**
	* ITG
	* Loads the song banner texture.
	* @param {string} path The path to load.
	*/
	LoadBanner(path: string): void;

	/**
	* ITG
	* Alias for NotITGRageTexture.loop(). Determines if the animation should loop or not.
	* @param {boolean} enable true to loop the animation, false to play it only once.
	*/
	loop(enable: boolean): void;

	/**
	* ITG
	* Alias for NotITGRageTexture.position(). Sets the position of the animation.
	* @param {number} position The position.
	*/
	position(position: number): void;

	/**
	* ITG
	* Alias for NotITGRageTexture.rate(). Sets the rate of the animation.
	* @param {number} rate The rate to apply. (must be between 0 and 1)
	*/
	rate(rate: number): void;

	/**
	* ITG
	* Scales the sprite to the specified dimensions.
	* @param {number} width The target width.
	* @param {number} height The target height.
	*/
	scaletoclipped(width: number, height: number): void;

	/**
	* ITG
	* Sets the state of the sprite.
	* @param {number} state The state of the animation.
	*/
	setstate(state: number): void;

	/**
	* NotITG
	* Sets the texture to texture.
	* @param {RageTexture} texture The new texture to set.
	*/
	SetTexture(texture: RageTexture): void;

	/**
	* ITG
	* Sets custom coordinates to the frames of the texture.
	* @param {number} x The x translation to apply.
	* @param {number} y The y translation to apply.
	*/
	stretchtexcoords(x: number, y: number): void;

	/**
	* ITG
	* Sets the velocity of the texture. A velocity of 1 = The texture will entirely scroll once per second. 2 = Twice per second, etc.
	* @param {number} velocityX The X velocity to apply.
	* @param {number} velocityY The Y velocity to apply.
	*/
	texcoordvelocity(velocityX: number, velocityY: number): void;
}