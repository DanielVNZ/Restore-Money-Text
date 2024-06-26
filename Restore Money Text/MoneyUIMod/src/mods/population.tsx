import React, { useEffect } from 'react';
import { useValue } from 'cs2/api'; // Adjust based on actual API usage from cs2
import { toolbarBottom } from 'cs2/bindings';

// Helper function to format the number with commas and a $ prefix
const formatMoneyDelta = (value: number) => {
    const absValue = Math.abs(value);
    const formattedValue = absValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedValue}`;
};

// Main Component that incorporates original and custom logic
const PopField: React.FC = () => {
    const popField = useValue(toolbarBottom.populationDelta$); // Adjust as per your actual API usage

    useEffect(() => {

        // Find all elements with the class name 'trend_IAr'
        const trendElements = document.querySelectorAll('.trend_IAr');
        if (trendElements.length > 1) {
            // Select the second instance
            const trendElement = trendElements[0];

            // Determine the class based on the moneyDelta value
            const className = popField < 0 ? 'negative_Moc' : 'positive_n5t';

            // Check if moneyDelta element already exists
            let popDeltaElement = trendElement.nextElementSibling;
            if (popDeltaElement && popDeltaElement.classList.contains('popDeltaDisplay')) {
                // Update existing element
                popDeltaElement.textContent = `${formatMoneyDelta(popField)} /h`;
                popDeltaElement.className = `popDeltaDisplay ${className}`;
            } else {
                // Create a span element for moneyDelta
                popDeltaElement = document.createElement('span');
                popDeltaElement.className = `popDeltaDisplay ${className}`;
                popDeltaElement.textContent = `${formatMoneyDelta(popField)} /h`;
                // Append the moneyDelta element after the trend_IAr element
                trendElement.insertAdjacentElement('afterend', popDeltaElement);
            }
        }
    }, [popField]);

    return null; // No need to render anything within React, since we're manipulating the DOM directly
};

export default PopField;
