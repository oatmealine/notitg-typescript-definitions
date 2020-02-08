import './ActorFrame';

declare interface FadingBanner extends ActorFrame {
	/**
	* ITG
	* Loads the Banner from song.
	* @param {Song} song The song to use.
	*/
	LoadFromSong(song: Song): void;

	/**
	* ITG
	* Scales the Banner to the specified dimensions. Identical to ITGSprite.scaletoclipped().
	* @param {number} width The target width.
	*/
	ScaleToClipped(width: number, height: number): void;
}