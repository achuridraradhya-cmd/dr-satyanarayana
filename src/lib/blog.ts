export type BlogPost = {
    id: number;
    title: string;
    slug: string;
    visitor_count: string;
    reading_time: string;
    short_desc: string;
    main_image: string;
    published_at: string;
};

export type BlogPagination = {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
    from: number | null;
    to: number | null;
    next_page_url: string | null;
    prev_page_url: string | null;
};

export type BlogListResponse = {
    status: boolean;
    message: string;
    data: BlogPost[];
    pagination: BlogPagination;
};

const BLOG_API_BASE = "https://blogs.drsatyanarayanagarre.in/api";

export async function getBlogPosts(
    page = 1
): Promise<BlogListResponse> {
    const res = await fetch(
        `${BLOG_API_BASE}/blogs?page=${page}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error(
            `Failed to fetch blog posts: ${res.status}`
        );
    }

    return res.json();
}

export type BlogGalleryImage = {
    image: string;
    alt_text: string;
};

export type BlogDetail = {
    id: number;
    meta_title: string;
    meta_description: string;
    title: string;
    slug: string;
    visitor_count: string;
    reading_time: string;
    short_desc: string | null;
    content: string;
    main_image: string;
    page_image: string | null;
    published_at: string;
    images: BlogGalleryImage[];
};

export type BlogDetailResponse = {
    status: boolean;
    message: string;
    data: BlogDetail;
    you_might_also_like: BlogPost[];
};

export async function getBlogDetail(
    slug: string
): Promise<BlogDetailResponse | null> {
    const res = await fetch(
        `${BLOG_API_BASE}/blogs/${slug}`,
        {
            cache: "no-store",
        }
    );

    if (res.status === 404) return null;

    if (!res.ok) {
        throw new Error(
            `Failed to fetch blog post: ${res.status}`
        );
    }

    return res.json();
}