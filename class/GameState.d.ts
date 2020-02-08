import '../enum/CoinMode';
import '../enum/Diffculty';
import '../enum/InputMode';
import '../enum/Premium';
import '../enum/SortOrder';
import './Game';
import { Steps } from './Steps';
import { Trail } from './Trail';
import './Course';

declare const GAMESTATE: GameState;

declare interface GameState {
	/**
* ITG
* Returns true if any player has performed a ranked game (= not disqualified from ranking).
*/
	AnyPlayerHasRankingFeats(): boolean;

	/**
	* ITG
	* Executes cmd, eventually for a specific player or for both.
	* @param {string} cmd The command to execute.
	* @param {number} playerNumber Optional. If given, the command will be executed only for this player. Beware ! 1 = Player 1, 2 = Player 2, it isn't like the others methods involving a playerNumber argument ! (must be between 1 and 2)
	*/
	ApplyGameCommand(cmd: string, playerNumber: number): void;

	/**
	* NotITG Version 2
	* Optimized shortcut for ITGGameState.ApplyGameCommand().
	* @param {string} mods The mods to apply.
	* @param {number} playerNumber Optional. If given, the command will be executed only for this player. Beware ! 1 = Player 1, 2 = Player 2, it isn't like the others methods involving a playerNumber argument ! (must be between 1 and 2)
	*/
	ApplyModifiers(mods: string, playerNumber?: number): void;

	/**
	* ITG
	* Executes cmd for both players, at the next "update" of the game (basically at the next frame).
	* @param {string} cmd The command to execute.
	*/
	DelayedGameCommand(cmd: string): void;

	/**
	* ITG
	* Gets the Environment table of the Game.
	*/
	Env(): Object;

	/**
	* NotITG
	* Finishes the song. Equal to "Send Notes Ended" in the Debug Menu.
	*/
	FinishSong(): void;

	/**
	* ITG
	* Gets the current coin mode. See ITGCoinMode.
	*/
	GetCoinMode(): CoinMode;

	/**
	* ITG
	* Gets the remaining coins.
	*/
	GetCoins(): number;

	/**
	* ITG
	* Gets the amount of coins needed to join. (if 3 coins are needed, and 1 is inserted, it will return 2)
	*/
	GetCoinsNeededToJoin(): number;

	/**
	* ITG
	* Gets the index of the current song in the current course. (Indexes start from 0 with this method !)
	*/
	GetCourseSongIndex(): number;

	/**
	* ITG
	* Gets the current BPS. Multiply this by 60 to get the current BPM.
	*/
	GetCurBPS(): number;

	/**
	* ITG
	* Gets the current Course.
	*/
	GetCurrentCourse(): Course;

	/**
	* ITG
	* Gets the current Game.
	*/
	GetCurrentGame(): Game;

	/**
	* ITG
	* Gets the current Song-
	*/
	GetCurrentSong(): Song;

	/**
	* ITG
	* Gets the current Steps for the specified Player.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetCurrentSteps(playerNumber: number): Steps;

	/**
	* ITG
	* Gets the current Trail for the specified Player.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetCurrentTrail(playerNumber: number): Trail;

	/**
	* ITG
	* Gets the easiest difficulty chosen by the players. See ITGDifficulty.
	*/
	GetEasiestStepsDifficulty(): Difficulty;

	/**
	* ITG
	* Gets the source Steps for the editor, or nil if not in Edit Mode.
	*/
	GetEditSourceSteps(): Steps;

	/**
	* ITG
	* Gets the value stored in the Game's Environment Table, with the key key. You can get the entire table by using ITGGameState.Env().
	* @param {string} key The key to store into the table.
	*/
	GetEnv(key: string): string;

	/**
	* NotITG
	* Returns names from each files and directory in path. This function returns a variable amount of strings, you should call it with table.pack().
	* @param {string} path The path to list.
	* @param {undefined} undefined 
	* @param {undefined} undefined 
	* @example ```ts
	local filesAndDirs = table.pack(GAMESTATE:GetFileStructure()); -- Put any returned strings into a unique table.
	NotITG```
	*/
	GetFileStructure(path: string): string;

	/**
	* NotITG
	* Gets the InputMode. See NotITGInputMode.
	*/
	GetInputMode(): InputMode;

	/**
	* ITG
	* Gets the Master player number. Used in double mode to determine if the user is controlling the game via P1 or P2 side. (0 = Player 1, 1 = Player 2)
	*/
	GetMasterPlayerNumber(): number;

	/**
	* NotITG Version 2
	* Gets the rate of the music.
	*/
	GetMusicRate(): number;

