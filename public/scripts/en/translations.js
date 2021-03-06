define(["require", "exports"], function(require, exports) {
  return angular.module("taxCalculator.translations.en", [])

.constant("taxCalculator.translations.en", {
	"CALCULATOR_HEADER_TITLE": "Budget calculator 2015-16",
	"HEADING": {
		"LIVING_COST": "Living expenses",
		"SALARY_TAX": "Salary tax"
	},
	"INCOME_TOTAL": "Total income",
	"DEDUCTION": "Deductions",
	"DEDUCTION_TOTAL": "Total deductions",
	"EXEMPTION": {
		"HEADING": "Allowances",
		"MARITAL_STATUS_LABEL": "Marital status",
		"MARITAL_STATUS_SINGLE": "Single/divorced",
		"MARITAL_STATUS_MARRIED": "Married",
		"BASIC": "Basic allowance",
		"CHILDREN_COUNT": "Number of dependent children",
		"BORN_IN_TAX_YEAR": "Born in the year",
		"SINGLE_PARENT": "Single parent allowance",
		"PARENTS_60_COUNT": "Number of dependent parents/grandparents (aged 60 or over, or are disabled)",
		"PARENTS_55_COUNT": "Number of dependent parents/grandparents (aged 55 to 59)\t",
		"LIVING_TOGETHER": "How many resided with you throughout the year ",
		"LIVING_SEPARATED": "How many did not reside with you throughout the year "
	},
	"CONCESSION": {
		"LABEL": "Concessions",
		"NOTE": "The 2014-15 budget estimates the concessions for 2013-14. It’s easier to compare those for 2013-14 to 2012-13. "
	},
	"TOTAL": {
		"LABEL": "Total",
		"INCOME": "Total income",
		"DEDUCTION": "Total deductions",
		"EXEMPTION": "Total allowances",
		"CONCESSION": "Total concessions"
	},
	"DETAILS": "Details",
	"YES": "Yes",
	"NO": "No",
	"SAME": "Same",
	"AMOUNT_PAY": "Pay ${{amount|number:0}}",
	"AMOUNT_MORE": "an extra {{amount|number:0}}",
	"AMOUNT_LESS": "{{amount|number:0}} less",
	"PAY_MORE": "pay ${{amount|number:0}} more",
	"PAY_LESS": "pay ${{amount|number:0}} less",
	"THIS_YEAR": "this year",
	"YEAR_1516": "Year15-16"
})

;
});