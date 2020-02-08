declare const SONGMAN: SongManager;

declare interface SongManager {
	/**
	* ITG
	* Gets a course matching name, if found.
	* @param {string} name The name to match.
	*/
	FindCourse(name: string): Course;

	/**
	* ITG
	* Gets a song matching name, if found.
	* @param {string} name The name to match.
	*/
	FindSong(name: string): Song;

	/**
	* ITG
	* Gets a table of Course instances including every installed course.
	* @param {boolean} includeAutogen true to include autogen courses.
	*/
	GetAllCourses(includeAutogen: boolean): Object | Array<any>;

	/**
	* ITG
	* Gets a table of Song instances including every installed song.
	*/
	GetAllSongs(): Object | Array<any>;

	/**
	* ITG
	* Gets a random course.
	*/
	GetRandomCourse(): Course;

	/**
	* ITG
	* Gets a random song.
	*/
	GetRandomSong(): Song;
}