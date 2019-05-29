const index = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [...index.filter(item => item.length > 0)];

employersNames = employersNames.map(item => item.toLowerCase().trim());

export default employersNames;