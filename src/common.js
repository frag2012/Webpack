const message = document.querySelector('.message');

export default function renderError(text) {
   message.textContent = text;
}

export const resetError = () => {
   message.textContent = '';
};

export function renderDiff(diff) {
   message.innerHTML = `<span>
   Лет: ${diff.years}
   месяцев: ${diff.months}
   дней: ${diff.days}
   </span>`;
}

export function renderTime(time) {
   message.innerHTML = `<span>
   осталось: ${time}
   </span>`;
}