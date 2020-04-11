
export const loadState = (item) => {
    try {
        const serializedState = localStorage.getItem(item);
        if (serializedState === null)
            return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(state, serializedState);
    } catch {
        // ignore write errors
        console.log('error guardando estado');
    }
};
