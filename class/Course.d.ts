
/**
* You can get an instance of Course by using ITGGameState.GetCurrentCourse(), ITGSongManager.FindCourse(), or ITGSongManager.GetRandomCourse().
*/
declare interface Course {
	/**
	* ITG
	* Gets the directory of the Course.
	*/
	GetCourseDir(): string;

	/**
	* ITG
	* Gets the full title of the Course.
	*/
	GetDisplayFullTitle(): string;

	/**
	* ITG
	* Gets the current PlayMode. (1 = Nonstop, 2 = Oni, 3 = Endless)
	*/
	GetPlayMode(): number;

	/**
	* ITG
	* Gets the full transliterated title of the Course.
	*/
	GetTranslitFullTitle(): string;
}