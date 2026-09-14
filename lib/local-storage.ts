const addToLocalStorage = (key: string, value: any) => {
    if (typeof window !== 'undefined') {
        localStorage?.setItem(key, JSON.stringify(value));
    }  else {
        console.log('localStorage is not available');
    }
};

// Usage:
// addToLocalStorage('user', { name: 'John', age: 30 });

const isItemInLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
         return localStorage?.getItem(key) !== null;
    }  else {
        console.log('localStorage is not available');
    }
};

// Usage:
// console.log(isItemInLocalStorage('user')); // Output: true or false

const getFromLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        const item = localStorage?.getItem(key);
        return item ? item : null;
    }  else {
        console.log('localStorage is not available');
    }
};

// Usage:
// getFromLocalStorage('user'); // Returns: { name: 'John', age: 30 }

export { addToLocalStorage, isItemInLocalStorage, getFromLocalStorage };