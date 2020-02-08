import '../enum/ElementCategory';

declare const THEME: ThemeManager;

declare interface ThemeManager {
	/**
	* ITG
	* Gets the current language.
	*/
	GetCurLanguage(): string;

	/**
	* ITG
	* Gets the name of the current theme.
	*/
	GetCurThemeName(): string;

	/**
	* ITG
	* Gets the value of the element metric, in the class class.
	* NOTE: since class is reserved, the variable name is changed to class_. It's actually class, but cannot be put as a variable name.
	* @param {string} class The class to use.
	* @param {string} element The name of the parameter.
	*/
	GetMetric(class_: string, element: string): string;

	/**
	* ITG
	* Gets the path of an element in a specific folder, determined by the type argument.
	* NOTE: since class is reserved, the variable name is changed to class_. It's actually class, but cannot be put as a variable name.
	* @param {ElementCategory} type The type of the wanted element. See ITGElementCategory.
	* @param {string} class The class to use.
	* @param {string} element The element to search.
	*/
	GetPath(type: ElementCategory, class_: string, element: string): string;

	/**
	* ITG
	* Creates a table including every theme name.
	*/
	GetThemeNames(): Object | Array<any>;
}