	/**
	* ITG
	* Gets the number of enabled players. (Either 1 or 2)
	*/
	GetNumPlayersEnabled(): number;

	/**
	* ITG
	* Gets the number of sides joined.
	*/
	GetNumSidesJoined(): number;

	/**
	* ITG
	* Gets the current PlayMode.
	*/
	GetPlayMode(): number;

	/**
	* ITG
	* Gets the display name for the player playerNumber.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetPlayerDisplayName(playerNumber: number): string;

	/**
	* NotITG
	* Gets the short name for the player playerNumber.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetPlayerNameFromNameEntry(playerNumber: number): string;

	/**
	* ITG
	* Gets the preferred difficulty for player playerNumber. See ITGDifficulty.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	GetPreferredDifficulty(playerNumber: number): Difficulty;

	/**
	* ITG
	* Gets the preferred song.
	*/
	GetPreferredSong(): Song;

	/**
	* ITG
	* Returns the current Premium mode. See ITGPremium.
	*/
	GetPremium(): Premium;

	/**
	* NotITG
	* Gets the Screen's ID. (Will return 573555 if in ScreenGameplay or if playing in ScreenEdit, or otherwise will return 0)
	*/
	GetScreenID(): number;

	/**
	* NotITG
	* Gets the first (at index 0) shader's flag.
	*/
	GetShaderFlag(): number;

	/**
	* NotITG
	* Gets the flag of the shader at index index.
	* @param {number} index The index of the shader. (must be between 0 and 9)
	*/
	GetShaderFlagNum(index: number): number;

	/**
	* ITG
	* Gets the current beat.
	*/
	GetSongBeat(): number;

	/**
	* ITG
	* Gets the current beat, without offsets / visual delays.
	*/
	GetSongBeatVisible(): number;

	/**
	* NotITG Version 2
	* Gets the current song time.
	*/
	GetSongTime(): number;

	/**
	* NotITG Version 2
	* Gets the current song time, without offsets / visual delays.
	*/
	GetSongTimeVisible(): number;

	/**
	* ITG
	* Gets the current sort order. See ITGSortOrder.
	*/
	GetSortOrder(): SortOrder;

	/**
	* NotITG
	* Gets the Version Date. (e. g. "20170105")
	*/
	GetVersionDate(): string;

	/**
	* NotITG Version 2
	* Gets the X position of a note located in the column column. Used for calculating manually where a note should be based on which modifiers are active and its vertical position.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	* @param {number} column The column to use. (must be greater or equal than 0)
	* @param {number} yOffset The vertical offset of the note compared to the receptors.
	*/
	GetX(playerNumber: number, column: number, yOffset: number): number;

	/**
	* NotITG Version 2
	* Gets the Y position of a note located in the column column. Used for calculating manually where a note should be based on which modifiers are active and its vertical position.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	* @param {number} column The column to use. (must be greater or equal than 0)
	* @param {number} yOffset The vertical offset of the note compared to the receptors.
	*/
	GetY(playerNumber: number, column: number, yOffset: number): number;

	/**
	* NotITG Version 2
	* Gets the Z position of a note located in the column column. Used for calculating manually where a note should be based on which modifiers are active and its vertical position.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	* @param {number} column The column to use. (must be greater or equal than 0)
	* @param {number} yOffset The vertical offset of the note compared to the receptors.
	*/
	GetZ(playerNumber: number, column: number, yOffset: number): number;

	/**
	* ITG
	* Returns true if we're in Marathon mode.
	*/
	IsCourseMode(): boolean;

	/**
	* ITG
	* Returns true if a demonstration is currently running.
	*/
	IsDemonstration(): boolean;

	/**
	* ITG
	* Returns true if the specified player is disqualified.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	IsDisqualified(playerNumber: number): boolean;

	/**
	* NotITG
	* Returns true if we're in Edit mode.
	*/
	IsEditMode(): boolean;

	/**
	* ITG
	* Returns true if event mode is enabled.
	*/
	IsEventMode(): boolean;

	/**
	* ITG
	* Returns true if we're in the first extra stage.
	*/
	IsExtraStage(): boolean;

	/**
	* ITG
	* Returns true if we're in the second extra stage.
	*/
	IsExtraStage2(): boolean;

	/**
	* ITG
	* Returns true if the specified player has completed the current goal.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	IsGoalComplete(playerNumber: number): boolean;

	/**
	* ITG
	* Returns true if the specified player is human. (Is not a bot)
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	IsHumanPlayer(playerNumber: number): boolean;

	/**
	* ITG
	* Returns true if the specified player is enabled.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	IsPlayerEnabled(playerNumber: number): boolean;

	/**
	* ITG
	* Returns true if the specified player has joined the game.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	IsSideJoined(playerNumber: number): boolean;

	/**
	* ITG
	* Returns true if the sync data changed. (If the user edited the song/machine offset.)
	*/
	IsSyncDataChanged(): boolean;

