declare interface Actor {
	/**
	* ITG
	* Plays the next Actor methods at an accelerated rate (time * time). What is a tween ?
	* @param {number} time The duration, in seconds. (must be greater or equal than 0)
	*/
	accelerate(time: number): void;

	/**
	* ITG
	* Sets the blend mode to additive, or to normal. Normal blend is set by default. See ITGActor.blend() for other possible values.What is a blend mode ?
	* @param {number} enable 1 to set to additive mode, 0 to set to normal mode. (must be equal to 0, or 1)
	*/
	additiveblend(enable: number): void;

	/**
	* ITG
	* Adds x to the Actor's current horizontal position.
	* @param {number} x The x position to add.
	*/
	addx(x: number): void;

	/**
	* ITG
	* Adds y to the Actor's current vertical position.
	* @param {number} y The y position to add.
	*/
	addy(y: number): void;

	/**
	* ITG
	* Adds z to the Actor's current depth position.
	* @param {number} z The z position to add.
	*/
	addz(z: number): void;

	/**
	* NotITG
	* Does both NotITGActor.halign() and NotITGActor.valign().
	* @param {number} hPos The horizontal position. For example, 0 will align to the left, 0.5 to the center, and 1 to the right. (must be between 0 and 1)
	*	@param {number} vPos The vertical position. For example, 0 will align to the top, 0.5 to the middle, and 1to the bottom. (must be between 0 and 1) 
	*/
	align(hPos: number, vPos: number): void;

	/**
	* ITG
	* Enables/Disables the Actor's animation.
	* @param {number} enable 1 to enable or resume the animation, 0 to disable it. (must be equal to 0, or 1)
	*/
	animate(enable: number): void;

	/**
	* ITG
	* Sets the Actor's aux value. What is an aux value ?
	* @param {number} value The value to set as Actor's aux value.
	*/
	aux(value: number): void;

	/**
	* ITG
	* Sets the cull mode to either "back", or "none". "none" is set by default. See ITGActor.cullmode() for other possible values.
	* @param {number} enable 1 to set the cull mode to "back", 0 to set to "none". (must be equal to 0, or 1)
	*/
	backfacecull(enable: number): void;

	/**
	* ITG
	* Sets the Actor's base horizontal zoom. Used when zooming the Actor.
	* @param {number} x The x position for the Actor's base zoom.
	*/
	basezoomx(x: number): void;

	/**
	* ITG
	* Sets the Actor's base vertical zoom. Used when zooming the Actor.
	* @param {number} y The y position for the Actor's base zoom.
	*/
	basezoomy(y: number): void;

	/**
	* ITG
	* Sets the Actor's blend mode. It is "normal" by default. What is a blend mode ?
	* @param {string} mode The blend mode to apply. (must be equal to "normal", "add", "subtract", "modulate", "copysrc", "alphamask", "alphaknockout", "alphamultiply", "weightedmultiply", "invertdest", or "noeffect")
	*/
	blend(mode: string): void;

	/**
	* ITG
	* Moves the Actor up and down. The movement is the same as a math sinus function. What is an Actor effect ?
	*/
	bob(): void;

	/**
	* ITG
	* Bounces the Actor. Similar to ITGActor.bob(). What is an Actor effect ?
	*/
	bounce(): void;

	/**
	* ITG
	* Plays the next Actor methods with a bounce effect at the beginning. What is a tween ?
	* @param {number} time The duration, in seconds. (must be greater or equal than 0)
	*/
	bouncebegin(time: number): void;

	/**
	* ITG
	* Plays the next Actor methods with a bounce effect at the end. What is a tween ?
	* @param {number} time The duration, in seconds. (must be greater or equal than 0)
	*/
	bounceend(time: number): void;

	/**
	* ITG
	* Sets if the z-buffer must be cleared. By default, it isn't cleared.
	* @param {number} enable If 1, clear the z-buffer. If 0, stop clearing it. (must be equal to 0, or 1)
	*/
	clearzbuffer(enable: number): void;

	/**
	* NotITG
	* Executes Actor methods on the actor, with the cmd notation. What is an Actor Command ?
	* @param {string} cmds The commands to apply, in the cmd notation.
	* @param {undefined} undefined 
* @param {undefined} undefined 
	*/
	cmd(cmds: string): void;

