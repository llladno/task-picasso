export interface PostType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PropsPost {
    post: PostType
}