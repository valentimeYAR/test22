export interface App {
    createAt: string;
    updatedAt: string;
    id: number;
    status: string;
    description: string;
}

export interface CreateAppArgs {
    status: string;
    description: string;
}


export interface GetAppArgs {
    id: number;
}