	/**
	* ITG
	* Crops the Actor from the bottom.
	* @param {number} percent The percentage of the Actor that will be cropped. (must be between 0 and 1)
	*/
	cropbottom(percent: number): void;

	/**
	* ITG
	* Crops the Actor from the left.
	* @param {number} percent The percentage of the Actor that will be cropped. (must be between 0 and 1)
	*/
	cropleft(percent: number): void;

	/**
	* ITG
	* Crops the Actor from the right.
	* @param {number} percent The percentage of the Actor that will be cropped. (must be between 0 and 1)
	*/
	cropright(percent: number): void;

	/**
	* ITG
	* Crops the Actor from the top.
	* @param {number} percent The percentage of the Actor that will be cropped. (must be between 0 and 1)
	*/
	croptop(percent: number): void;

	/**
	* ITG
	* Sets the cull mode of the Actor. It is "none" by default.
	* @param {string} mode The cull mode to apply. (must be equal to "back", "front", or "none")
	*/
	cullmode(mode: string): void;

	/**
	* ITG
	* Plays the next Actor methods at a decelerated rate (1 - (1 - time) * (1 - time)). What is a tween ?
	* @param {number} time The duration, in seconds. (must be greater or equal than 0)
	*/
	decelerate(time: number): void;

	/**
	* ITG
	* Sets which colors are appearing in the Actor, allowing to color it.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffuse(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Sets the Actor's alpha value, without modifying the colors value.
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffusealpha(alpha: number): void;

	/**
	* ITG
	* Switches the Actor between 2 custom colors. You can set them by using ITGActor.effectcolor1() and ITGActor.effectcolor2().What is an Actor effect ?
	*/
	diffuseblink(): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but only colors the bottom side of the Actor.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffusebottomedge(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but totally ignores the alpha argument. (It's still needed though)
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffusecolor(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but only colors the left side of the Actor.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffuseleftedge(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but only colors the lower-left corner of the Actor.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffuselowerleft(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but only colors the lower-right corner of the Actor.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffuselowerright(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Similar to ITGActor.diffuseblink(), but the effect will start from the second color to the first linearly, and then go back to the second.You can set the colors by using ITGActor.effectcolor1() and ITGActor.effectcolor2().What is an Actor effect ?
	*/
	diffuseramp(): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but only colors the right side of the Actor.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffuserightedge(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Similar to ITGActor.diffuseblink(), but the colors will switch sinusoidally. You can set the colorsby using ITGActor.effectcolor1() and ITGActor.effectcolor2().What is an Actor effect ?
	*/
	diffuseshift(): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but only colors the top side of the Actor.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffusetopedge(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but only colors the upper-left corner of the Actor.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffuseupperleft(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Similar to ITGActor.diffuse(), but only colors the upper-right corner of the Actor.
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	diffuseupperright(red: number, green: number, blue: number, alpha: number): void;

	/**
	* NotITG
	* (Re-)Draws the Actor manually. Can be useful, for example, with NotITGActorFrame.SetDrawFunction().
	*/
	Draw(): void;

	/**
	* ITG
	* Changes the draw order. It is 0 by default.
	* @param {number} order The order. Larger values are displayed first.
	*/
	draworder(order: number): void;

	/**
	* ITG
	* Sets the effect clock of the Actor to clock. It is "timer" by default. What is an Actor effect ?
	* @param {string} clock The clock to apply. (must be equal to "timer", "beat", "music", or "bgm")
	*/
	effectclock(clock: string): void;

	/**
	* ITG
	* Changes the first color of effects. White (1,1,1,1) by default. Used with ITGActor.diffuseblink(),ITGActor.diffuseramp(), and ITGActor.diffuseshift().What is an Actor effect ?
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	effectcolor1(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Changes the second color of effects. White (1,1,1,1) by default. Used with ITGActor.diffuseblink(),ITGActor.diffuseramp(), and ITGActor.diffuseshift().What is an Actor effect ?
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	effectcolor2(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Sets the global delay of every effects applied to the Actor. What is an Actor effect ?
	* @param {number} delay The delay to apply, in seconds.
	*/
	effectdelay(delay: number): void;

	/**
	* ITG
	* Sets the magnitude for each axis for effects like ITGActor.vibrate(). What is an Actor effect ?
	* @param {number} x The magnitude on the x axis.
	* @param {number} y The magnitude on the y axis.
	* @param {number} z The magnitude on the z axis.
	*/
	effectmagnitude(x: number, y: number, z: number): void;

	/**
	* ITG
	* Sets the offset of effects to time. What is an Actor effect ?
	* @param {number} time The offset to apply, in seconds.
	*/
	effectoffset(time: number): void;

	/**
	* ITG
	* Sets the period of effects to time. What is an Actor effect ?
	* @param {number} time The period to apply, in seconds.
	*/
	effectperiod(time: number): void;

	/**
	* ITG
	* Fades the Actor from the bottom.
	* @param {number} percent The percentage of the Actor that will be faded. (must be between 0 and 1)
	*/
	fadebottom(percent: number): void;

	/**
	* ITG
	* Fades the Actor from the left.
	* @param {number} percent The percentage of the Actor that will be faded. (must be between 0 and 1)
	*/
	fadeleft(percent: number): void;

	/**
	* ITG
	* Fades the Actor from the right.
	* @param {number} percent The percentage of the Actor that will be faded. (must be between 0 and 1)
	*/
	faderight(percent: number): void;

	/**
	* ITG
	* Fades the Actor from the top.
	* @param {number} percent The percentage of the Actor that will be faded. (must be between 0 and 1)
	*/
	fadetop(percent: number): void;

	/**
	* ITG
	* Finishes instantly the current and/or queued tween(s).
	*/
	finishtweening(): void;

	/**
	* ITG
	* Gets the Actor's aux value. What is an aux value ?
	*/
	getaux(): number;

	/**
	* ITG
	* Gets the Actor's base zoom value at horizontal (X) axis.
	*/
	GetBaseZoomX(): number;

	/**
	* ITG
	* Gets the current effect delta of the Actor.
	*/
	GetEffectDelta(): number;

	/**
	* ITG
	* Gets the effect magnitude currently applied to the Actor. Since the effect magnitude is composed ofthree floats(see ITGActor.effectmagnitude()), this method returns three floats.
	*/
	geteffectmagnitude(): number;

	/**
	* ITG
	* Gets the current Actor's height.
	*/
	GetHeight(): number;

	/**
	* NotITG
	* Gets the current name of the Actor. It can be set by either using NotITGActor.SetName(), or by adding a "Name" attribute.
	*/
	GetName(): string;

	/**
	* ITG
	* Gets the current rotations of the Actor for each axis. Since there are 3 axis, this method returns three floats.You can set them by using ITGActor.rotationx(), ITGActor.rotationy(), and ITGActor.rotationz(), or add / subtract values to them using ITGActor.pitch(), ITGActor.heading(), and ITGActor.roll().
	*/
	getrotation(): number;

	/**
	* ITG
	* Gets the number of seconds an Actor is running an effect. What is an Actor effect ?
	*/
	GetSecsIntoEffect(): number;

	/**
	* ITG
	* Gets the current Actor's width.
	*/
	GetWidth(): number;

	/**
	* ITG
	* Gets the Actor's current X position. You can set it using ITGActor.x().
	*/
	GetX(): number;

	/**
	* ITG
	* Gets the Actor's current Y position. You can set it using ITGActor.y().
	*/
	GetY(): number;

	/**
	* ITG
	* Gets the Actor's current Z position. You can set it using ITGActor.z().
	*/
	GetZ(): number;

	/**
	* ITG
	* Gets the Actor's current Zoom. It can be set using ITGActor.zoom().
	*/
	GetZoom(): number;

	/**
	* ITG
	* Gets the Actor's current Zoom. It can be set using ITGActor.zoomx() or ITGActor.zoomto().
	*/
	GetZoomX(): number;

	/**
	* ITG
	* Gets the Actor's current Zoom. It can be set using ITGActor.zoomy() or ITGActor.zoomto().
	*/
	GetZoomY(): number;

	/**
	* ITG
	* Gets the Actor's current Zoom. It can be set using ITGActor.zoomz().
	*/
	GetZoomZ(): number;

	/**
	* ITG
	* Sets the glow color of the Actor. (Used with ITGActor.glowblink() and ITGActor.glowshift()) What isan Actor effect ?
	* @param {number} red The red hue value. (must be between 0 and 1)
	* @param {number} green The green hue value. (must be between 0 and 1)
	* @param {number} blue The blue hue value. (must be between 0 and 1)
	* @param {number} alpha The alpha (opacity) value. (0 = transparent, 1 = opaque) (must be between 0 and 1)
	*/
	glow(red: number, green: number, blue: number, alpha: number): void;

	/**
	* ITG
	* Makes the Actor glow immediately between its original color and the glow color (set with ITGActor.glow()).What is an Actor effect ?
	*/
	glowblink(): void;

	/**
	* ITG
	* Makes the Actor glow smoothly between its original color and the glow color (set with ITGActor.glow()).What is an Actor effect ?
	*/
	glowshift(): void;

	/**
	* NotITG
	* Sets the Actor's horizontal alignment. It is 0.5 by default.
	* @param {number} hPos The horizontal position. For example, 0 will align to the left, 0.5 to the center, and1 to the right. (must be between 0 and 1) 
	*/
	halign(hPos: number): void;

	/**
	* ITG
	* Adds roty to the vertical (called Y, yaw, or heading) axis' rotation. Always rotates around the top	- left corner of the screen.
	* @param {number} roty The value, in degrees, to add.
	*/
	heading(roty: number): void;

	/**
	* ITG
	* Hides the Actor for time seconds.
	* @param {number} time The duration, in seconds. (must be greater or equal than 0)
	*/
	hibernate(time: number): void;

	/**
	* ITG
	* Hides the Actor.
	* @param {number} enable 1 to hide the Actor, 0 to keep it visible. (must be equal to 0, or 1)
	*/
	hidden(enable: number): void;

	/**
	* ITG
	* Sets the Actor's horizontal alignment. It is "center" by default. For a more precise alignment, see
	* @param {string} hAlign 
	*/
	horizalign(hAlign: string): void;

	/**
	* string hAlign : The horizontal alignment to apply. (must be equal to "left", "center", or "right")nITG
	* Multiply the speed of every active and/or queued tween of the Actor.
	* @param {number} factor The factor to apply. (must be greater or equal than 0)
	*/
	hurrytweening(factor: number): void;

	/**
	* ITG
	* Plays the next Actor methods linearly. What is a tween ?
	* @param {number} time The duration, in seconds. (must be greater or equal than 0)
	*/
	linear(time: number): void;

	/**
	* ITG
	* Disables every effects on the Actor, and instead use an Actor Command to draw manually the Actor. Use this wisely, this hasn't been tested well, and can be resource-expensive.
	* @param {string} name The name of the command.
	*/
	luaeffect(name: string): void;

	/**
	* ITG
	* Pauses the animations occuring on the Actor.
	*/
	pause(): void;

	/**
	* ITG
	* Adds rotx to the horizontal (called X, or pitch) axis' rotation. Always rotates around the top-leftcorner of the screen.
	* @param {number} rotx The value, in degrees, to add.
	*/
	pitch(rotx: number): void;

	/**
	* ITG
	* Resumes the animations occuring on the Actor.
	*/
	play(): void;

	/**
	* ITG
	* Calls immediately a command named commandName .. "Command". What is an Actor Command ?
	* @param {string} commandName The name of the command to call.
	*/
	playcommand(commandName: string): void;

	/**
	* ITG
	* Sets the position of the animation.
	* @param {number} position The position.
	*/
	position(position: number): void;

	/**
	* ITG
	* Makes the Actor growing and shrinking. What is an Actor effect ?
	*/
	pulse(): void;

	/**
	* ITG
	* Queues a command named commandName .. "Command" to be played. This is usually used right after doing a ITGActor.sleep().What is an Actor Command ?
	* @param {string} commandName The name of the command to queue.
	* @param {undefined} undefined 
	* @param {undefined} undefined 
	* @param {undefined} undefined 
	*/
	queuecommand(commandName: string): void;

	/**
	* ITG
	* Queues a message. Rarely used, you might want to use ITGMessageManager.Broadcast(). What is a message ?
	* @param {string} messageName The name of the message to queue.
	*/
	queuemessage(messageName: string): void;

	/**
	* ITG
	* Makes the Actor change colors continually, through every color of a rainbow. What is an Actor effect ?
	*/
	rainbow(): void;

	/**
	* ITG
	* Adds rotz to the Z/roll axis' rotation. Always rotates around the top-left corner of the screen.
	* @param {number} rotz The value, in degrees, to add.
	*/
	roll(rotz: number): void;

	/**
	* ITG
	* Sets the X/Pitch axis' rotation.
	* @param {number} rotx The rotation to apply, in degrees.
	*/
	rotationx(rotx: number): void;

	/**
	* ITG
	* Sets the Y/Yaw/Heading axis' rotation.
	* @param {number} roty The rotation to apply, in degrees.
	*/
	rotationy(roty: number): void;

	/**
	* ITG
	* Sets the Z/Roll axis' rotation.
	* @param {number} rotz The rotation to apply, in degrees.
	*/
	rotationz(rotz: number): void;

	/**
	* ITG
	* Scales the Actor to cover a rectangle. To keep the aspect ratio of the Actor, use ITGActor.scaletofit().
	* @param {number} left The left coordinate of the rectangle.
	* @param {number} top The top coordinate of the rectangle.
	* @param {number} right The right coordinate of the rectangle.
	* @param {number} bottom The bottom coordinate of the rectangle.
	*/
	scaletocover(left: number, top: number, right: number, bottom: number): void;

	/**
	* ITG
	* Similar to ITGActor.scaletocover(), but keep the aspect ratio.
	* @param {number} left The left coordinate of the rectangle.
	* @param {number} top The top coordinate of the rectangle.
	* @param {number} right The right coordinate of the rectangle.
	* @param {number} bottom The bottom coordinate of the rectangle.
	*/
	scaletofit(left: number, top: number, right: number, bottom: number): void;

	/**
	* NotITG
	* Sets the height of the Actor.
	* @param {number} height The height, in pixels.
	*/
	SetHeight(height: number): void;

	/**
	* NotITG
	* Set the Actor's name to name. You might want to use a "Name" attribute in the tag, if the name won'
	* @param {string} name The name to set.
	*/
	SetName(name: string): void;

	/**
	* ITG
	* Sets the state of the Actor.
	* @param {number} state The state of the animation.
	*/
	setstate(state: number): void;

	/**
	* NotITG
	* Enables/Disables the texture filtering of the Actor (= Applying a cubic interpolation to the pixelsor not).It is enabled by default.
	* @param {boolean} arg If true, enables the texture filtering.
	*/
	SetTextureFiltering(arg: boolean): void;

	/**
	* NotITG
	* Sets the width of the Actor.
	* @param {number} width The width, in pixels.
	*/
	SetWidth(width: number): void;

	/**
	* ITG
	* Sets the shadow's length of the Actor.
	* @param {number} length The length of the shadow.
	*/
	shadowlength(length: number): void;

	/**
	* NotITG
	* Skews the Actor horizontally, based on the original width of the Actor. (It is basically ITGActor.skewx() with amount divided by the original(unzoomed) width of the Actor.) 
	* @param {number} amount The greater it is, the bigger the Actor will be skewed.
	*/
	skewto(amount: number): void;

	/**
	* ITG
	* Skews the Actor horizontally.
	* @param {number} amount The greater it is, the bigger the Actor will be skewed.
	*/
	skewx(amount: number): void;

	/**
	* ITG
	* Plays the next Actor methods after time seconds. Please note that only Actor methods are affected, and not any other commands, or lua calls / affectations.ITGActor.playcommand() also won't be affected.What is a tween ?
	* @param {number} time The duration, in seconds. (must be greater or equal than 0)
	*/
	sleep(time: number): void;

	/**
	* ITG
	* Spins the Actor continually. What is an Actor effect ?
	*/
	spin(): void;

	/**
	* ITG
	* Plays the next Actor methods at an accelerated rate until they go beyong the desired end state, andthen springs back.What is a tween ?
	* @param {number} time The duration, in seconds. (must be greater or equal than 0)
	*/
	spring(time: number): void;

	/**
	* ITG
	* Stops any running effects.
	*/
	stopeffect(): void;

	/**
	* ITG
	* Stops any running tweens. If you want them to finish instantly, use ITGActor.finishtweening().
	*/
	stoptweening(): void;

	/**
	* ITG
	* Stretches the Actor to a rectangle defined by 2 points: The top-left corner, and the bottom-right corner.
	* @param {number} x1 The X coordinate of the top-left corner.
	* @param {number} y1 The Y coordinate of the top-left corner.
	* @param {number} x2 The X coordinate of the bottom-right corner.
	* @param {number} y2 The Y coordinate of the bottom-right corner.
	*/
	stretchto(x1: number, y1: number, x2: number, y2: number): void;

	/**
	* ITG
	* Enables/Disables the texture wrapping. It is disabled by default.
	* @param {number} enable 1 to set to use texture wrapping, or 0 to disable it. (must be equal to 0, or 1)
	*/
	texturewrapping(enable: number): void;

	/**
	* NotITG
	* Sets the Actor's horizontal alignment. It is 0.5 by default.
	* @param {number} vPos The vertical position. For example, 0 will align to the top, 0.5 to the middle, and 1to the bottom. (must be between 0 and 1) 
	*/
	valign(vPos: number): void;

	/**
	* ITG
	* Sets the Actor's vertical alignment. It is "middle" by default. For a more precise alignment, see NotITGActor.valign().
	* @param {string} hAlign  The vertical alignment to apply. (must be equal to "left", "middle", or "right")
	*/
	vertalign(hAlign: string): void;

	/**
	* ITG
	* Vibrates the Actor. What is an Actor effect ?
	*/
	vibrate(): void;

	/**
	* ITG
	* Makes the Actor visible. (It is just ITGActor.hidden(), but inverted.)
	* @param {number} enable 1 to make the Actor visible, 0 to hide it. (must be equal to 0, or 1)
	*/
	visible(enable: number): void;

	/**
	* ITG
	* Wags the Actor. What is an Actor effect ?
	*/
	wag(): void;

	/**
	* ITG
	* Sets the X position of the Actor.
	* @param {number} xPos The X position, in pixels.
	*/
	x(xPos: number): void;

	/**
	* NotITG
	* Sets both X and Y position of the Actor. See ITGActor.x() and ITGActor.y().
	* @param {number} xPos The X position, in pixels.
	* @param {number} yPos The Y position, in pixels.
	*/
	xy(xPos: number, yPos: number): void;

	/**
	* ITG
	* Sets the Y position of the Actor.
	* @param {number} yPos The Y position, in pixels.
	*/
	y(yPos: number): void;

	/**
	* ITG
	* Sets the Z position of the Actor.
	* @param {number} zPos The Z position, in pixels.
	*/
	z(zPos: number): void;

	/**
	* ITG
	* Sets the Z bias of the Actor. It is 0 by default.
	* @param {number} bias The bias to apply.
	*/
	zbias(bias: number): void;

	/**
	* ITG
	* Enables/Disables the z-buffer of the Actor.
	* @param {number} enable 1 to enable the z-buffer, 0 to disable it. (must be equal to 0, or 1)
	*/
	zbuffer(enable: number): void;

	/**
	* ITG
	* Zooms the actor to scale scale.
	* @param {number} scale The scaling of the zoom.
	*/
	zoom(scale: number): void;

	/**
	* ITG
	* Zooms the Actor differently on X and Y axis. It just calls ITGActor.zoomtowidth() and ITGActor.zoomtoheight().
	* @param {number} width The width to get.
	* @param {number} height The height to get.
	*/
	zoomto(width: number, height: number): void;

	/**
	* ITG
	* Zooms the Actor on the Y axis.
	* @param {number} height The height to get.
	*/
	zoomtoheight(height: number): void;

	/**
	* ITG
	* Zooms the Actor on the X axis.
	* @param {number} width The width to get.
	*/
	zoomtowidth(width: number): void;

	/**
	* ITG
	* Zooms the actor on the X axis to scale scale.
	* @param {number} scale The scaling of the zoom.
	*/
	zoomx(scale: number): void;

	/**
	* ITG
	* Zooms the actor on the Y axis to scale scale.
	* @param {number} scale The scaling of the zoom.
	*/
	zoomy(scale: number): void;

	/**
	* ITG
	* Zooms the actor on the Z axis to scale scale.
	* @param {number} scale The scaling of the zoom.
	*/
	zoomz(scale: number): void;

	/**
	* ITG
	* Sets the z testing mode to either "writeonpass", or "off". See ITGActor.ztestmode() for other possible values.
	* @param {number} enable 1 to set z testing mode to "writeonpass", 0 to disable z testing. (must be equal to 0,or 1) 
	*/
	ztest(enable: number): void;

	/**
	* ITG
	* Sets the z testing mode. It is "off" by default.
	* @param {string} mode The z testing mode to apply. (must be equal to "off", "writeonpass", or "writeonfail") 
	*/
	ztestmode(mode: string): void;

	/**
	* ITG
	* Enables z writing on the Actor. It is disabled by default.
	* 
	*/
	zwrite(enable: number): void;
}