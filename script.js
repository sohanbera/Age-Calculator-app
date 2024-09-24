function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    // If the birth month is greater than the current month, subtract one year and adjust the month
    if (months < 0 || (months === 0 && days < 0)) {
        age--;
        months += 12;  // Adjust for the negative month
    }

    // If the birth day is greater than the current day, adjust the day and month
    if (days < 0) {
        months--;
        const lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days = lastDayOfPreviousMonth - dob.getDate() + currentDate.getDate();
    }

    document.getElementById('ageResult').textContent = `${age} years, ${months} months, ${days} days`;
}
