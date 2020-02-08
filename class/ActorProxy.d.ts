declare interface ActorProxy extends Actor {
	/**
	* NotITG
	* Gets the target of the ActorProxy.
	*/
	GetTarget(): Actor;

	/**
	* NotITG
	* Sets the target of the ActorProxy to actor.
	* @param {Actor} actor The Actor that will be targetted.
	*/
	SetTarget(actor: Actor): void;
}