import './Actor';
import '../enum/PolygonMode';

declare interface Model extends Actor {
	/**
	* NotITG
	* Enables/Disables animation for every texture. It is enabled by default.
	* @param {boolean} enable true to enable animation, false to disable it.
	*/
	//animate(enable: boolean): void;

	/**
	* NotITG
	* Enables/Disables animation for a specific texture. It is enabled by default.
	* @param {boolean} enable true to enable animation, false to disable it.
	* @param {number} index The index of the texture.
	*/
	animateone(enable: boolean, index: number): void;

	/**
	* NotITG
	* Determines if the Cel-Shading will be inverted or not.
	* @param {boolean} enable true to invert, false to keep it as usual.
	*/
	InvertCelPass(enable: boolean): void;

	/**
	* ITG
	* Plays the specified animation at rate speed.
	* @param {string} name The name of the animation.
	* @param {number} rate The speed rate.
	*/
	playanimation(name: string, rate: number): void;

	/**
	* NotITG
	* Removes the transparent texture from the model at index index.
	* @param {number} index The index of the texture.
	*/
	ResetAlphaTexture(index: number): void;

	/**
	* NotITG
	* Removes the texture from the model at index index.
	* @param {number} index The index of the texture.
	*/
	ResetTexture(index: number): void;

	/**
	* NotITG
	* Sets/Adds a transparent texture to the model.
	* @param {number} index The index of the texture.
	* @param {RageTexture} texture The texture to use.
	*/
	SetAlphaTexture(index: number, texture: RageTexture): void;

	/**
	* NotITG
	* Determines if the model should be Cel-Shaded or not.
	* @param {boolean} enable true to enable, false to disable.
	*/
	SetCelShaded(enable: boolean): void;

	/**
	* NotITG
	* Sets the color of the outline.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	SetLineColor(red: number, green: number, blue: number, alpha: number): void;

	/**
	* NotITG
	* Sets the width of the outline.
	* @param {number} width The width, in pixels.
	*/
	SetLineWidth(width: number): void;

	/**
	* NotITG
	* Sets the polygon mode to mode.
	* @param {PolygonMode} mode The polygon mode. See NotITGPolygonMode. (must be between 0 and 1)
	*/
	SetPolygonMode(mode: PolygonMode): void;

	/**
	* NotITG
	* Sets the state for every texture.
	* @param {number} state The state of the animation.
	*/
	setstate(state: number): void;

	/**
	* NotITG
	* Sets the state for a specific texture.
	* @param {number} state The state of the animation.
	* @param {number} index The index of the texture.
	*/
	setstateone(state: number, index: number): void;

	/**
	* NotITG
	* Sets/Adds a texture to the model.
	* @param {number} index The index of the texture.
	* @param {RageTexture} texture The texture to use.
	*/
	SetTexture(index: number, texture: RageTexture): void;

	/**
	* NotITG
	* Sets the rotation for a specific texture.
	* @param {number} index The index of the texture.
	* @param {number} rotation The rotation to apply, in degrees.
	*/
	SetTextureRotate(index: number, rotation: number): void;

	/**
	* NotITG
	* Scales a specific texture. Shortcut for NotITGModel.SetTextureScaleX() and NotITGModel.SetTextureScaleY().
	* @param {number} index The index of the texture.
	* @param {number} scaleX The scaling for the X axis.
	* @param {number} scaleY The scaling for the Y axis.
	*/
	SetTextureScale(index: number, scaleX: number, scaleY: number): void;

	/**
	* NotITG
	* Scales a specific texture in the X axis.
	* @param {number} index The index of the texture.
	* @param {number} scaleX The scaling for the X axis.
	*/
	SetTextureScaleX(index: number, scaleX: number): void;

	/**
	* NotITG
	* Scales a specific texture in the Y axis.
	* @param {number} index The index of the texture.
	* @param {number} scaleY The scaling for the Y axis.
	*/
	SetTextureScaleY(index: number, scaleY: number): void;

	/**
	* NotITG
	* Applies an horizontal translation to a specific texture.
	* @param {number} index The index of the texture.
	* @param {number} translateX The X translation to apply, in pixels.
	*/
	SetTextureTranslateX(index: number, translateX: number): void;

	/**
	* NotITG
	* Applies a vertical translation to a specific texture.
	* @param {number} index The index of the texture.
	* @param {number} translateY The Y translation to apply, in pixels.
	*/
	SetTextureTranslateY(index: number, translateY: number): void;

	/**
	* NotITG
	* Determines if the Z buffer should be used. It is enabled by default.
	* 
	*/
	SetUseZBuffer(enable: boolean): void;
}