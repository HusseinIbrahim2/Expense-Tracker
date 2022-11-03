export function getDate(date) {
    return (
     `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
 )
}

export function getDateMinusDays(date , days ) {
    return (
        new Date(date.getFullYear() , date.getMonth() ,days.getDate() - days )
    )
}