	/**
	* ITG
	* Returns true if the specified player is the winner.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	IsWinner(playerNumber: number): boolean;

	/**
	* NotITG
	* Joins the specified player, without deducting any coin.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	*/
	JoinPlayer(playerNumber: number): void;

	/**
	* NotITG
	* Simulates a key press.
	* @param {number} key The wanted key code.
	*/
	KeyPress(key: number): void;

	/**
	* NotITG Version 2
	* Registers an attack to be launched at a specific moment. This attack will disable any currently active Lua mods. It is recommended to call this method in an InitCommand, because it generates some lag spikes.
	* @param {number} startTime The time (in seconds) where the attack will start.
	* @param {number} length The length of the attack (in seconds). (must be greater or equal than 0)
	* @param {string} mods The mods to apply.
	* @param {number} playerNumber (Optional) The player number. Beware ! 1 = Player 1, 2 = Player 2, it isn't like the others methods involving a playerNumber argument ! (must be between 1 and 2)
	*/
	LaunchAttack(startTime: number, length: number, mods: string, playerNumber: number): void;

	/**
	* ITG
	* Returns true if the specified player is using the specified modifier.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	* @param {string} modifier The modifier to check.
	*/
	PlayerIsUsingModifier(playerNumber: number, modifier: string): boolean;

	/**
	* ITG
	* Returns true if we're in double mode.
	*/
	PlayerUsingBothSides(): boolean;

	/**
	* ITG
	* Returns true if players can join the game.
	*/
	PlayersCanJoin(): boolean;

	/**
	* NotITG
	* Reloads the steps. Needed after doing NotITGGameState.SetSongBeat().
	*/
	ReloadSteps(): void;

	/**
	* ITG
	* Sets the current course to course.
	* @param {Course} course The course to use.
	*/
	SetCurrentCourse(course: Course): void;

	/**
	* ITG
	* Sets the current song to song.
	* @param {Song} song The song to use.
	*/
	SetCurrentSong(song: Song): void;

	/**
	* ITG
	* Sets the current steps of the specified player to steps.
	* @param {number} playerNumber The player number. (0 = Player 1, 1 = Player 2) (must be between 0 and 1)
	* @param {Steps} steps The steps to use.
	*/
	SetCurrentSteps(playerNumber: number, steps: Steps): void;

	/**
	* ITG
	* Stores a value in the Game's Environment Table, with the key key.
	* @param {string} key The key to store into the table.
	* @param {string} value The value to store into the table.
	*/
	SetEnv(key: string, value: string): string;

	/**
	* NotITG
	* Sets the InputMode to inputMode.
	* @param {InputMode} inputMode The new InputMode. See NotITGInputMode. (must be between 0 and 1)
	*/
	SetInputMode(inputMode: InputMode): void;

	/**
	* ITG
	* Sets the preferred song to song.
	* @param {Song} song The song to use.
	*/
	SetPreferredSong(song: Song): void;

	/**
	* NotITG
	* Sets the Screen's ID.
	* @param {number} id The new ID.
	*/
	SetScreenID(id: number): void;

	/**
	* NotITG
	* Sets the first (at index 0) shader's flag.
	* @param {number} flag The shader flag to set. (must be between 0 and 9)
	*/
	SetShaderFlag(flag: number): void;

	/**
	* NotITG
	* Sets the flag of the shader at index index.
	* @param {number} flag The shader flag to set.
	* @param {number} index The index of the shader. (must be between 0 and 9)
	*/
	SetShaderFlagNum(flag: number, index: number): void;

	/**
	* NotITG
	* Sets the beat of the song. You must do NotITGGameState.ReloadSteps() right after to make it work.
	* @param {number} beat The target beat.
	*/
	SetSongBeat(beat: number): void;

	/**
	* NotITG
	* Sets the position of the song. You must do NotITGGameState.ReloadSteps() right after to make it work.
	* @param {number} position The target position, in seconds.
	*/
	SetSongPosition(position: number): void;

	/**
	* ITG
	* Enables/Disables the temporary Event Mode.
	* @param {boolean} enable true to enable it, false to disable it.
	*/
	SetTemporaryEventMode(enable: boolean): void;

	/**
	* ITG
	* Gets the current song's index, starting at 1.
	*/
	StageIndex(): number;

	/**
	* NotITG Version 2
	* Unloads the steps of the specified player.
	* 
	*/
	UnloadSteps(playerNumber: number): void;
}