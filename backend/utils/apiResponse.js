class ApiResponse {
    constructor(
        message = "Success",
        data = null,
        errors = null,
        meta = null
    ) {
        this.message = message;
        this.data = data;
        this.errors = errors;
        this.meta = meta;
    }
}

module.exports = ApiResponse;