const mochaAsync = (fn) => {
    return async() => {
        try {
            await fn();
        } catch (err) {
            console.error(err);
        }
    };
};

export default mochaAsync;