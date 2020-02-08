declare const COIN_MODE_HOME = 0;
declare const COIN_MODE_PAY = 1;
declare const COIN_MODE_FREE = 2;

declare const COURSE_DIFFICULTY_BEGINNER = 0;
declare const COURSE_DIFFICULTY_EASY = 1;
declare const COURSE_DIFFICULTY_REGULAR = 2;
declare const COURSE_DIFFICULTY_DIFFICULT = 3;
declare const COURSE_DIFFICULTY_CHALLENGE = 4;
declare const COURSE_DIFFICULTY_EDIT = 5;

declare const DIFFICULTY_BEGINNER = 0;
declare const DIFFICULTY_EASY = 1;
declare const DIFFICULTY_MEDIUM = 2;
declare const DIFFICULTY_HARD = 3;
declare const DIFFICULTY_CHALLENGE = 4;
declare const DIFFICULTY_EDIT = 5;

declare const EC_BGANIMATIONS = 0;
declare const EC_FONTS = 1;
declare const EC_GRAPHICS = 2;
declare const EC_NUMBERS = 3;
declare const EC_SOUNDS = 4;
declare const EC_OTHER = 5;

/** true (only in NotITG) */
declare const FUCK_EXE: boolean;

declare const GOAL_CALORIES = 0;
declare const GOAL_TIME = 1;
declare const GOAL_NONE = 2;

declare const GRADE_TIER01 = 0;
declare const GRADE_TIER02 = 1;
declare const GRADE_TIER03 = 2;
declare const GRADE_TIER04 = 3;
declare const GRADE_TIER05 = 4;
declare const GRADE_TIER06 = 5;
declare const GRADE_TIER07 = 6;
declare const GRADE_TIER08 = 7;
declare const GRADE_TIER09 = 8;
declare const GRADE_TIER10 = 9;
declare const GRADE_TIER11 = 10;
declare const GRADE_TIER12 = 11;
declare const GRADE_TIER13 = 12;
declare const GRADE_TIER14 = 13;
declare const GRADE_TIER15 = 14;
declare const GRADE_TIER16 = 15;
declare const GRADE_TIER17 = 16;
declare const GRADE_TIER18 = 17;
declare const GRADE_TIER19 = 18;
declare const GRADE_TIER20 = 19;
declare const GRADE_FAILED = 20;

declare const HNS_NONE = 0;
declare const HNS_NG = 1;
declare const HNS_OK = 2;

declare const NUM_COURSE_DIFFICULTIES = 6;
declare const NUM_DIFFICULTIES = 6;
declare const NUM_GRADES = 21;
declare const NUM_PLAYERS = 2;
declare const NUM_PLAY_MODES = 6;

declare const OPENITG = true;
/** The OpenITG version */
declare const OPENITG_VERSION: string;

declare const PLAY_MODE_REGULAR = 0;
declare const PLAY_MODE_NONSTOP = 1;
declare const PLAY_MODE_ONI = 2;
declare const PLAY_MODE_ENDLESS = 3;
declare const PLAY_MODE_BATTLE = 4;
declare const PLAY_MODE_RAVE = 5;

declare const PLAYER_1 = 0;
declare const PLAYER_2 = 1;

declare const PREMIUM_NONE = 0;
declare const PREMIUM_DOUBLE = 1;
declare const PREMIUM_JOINT = 2;

declare const RADAR_CATEGORY_STREAM = 0;
declare const RADAR_CATEGORY_VOLTAGE = 1;
declare const RADAR_CATEGORY_AIR = 2;
declare const RADAR_CATEGORY_FREEZE = 3;
declare const RADAR_CATEGORY_CHAOS = 4;
declare const RADAR_CATEGORY_TAPS = 5;
declare const RADAR_CATEGORY_JUMPS = 6;
declare const RADAR_CATEGORY_HOLDS = 7;
declare const RADAR_CATEGORY_MINES = 8;
declare const RADAR_CATEGORY_HANDS = 9;
declare const RADAR_CATEGORY_ROLLS = 10;

