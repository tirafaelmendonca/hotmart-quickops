import httpResquest from '$/utils/http';

const addExpense = expense => {
	return httpResquest('post', '/expense/add', expense);
};

const getTimeline = () => {
	return httpResquest('get', '/timeline');
};

const getSidebar = () => {
	return httpResquest('get', '/sidebar');
};

const getHeader = () => {
	return httpResquest('get', '/header');
};

export { addExpense, getTimeline, getSidebar, getHeader };
