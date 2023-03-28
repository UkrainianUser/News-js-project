import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import lightFormat from 'date-fns/lightFormat';
import { load, save, remove } from './storage';

const DATE_KEY = "date";
const dateInput = document.querySelector("#datetime-picker");
const options = {
 defaultDate:  new Date(),
 onClose(selectedDates) {
    console.log(selectedDates[0]);
    save(DATE_KEY, selectedDates[0]);
    },
  };
flatpickr(dateInput, options);
save(DATE_KEY, dateInput.value);
export function getFilterDate() {
    if (!load(DATE_KEY)) {
        return;
    }
    const parsedDate = load(DATE_KEY);
    const date = lightFormat(new Date(parsedDate), 'yyyyMMdd');
    return date;
}