/** SCREEN_WIDTH/2 */
declare const SCREEN_CENTER_X: Number;
/** SCREEN_HEIGHT/2 */
declare const SCREEN_CENTER_Y: Number;

declare const SCREEN_LEFT = 0;
/** Equal SCREEN_WIDTH */
declare const SCREEN_RIGHT: Number;
declare const SCREEN_TOP = 0;
/** Equal to SCREEN_HEIGHT */
declare const SCREEN_BOTTOM: Number;

/** Usually 640, depends on the current theme. */
declare const SCREEN_WIDTH : Number;
/** Usually 480, depends on the current theme */
declare const SCREEN_HEIGHT: Number;

declare const SORT_PREFERRED = 0;
declare const SORT_GROUP = 1;
declare const SORT_TITLE = 2;
declare const SORT_BPM = 3;
declare const SORT_POPULARITY = 4;
declare const SORT_TOP_GRADES = 5;
declare const SORT_ARTIST = 6;
declare const SORT_GENRE = 7;
declare const SORT_SONG_LENGTH = 8;
declare const SORT_EASY_METER = 9;
declare const SORT_MEDIUM_METER = 10;
declare const SORT_HARD_METER = 11;
declare const SORT_CHALLENGE_METER = 12;
declare const SORT_MODE_MENU = 13;
declare const SORT_ALL_COURSES = 14;
declare const SORT_NONSTOP = 15;
declare const SORT_ONI = 16;
declare const SORT_ENDLESS = 17;
declare const SORT_ROULETTE = 18;

declare const STEPS_TYPE_DANCE_SINGLE = 0;
declare const STEPS_TYPE_DANCE_DOUBLE = 1;
declare const STEPS_TYPE_DANCE_COUPLE = 2;
declare const STEPS_TYPE_DANCE_SOLO = 3;
declare const STEPS_TYPE_PUMP_SINGLE = 4;
declare const STEPS_TYPE_PUMP_HALFDOUBLE = 5;
declare const STEPS_TYPE_PUMP_DOUBLE = 6;
declare const STEPS_TYPE_PUMP_COUPLE = 7;
declare const STEPS_TYPE_EZ2_SINGLE = 8;
declare const STEPS_TYPE_EZ2_DOUBLE = 9;
declare const STEPS_TYPE_EZ2_REAL = 10;
declare const STEPS_TYPE_PARA_SINGLE = 11;
declare const STEPS_TYPE_PARA_VERSUS = 12;
declare const STEPS_TYPE_DS3DDX_SINGLE = 13;
declare const STEPS_TYPE_BM_SINGLE5 = 14;
declare const STEPS_TYPE_BM_DOUBLE5 = 15;
declare const STEPS_TYPE_BM_SINGLE7 = 16;
declare const STEPS_TYPE_BM_DOUBLE7 = 17;
declare const STEPS_TYPE_MANIAX_SINGLE = 18;
declare const STEPS_TYPE_MANIAX_DOUBLE = 19;
declare const STEPS_TYPE_TECHNO_SINGLE4 = 20;
declare const STEPS_TYPE_TECHNO_SINGLE5 = 21;
declare const STEPS_TYPE_TECHNO_SINGLE8 = 22;
declare const STEPS_TYPE_TECHNO_DOUBLE4 = 23;
declare const STEPS_TYPE_TECHNO_DOUBLE5 = 24;
declare const STEPS_TYPE_PNM_FIVE = 25;
declare const STEPS_TYPE_PNM_NINE = 26;
declare const STEPS_TYPE_LIGHTS_CABINET = 27;

declare const TNS_NONE = 0;
declare const TNS_HITMINE = 1;
declare const TNS_AVOIDMINE = 2;
declare const TNS_MISS = 3;
declare const TNS_BOO = 4;
declare const TNS_GOOD = 5;
declare const TNS_GREAT = 6;
declare const TNS_PERFECT = 7;
declare const TNS_MARVELOUS = 8;