declare interface HelpDisplay extends BitmapText {
	/**
	* ITG
	* Returns two tables containing the tips and the alternate tips.
	*/
	gettips(): Object | Array<any>;

	/**
	* ITG
	* Sets the tips / alternate tips.
	* @param {Object | Array<any>} tips A table containing the tips to set.
	*/
	settips(tips: Object | Array<any>, altTips: Object | Array<any>): void;
}