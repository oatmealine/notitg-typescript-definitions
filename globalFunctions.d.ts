import './enum/Diffculty';
import './enum/Grade';
import './enum/CourseDifficulty';

/**
* ITG
* Returns true if every active player failed the current stage.
*/
declare function AllFailed(): boolean;

/**
* ITG
* Connects to an online server. Returns true or false depending if the connection is succesful or not.
* @param {string} address The address of the server.
*/
declare function ConnectToServer(address: string): boolean;

/**
* ITG
* Converts a difficulty to a human-readable string.
* @param {CourseDifficulty} courseDifficulty The difficulty. See ITGCourseDifficulty.
*/
declare function CourseDifficultyToThemedString(courseDifficulty: CourseDifficulty): string;

/**
* ITG
* Gets the index (beginning at 0) of the current song.
*/
declare function CourseSongIndex(): number;

/**
* ITG
* Gets the name of the current style.
*/
declare function CurStyleName(): string;

/**
* ITG
* Returns the current day (fortunately, beginning at 1).
*/
declare function DayOfMonth(): number;

/**
* ITG
* Returns the current day in the year (beginning at 0).
*/
declare function DayOfYear(): number;

/**
* ITG
* Like ITGTrace(), but displays even with the ShowLogOutput preference disabled. (Oh, and it returns true.)
* @param {string} msg The message to log
*/
declare function Debug(msg: string): boolean;

/**
* ITG
* Converts a difficulty to a human-readable string.
* @param {Difficulty} difficulty The difficulty. See ITGDifficulty.
*/
declare function DifficultyToThemedString(difficulty: Difficulty): string;

/**
* ITG
* Formats a score into a human-readable percent score.
* @param {number} score The current (DP) score.
*/
declare function FormatPercentScore(score: number): string;

/**
* ITG
* Returns the best final grade. See ITGGrade
*/
declare function GetBestFinalGrade(): number;

/**
* ITG
* Gets the amount of bytes free on the disk.
*/
declare function GetDiskSpaceFree(): string;

/**
* ITG
* Gets the capacity of the disk, in bytes.
*/
declare function GetDiskSpaceTotal(): string;

/**
* ITG
* Gets the easiest difficulty chosen of the current song. See ITGDifficulty.
*/
declare function GetEasiestNotesDifficulty(): Difficulty;

/**
* ITG
* Returns the grade for percent. See ITGGrade
* @param {number} percent The percentage score.
*/
declare function GetGradeFromPercent(percent: number): Grade_;

/**
* ITG
* Gets the internal IP and the netmask of the machine.
* @example ```ts
GetIP(); -- Will return something similar to this string : "192.168.1.10, Netmask: 255.255.255.0".
ITG```
*/
declare function GetIP(): string;

/**
* ITG
* Gets the current input type.
*/
declare function GetInputType(): string;

/**
* ITG
* Gets the number of crash logs.
*/
declare function GetNumCrashLogs(): number;

/**
* ITG
* Gets the number of disk (Input/Output) Errors.
*/
declare function GetNumIOErrors(): number;

/**
* ITG
* Gets the number of edits registered in the machine.
*/
declare function GetNumMachineEdits(): number;

/**
* ITG
* Gets the number of scores registered in the machine-
*/
declare function GetNumMachineScores(): number;

/**
* ITG
* Alias for ITGGameState.GetNumPlayersEnabled(). Gets the number of enabled players. (Either 1 or 2)
*/
declare function GetNumPlayersEnabled(): number;

/**
* ITG
* Gets the name (and the version if available) of this executable.
*/
declare function GetProductName(): string;

/**
* ITG
* Gets the version of this executable.
*/
declare function GetProductVer(): string;

/**
* ITG
* Gets the revision of the current ITG Patch.
*/
declare function GetRevision(): number;

/**
* ITG
* Gets the serial number of this ITG installation.
*/
declare function GetSerialNumber(): string;

/**
* ITG
* Gets the text of the stage. (For example, "event")
*/
declare function GetStageText(): string;

/**
* ITG
* Gets the current uptime, in HHMMSS.
*/
declare function GetUptime(): string;

