declare interface RageTextureRenderTarget extends RageTexture {
	/**
	* NotITG
	* Begin the rendering to a texture process.
	* @param {boolean} preserveTexture Enable the "Preserve Texture" option.
	*/
	BeginRenderingTo(preserveTexture: boolean): void;

	/**
	* NotITG
	* Stops the rendering process.
	*/
	FinishRenderingTo(): void;
}