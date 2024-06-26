import React, { useEffect } from 'react';
import { useValue } from 'cs2/api'; // Adjust based on actual API usage from cs2
import { toolbarBottom } from 'cs2/bindings';

// Helper function to format the number with commas and a $ prefix
const formatMoneyDelta = (value: number) => {
    const absValue = Math.abs(value);
    const formattedValue = absValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const prefix = value < 0 ? '-' : '+';
    return `${prefix}$${formattedValue}`;
};

// Main Component that incorporates original and custom logic
const MoneyField: React.FC = () => {
    const moneyDelta = useValue(toolbarBottom.moneyDelta$); // Adjust as per your actual API usage

    useEffect(() => {
        console.log('Current money delta per hour:', moneyDelta); // Log moneyDelta value

        // Find all elements with the class name 'trend_IAr'
        const trendElements = document.querySelectorAll('.trend_IAr');
        if (trendElements.length > 1) {
            // Select the second instance
            const trendElement = trendElements[1];

            // Determine the class based on the moneyDelta value
            const className = moneyDelta < 0 ? 'negative_Moc' : 'positive_n5t';

            // Check if moneyDelta element already exists
            let moneyDeltaElement = trendElement.nextElementSibling;
            if (moneyDeltaElement && moneyDeltaElement.classList.contains('moneyDeltaDisplay')) {
                // Update existing element
                moneyDeltaElement.textContent = `${formatMoneyDelta(moneyDelta)} /h`;
                moneyDeltaElement.className = `moneyDeltaDisplay ${className}`;
            } else {
                // Create a span element for moneyDelta
                moneyDeltaElement = document.createElement('span');
                moneyDeltaElement.className = `moneyDeltaDisplay ${className}`;
                moneyDeltaElement.textContent = `${formatMoneyDelta(moneyDelta)} /h`;
                // Append the moneyDelta element after the trend_IAr element
                trendElement.insertAdjacentElement('afterend', moneyDeltaElement);
            }
        }
    }, [moneyDelta]);

    return null; // No need to render anything within React, since we're manipulating the DOM directly
};

export default MoneyField;
