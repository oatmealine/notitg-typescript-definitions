import './ActorFrame';

declare interface ActorFrameTexture extends ActorFrame {
	/**
	* NotITG
	* Creates the ActorFrameTexture.
	*/
	Create(): void;

	/**
	* NotITG
	* Enables/Disables the Alpha Buffer. It is disabled by default.
	* @param {boolean} enable Enable or not the Alpha Buffer.
	*/
	EnableAlphaBuffer(enable: boolean): void;

	/**
	* NotITG
	* Enables/Disables the Depth Buffer. It is disabled by default.
	* @param {boolean} enable Enable or not the Depth Buffer.
	*/
	EnableDepthBuffer(enable: boolean): void;

	/**
	* NotITG
	* Enables/Disables floats. It is disabled by default.
	* @param {boolean} enable Enable or not floats.
	*/
	EnableFloat(enable: boolean): void;

	/**
	* NotITG Version 2
	* Makes or not the AFT grayscale. It is disabled by default.
	* @param {boolean} enable Enable or not the grayscale option.
	*/
	EnableGrayscale(enable: boolean): void;

	/**
	* NotITG
	* Enables/Disables the Preserve Texture option. It is disabled by default.
	* @param {boolean} enable Enable or not the Preserve Texture behavior.
	*/
	EnablePreserveTexture(enable: boolean): void;

	/**
	* NotITG
	* Gets the texture of the ActorFrameTexture.
	*/
	GetTexture(): RageTexture;

	/**
	* NotITG
	* Gets the Texture's name.
	*/
	GetTextureName(): string;

	/**
	* NotITG
	* Sets the Texture's name. Used for loading textures to other objects by its name.
	* 
	*/
	SetTextureName(name: string): void;
}