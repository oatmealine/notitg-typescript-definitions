declare interface ActorFrame extends Actor {
	/**
	* ITG
	* Sets the ActorFrame's Field Of View.
	* @param {number} fov The FOV to apply.
	*/
	fov(fov: number): void;

	/**
	* ITG
	* Gets the Actor of a child with its name equal to name, or nil.
	* @param {string} name The name of the child.
	*/
	GetChild(name: string): Actor;

	/**
	* NotITG
	* Gets the Actor of a child at index index.
	* @param {number} index The index of the child. (must be greater or equal than 1)
	*/
	GetChildAt(index: number): Actor;

	/**
	* ITG
	* Gets the number of children in the ActorFrame.
	*/
	GetNumChildren(): number;

	/**
	* ITG
	* Enables/Disables the command propagation behavior on the ActorFrame. Disabled by default.
	* @param {number} enable 1 to enable propagation, 0 to disable it. (must be equal to 0, or 1)
	*/
	propagate(enable: number): void;

	/**
	* ITG
	* Enables/Disables the "Draw by Z Position" behavior on the ActorFrame. Disabled by default.
	* @param {boolean} enable Enables or not the "Draw By Z" behavior.
	*/
	SetDrawByZPosition(enable: boolean): void;

	/**
	* NotITG
	* Sets the Draw function of the ActorFrame to drawFunc.
	* @param {Function} drawFunc The function that will be called at every draw attempt.
	*/
	SetDrawFunction(drawFunc: Function): void;

	/**
	* ITG
	* Alias for ITGActorFrame.fov(). Sets the ActorFrame's Field Of View.
	* @param {number} fov The FOV to apply.
	*/
	SetFOV(fov: number): void;

	/**
	* ITG
	* Sets the update function of the ActorFrame to a command of it.
	* @param {string} name The name of the command that will be called.
	*/
	SetUpdateCommand(name: string): void;

	/**
	* ITG
	* Sets the update function of the ActorFrame to updateFunc.
	* @param {Function} updateFunc The function that will be called.
	*/
	SetUpdateFunction(updateFunc: Function): void;

	/**
	* ITG
	* Sets the update function's rate for the ActorFrame.
	* @param {number} rate The rate to apply.
	*/
	SetUpdateRate(rate: number): void;

	/**
	* NotITG
	* Sets the vanishing point of the ActorFrame. It is on the center of the screen by default.
	* @param {number} x The X coordinate.
	* @param {number} y The Y coordinate.
	*/
	SetVanishPoint(x: number, y: number): void;

	/**
	* NotITG
	* Sets the horizontal coordinate of the vanishing point of the ActorFrame. SCREEN_CENTER_X by default. See also NotITGActorFrame.SetVanishPoint().
	* @param {number} x The X coordinate.
	*/
	SetVanishX(x: number): void;

	/**
	* NotITG
	* Sets the vertical coordinate of the vanishing point of the ActorFrame. SCREEN_CENTER_Y by default. See also NotITGActorFrame.SetVanishPoint().
	* 
	*/
	SetVanishY(y: number): void;
}