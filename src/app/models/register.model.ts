export interface RegisterRequestModel {
    firstName?: string;
    lastName?: string;
    state?: string;
    email?: string;
    subscribe?: boolean;
}

export interface RegisterResponseModel {
    id?: string;
    firstName?: string;
    lastName?: string;
    state?: string;
    email?: string;
    subscribe?: boolean;
}