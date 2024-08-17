export interface TypeReqResIn {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Users[];
    support:     Support;
}

export interface Users {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
