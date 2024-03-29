// /src/lib/utils.js

export const convertDate = (published) => {
    const months = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    };
    const date = published.substring(0, 10);
    const [year, month, day] = date.split('-');
    return `${day}-${months[parseInt(month)]}-${year}`;
};

function formatDate(date, dateStyle = 'medium', locales = 'en') {
    const dateToFormat = new Date(date)

    const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })

    return dateFormatter.format(dateToFormat)
}

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
