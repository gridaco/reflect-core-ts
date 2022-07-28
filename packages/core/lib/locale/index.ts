export interface ILocale {
    countryCode?: string;
    languageCode: string;
    scriptCode?: string;
}
export class Locale implements ILocale {
    countryCode?: string;
    languageCode: string;
    scriptCode?: string;

    constructor(_languageCode: string, _countryCode?: string) {
        this.languageCode = _languageCode;
        this.countryCode = _countryCode;
    }
}
