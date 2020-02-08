import './ActorFrame';
import './Steps';
import { Trail } from './Trail';
import '../enum/Diffculty';

declare interface DifficultyMeter extends ActorFrame {
	/**
	* ITG
	* Loads specific graphics in path to the DifficultyMeter.
	* @param {string} path The path to load.
	*/
	Load(path: string): void;

	/**
	* ITG
	* Sets the DifficultyMeter's data from meter and difficulty.
	* @param {number} meter The meter to use.
	* @param {Difficulty} difficulty The difficulty to use. See ITGDifficulty. (must be between 0 and 5)
	*/
	SetFromMeterAndDifficulty(meter: number, difficulty: Difficulty): void;

	/**
	* ITG
	* Sets the DifficultyMeter's data from steps.
	* @param {Steps} steps The Steps instance to use.
	*/
	SetFromSteps(steps: Steps): void;

	/**
	* ITG
	* Sets the DifficultyMeter's data from trail.
	* 
	*/
	SetFromTrail(trail: Trail): void;
}