/**
* ITG
* Returns the Grade from the name. See ITGGrade.
* @param {string} gradeName The grade's name.
*/
declare function Grade(gradeName: string): Grade_;

/**
* ITG
* Returns the grade's name from the grade.
* @param {Grade_} grade The grade. See ITGGrade.
*/
declare function GradeToString(grade: Grade_): string;

/**
* ITG
* Returns the current hour.
*/
declare function Hour(): number;

/**
* ITG
* Returns true if the ITG hub is connected, false otherwise.
*/
declare function HubIsConnected(): boolean;

/**
* ITG
* Returns true if one or more memory card is currently used, false otherwise.
*/
declare function IsAnyPlayerUsingMemoryCard(): boolean;

/**
* ITG
* Returns true if the current stage is the extra stage, false otherwise.
*/
declare function IsExtraStage(): boolean;

/**
* ITG
* Returns true if the current stage is the second extra stage, false otherwise.
*/
declare function IsExtraStage2(): boolean;

/**
* ITG
* Returns true if the current stage is the final stage, false otherwise.
*/
declare function IsFinalStage(): boolean;

/**
* ITG
* Returns true if the game is connected to the Internet, false otherwise.
*/
declare function IsNetConnected(): boolean;

/**
* ITG
* Returns true if the game is connected to StepMania Online, false otherwise.
*/
declare function IsNetSMOnline(): boolean;

/**
* ITG
* Returns true if the specified player is logged in, to StepMania Online, false otherwise.
* @param {number} player The player number. Either 0 (for P1), or 1 (for P2) (must be between 0 and 1)
*/
declare function IsSMOnlineLoggedIn(player: number): boolean;

/**
* ITG
* Returns true if the specified player is using a memory card, false otherwise.
* @param {number} player The player number. Either 0 (for P1), or 1 (for P2) (must be between 0 and 1)
*/
declare function IsUsingMemoryCard(player: number): boolean;

/**
* ITG
* Returns the current minute.
*/
declare function Minute(): number;

/**
* ITG
* Returns the current month (fortunately, beginning at 1).
*/
declare function MonthOfYear(): number;

/**
* ITG
* Returns a human-readable string for the specified month.
* @param {number} month The month, beginning at 0. (must be between 0 and 1)
*/
declare function MonthToString(month: number): string;

/**
* ITG
* Returns the number of stages left, returns 999 if event mode is enabled.
*/
declare function NumStagesLeft(): number;

/**
* ITG
* Returns true if at least one player passed the song, false otherwise.
*/
declare function OnePassed(): boolean;

/**
* ITG
* Gets the name of the current play mode.
*/
declare function PlayModeName(): string;

/**
* ITG
* Send the current style to the SMOnline server.
*/
declare function ReportStyle(): void;

/**
* ITG
* Returns the current second.
*/
declare function Second(): number;

/**
* ITG
* Returns a human-readable string in the HHMMSS form, representing an amount of seconds.
* @param {number} seconds The amount of seconds.
*/
declare function SecondsToHHMMSS(seconds: number): string;

/**
* ITG
* Returns an human-readable string in the MMSS form, representing an amount of seconds.
* @param {number} seconds The amount of seconds.
*/
declare function SecondsToMMSS(seconds: number): string;

/**
* ITG
* Returns an human-readable string in the MMSSMsMs form, representing an amount of seconds.
* @param {number} seconds The amount of seconds.
*/
declare function SecondsToMMSSMsMs(seconds: number): string;

/**
* ITG
* Returns an human-readable string in the MMSSMsMsMs form, representing an amount of seconds.
* @param {number} seconds The amount of seconds.
*/
declare function SecondsToMMSSMsMsMs(seconds: number): string;

/**
* ITG
* Returns an human-readable string in the MSSMsMs form, representing an amount of seconds.
* @param {number} seconds The amount of seconds.
*/
declare function SecondsToMSSMsMs(seconds: number): string;

/**
* ITG
* Logs a message to the console log, if shown. (Oh, and returns true.)
* @param {string} msg The message to log
*/
declare function Trace(msg: string): boolean;

/**
* ITG
* Returns the current weekday (from 0 to 6).
*/
declare function Weekday(): number;

/**
* ITG
* Returns the current year.
*/
declare function Year(): number;