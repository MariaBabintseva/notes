function addZero(val) {
    if (val < 10) {
        return '0' + val;
    }
    return val;
};

export const formatDateItem = (dateValue) => {
    const date = [
        addZero(dateValue?.getDate()),
        addZero(dateValue?.getMonth() + 1),
        dateValue?.getFullYear()
    ].join('.')

    const time = [
        addZero(dateValue?.getHours()),
        addZero(dateValue?.getMinutes())
    ].join(':')

    if (dateValue.getDate() === new Date().getDate()) {
        return time
    } else {
        return date
    }
}

export const formatDateContent = (dateValue) => {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    const date = [
        addZero(dateValue?.getDate()),
        months[dateValue?.getMonth()],
        dateValue?.getFullYear()
    ].join(' ')

    const time = [
        addZero(dateValue?.getHours()),
        addZero(dateValue?.getMinutes())
    ].join(':')

    return `${date} в ${time}`
}