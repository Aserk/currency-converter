{
    const returnExchangeRate = (currencyValue) => {
        const dollarExchangeRate = 4.73;
        const euroExchangeRate = 4.71;
        const poundExchangeRate = 5.47;

        switch (currencyValue) {
            case 'USD':
                return dollarExchangeRate;
            case 'EUR':
                return euroExchangeRate;
            case 'GBP':
                return poundExchangeRate;
        }
    };

    const changeCurrencyAndRate = (currencyValue) => {
        const selectedCurrency = document.querySelector(".js-selectedCurrency");
        const exchangeRate = document.querySelector(".js-exchangeRate");

        selectedCurrency.innerText = currencyValue;
        exchangeRate.innerText = returnExchangeRate(currencyValue);
    };

    const onFormSubmit = (currencyValue, event) => {
        const amountPLN = document.querySelector(".js-amount");
        const resultField = document.querySelector(".js-resultField");

        event.preventDefault();
        resultField.innerHTML = `Otrzymasz: <strong> ${(amountPLN.value / returnExchangeRate(currencyValue)).toFixed(2)} 
            ${currencyValue}</strong>`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const currency = document.querySelector(".js-currency");

        changeCurrencyAndRate(currency.value);

        currency.addEventListener("change", () => {
            changeCurrencyAndRate(currency.value);
        });

        formElement.addEventListener("submit", (event) => {
            onFormSubmit(currency.value, event);
        });
    }

    init();
}