declare interface Song {
	/**
	* ITG
	* Gets a table of all the Steps.
	*/
	GetAllSteps(): Object | Array<any>;

	/**
	* ITG
	* Gets the path of the background image.
	*/
	GetBackgroundPath(): string;

	/**
	* ITG
	* Gets the path of the banner.
	*/
	GetBannerPath(): string;

	/**
	* ITG
	* Gets the artist name.
	*/
	GetDisplayArtist(): string;

	/**
	* ITG
	* Get the full title. (Title .. " " .. Subtitle)
	*/
	GetDisplayFullTitle(): string;

	/**
	* ITG
	* Gets the main title.
	*/
	GetDisplayMainTitle(): string;

	/**
	* ITG
	* Gets the genre.
	*/
	GetGenre(): string;

	/**
	* ITG
	* Gets the group name (folder) where the song is.
	*/
	GetGroupName(): string;

	/**
	* ITG
	* Gets the directory of the song.
	*/
	GetSongDir(): string;

	/**
	* ITG
	* Gets a table of all the Steps matching stepsType.
	* @param {StepsType} stepsType The steps type. See ITGStepsType.
	*/
	GetStepsByStepsType(stepsType: StepsType): void;

	/**
	* ITG
	* Gets the transliterated artist name.
	*/
	GetTranslitArtist(): string;

	/**
	* ITG
	* Gets the transliterated full title. (Title .. " " .. Subtitle)
	*/
	GetTranslitFullTitle(): string;

	/**
	* ITG
	* Gets the transliterated main title.
	*/
	GetTranslitMainTitle(): string;

	/**
	* ITG
	* Returns true if the song is custom (loaded by a player with a USB drive).
	*/
	IsCustomSong(): boolean;

	/**
	* ITG
	* Returns true if the song will cost 2 credits.
	*/
	IsLong(): boolean;

	/**
	* ITG
	* Returns true if the song will cost 3 credits.
	*/
	IsMarathon(): boolean;

	/**
	* ITG
	* Gets the length of the music, in seconds.
	*/
	MusicLengthSeconds(): number;
}