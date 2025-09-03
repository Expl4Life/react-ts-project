import Counter from '@/components/Counter';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Counter', () => {
    it('should render with initial count of 0', () => {
        render(<Counter />);

        expect(screen.getByText('Счетчик')).toBeInTheDocument();
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('should increment count when increment button is clicked', () => {
        render(<Counter />);

        const incrementButton = screen.getByText('+1');
        fireEvent.click(incrementButton);

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('should reset count to 0 when reset button is clicked', () => {
        render(<Counter />);

        // Сначала увеличим счетчик
        const incrementButton = screen.getByText('+1');
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        expect(screen.getByText('2')).toBeInTheDocument();

        // Затем сбросим
        const resetButton = screen.getByText('Сброс');
        fireEvent.click(resetButton);

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('should handle multiple increments correctly', () => {
        render(<Counter />);

        const incrementButton = screen.getByText('+1');

        // Нажмем 5 раз
        for (let i = 0; i < 5; i++) {
            fireEvent.click(incrementButton);
        }

        expect(screen.getByText('5')).toBeInTheDocument();
    });
});
