
export function isLeap( year: number ) {
    const isDivBy = (divisor: number) => year % divisor == 0
    return isDivBy(4) && (!isDivBy(100) || isDivBy(400))
}