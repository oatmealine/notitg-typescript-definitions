declare const DISPLAY: RageDisplay;

declare interface RageDisplay {
	/**
	* NotITG
	* Change the centering point of the screen by translating the screen or editing its dimensions.
	* @param {number} translateX The X translation to apply. 0 by default.
	* @param {number} translateY The Y translation to apply. 0 by default.
	* @param {number} addWidth The width to add. 0 by default.
	* @param {number} addHeight The height to add. 0 by default.
	*/
	ChangeCentering(translateX: number, translateY: number, addWidth: number, addHeight: number): void;

	/**
	* NotITG
	* Gets the cumulative FPS.
	*/
	GetCumFPS(): number;

	/**
	* NotITG
	* Gets the height of the display (game window).
	*/
	GetDisplayHeight(): number;

	/**
	* NotITG
	* Gets the width of the display (game window).
	*/
	GetDisplayWidth(): number;

	/**
	* NotITG
	* Gets the number of FPS.
	*/
	GetFPS(): number;

	/**
	* NotITG Version 2
	* Gets the vendor of the Graphic Driver.
	*/
	GetVendor(): string;

	/**
	* NotITG
	* Gets the VPF.
	*/
	GetVPF(): number;
}