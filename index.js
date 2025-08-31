const generateCalendar = (year) => {
    return Array.from({ length: 12 }, (_, i) => {
        return Array.from({ 
            length:  new Date(new Date(year, i + 1, 1).getTime() - 1).getDate()
        }, (_, j) => j + 1)
    });
}

generateCalendar(2025)
