const schoolsData = [
	{
		school_name: "school 001",
		school_id: "001",
		school_wages: "40.00",
	},
	{
		school_name: "school 002",
		school_id: "002",
		school_wages: "45.00",
	},
	{
		school_name: "school 003",
		school_id: "003",
		school_wages: "35.00",
	},
	{
		school_name: "school 004",
		school_id: "004",
		school_wages: "35.00",
	},
	{
		school_name: "school 005",
		school_id: "005",
		school_wages: "35.50",
	},
];

const populateSchoolSelect = (schools) => {
	const schoolsOptions = schools.map((school) => {
		return `<option value="${school.school_id}" id="${school.school_id}">${school.school_name}</option>`;
	});
	const numbers = ["um", "dois", "tres"];

	schoolsOptions.map(
		(option) => (document.getElementById("schools").innerHTML += option)
	);
};

const showSchoolWages = (schools) => {
	const schoolsSelect = document.getElementById("schools");

	schoolsSelect.addEventListener("change", () => {
		const selectedOption = schoolsData.filter(
			(school) => school.school_id === schoolsSelect.value
		)[0];

		const wagesElement = document.querySelector(".wages");

		wagesElement.innerHTML = `School select is ${selectedOption.school_name} and the wages are R$ ${selectedOption.school_wages}`;

		const schoolWages = parseFloat(selectedOption.school_wages);
	});
};

populateSchoolSelect(schoolsData);
showSchoolWages(schoolsData);
