export default function createAvaialbleYears(startYear) {
    const availableYears = [];
    const currentYear = new Date().getFullYear();
    let year = startYear;
    while (year <= currentYear) {
        availableYears.push(year.toString());
        year++;
    }
    return availableYears;
}
