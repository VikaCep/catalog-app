import { act, renderHook } from '@testing-library/react-hooks';

import useStateWithStorage from './useStateWithStorage';

describe('useStateWithStorage', () => {
    beforeEach(() => {
        // Clear localStorage before each test
        localStorage.clear();
    });

    it('should return the default value if no value is stored in localStorage', () => {
        const { result } = renderHook(() => useStateWithStorage('testKey', 'defaultValue'));
        const [storedValue] = result.current;

        expect(storedValue).toBe('defaultValue');
    });

    it('should return the stored value if a value is stored in localStorage', () => {
        // Set a value in localStorage before testing
        localStorage.setItem('testKey', JSON.stringify('storedValue'));

        const { result } = renderHook(() => useStateWithStorage('testKey', 'defaultValue'));
        const [storedValue] = result.current;

        expect(storedValue).toBe('storedValue');
    });

    it('should update the stored value in localStorage when setStoredValue is called', () => {
        const { result } = renderHook(() => useStateWithStorage('testKey', 'defaultValue'));
        const [, setStoredValue] = result.current;

        act(() => {
            setStoredValue('newValue');
        });

        // Retrieve the updated value from localStorage
        const storedValue = localStorage.getItem('testKey');

        expect(storedValue).toBe(JSON.stringify('newValue'));
    });

    it('should return the updated value when setStoredValue is called', () => {
        const { result } = renderHook(() => useStateWithStorage('testKey', 'defaultValue'));
        const [, setStoredValue] = result.current;

        act(() => {
            setStoredValue('newValue');
        });

        const [updatedValue] = result.current;

        expect(updatedValue).toBe('newValue');
    });
});