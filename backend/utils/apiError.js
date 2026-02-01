class ApiError extends Error {
    constructor(
        message = "Something went wrong",
        code = 500,
        errors = null,
        data = null,
        stack = ""
    ) {
        super(message);
        this.code = code;
        this.success = false;
        this.errors = errors;
        this.data = data;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;