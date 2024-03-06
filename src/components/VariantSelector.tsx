import React, { useState } from 'react';
import { Variant, Product } from '../CartContext';
import styled from 'styled-components';

function VariantSelector({ item, onVariantSelected }: { item: Product, onVariantSelected: (variant: Variant) => void }) {
    const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);

    const handleVariantChange = (event: { target: { value: string; }; }) => {
        const selectedVariantId = event.target.value;
        const variant = item.variants.find((variant: Variant) => variant.id === selectedVariantId);
        if (!variant) {
            return;
        }
        setSelectedVariant(variant);
        onVariantSelected(variant);
    };

    return (
        <StyledSelect value={selectedVariant.id} onChange={handleVariantChange}>
            {item.variants.map((variant: Variant) => (
                <option key={variant.id} value={variant.id}>
                    ${variant.price} - {variant.name}
                </option>
            ))}
        </StyledSelect>
    );
}

export default VariantSelector;

const StyledSelect = styled.select`
    margin-bottom: 20px;
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    cursor: pointer;
`;