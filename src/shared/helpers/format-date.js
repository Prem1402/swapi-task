import { MONTH_NAMES } from '../constants/month-name.constant';

export function formatDate(date) {
  const [year, month, day] = date.split('-');
  return `${MONTH_NAMES[month - 1]} ${day}, ${year}`;
}
