const sort = (array, field) => {
	return array.sort((a, b) => compare(a, b, field));
};

const compare = (a, b, field) => {
	if (a[field] > b[field]) return -1;
	if (b[field] > a[field]) return 1;

	return 0;
};

export { sort };
