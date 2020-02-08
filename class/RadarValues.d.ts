import '../enum/RadarCategory';

declare interface RadarValues {
	/**
	* ITG
	* Gets the value of category.
	* @param {RadarCategory} category The RadarCategory to get. See ITGRadarCategory.
	*/
	GetValue(category: RadarCategory): number;
}