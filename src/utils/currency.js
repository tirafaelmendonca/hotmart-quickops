import { LOCALES } from './constants';

const formatCurrency = (number, currency, symbol) => {
	const { locale } = LOCALES.find(x => x.currency === currency);
	return symbol + number.toLocaleString(locale, { currency });
};

export default formatCurrency;
