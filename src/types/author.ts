/**
 * The Author interface as fetched from the API ebdpoint
 */
export type ReviewContentAuthor = {
    id: string;
    name: string;
    slug: string;
    jobTitle?: string;
}

export interface AuthorKnowsAbout {
    fieldName: string;
    fieldUrl: string;
    description: string;
}

export interface AuthorLocation {
    city: string;
    country: string;
}

export interface AuthorSocialMedia {
    facebookUrl?: string;
    twitterUrl?: string;
    youtubeUrl?: string | null;
    instagramUrl?: string | null;
    websiteUrl?: string | null;
    linkedinUrl?: string | null;
    otherProfiles?:
          | {
              profileName?: string | null;
              profileUrl?: string | null;
              id?: string | null;
            }[]
          | null;
}

export interface AuthorEducation {
    degree: string;
    institution: string;
    year: number;
    url: string;
    id: string;
}

export interface AuthorWorkHistory {
    position: string;
    company: string;
    startYear: number;
    endYear: number;
    description: string;
    id: string;
}

export interface AuthorAward {
    name: string;
    year: number;
    description: string;
    id: string;
}

export interface AuthorImage {
    url: string;
    alt: string;
    caption: string;
    filename: string;
    sizes: {
        small: {
            width: number;
            height: number;
            url: string;
        };
        tablet: {
            width: number;
            height: number;
            url: string;
        };
        large: {
            width: number;
            height: number;
            url: string;
        };
    };
    id: string;
}

export interface AuthorReview {
    slug: string;
    brokerRating: number;
    brokerName: string;
    title: string;
    id: string;
}

export interface AuthorCertification {
    name?: string | null;
    organization?: string | null;
    year?: number | null;
    url?: string | null;
    id?: string | null;
}

export interface AuthorReviews {
    docs: AuthorReview[];
    hasNextPage: boolean;
}

export interface Author {
    id: string;
    name: string;
    slug: string;
    publishingName: string;
    createdAt: Date;
    updatedAt: Date;
    jobTitle?: string;
    credentials?: string;
    bio: string;
    yearsExperience?: number;
    location?: AuthorLocation;
    certification: AuthorCertification[];
    knowsAbout?: AuthorKnowsAbout[];
    socialMediaProfiles?: AuthorSocialMedia;
    education?: AuthorEducation[];
    workHistory?: AuthorWorkHistory[];
    sameAs: string[];
    awards?: AuthorAward[];
    authorImage?: AuthorImage;
    reviews?: AuthorReviews;
    meta?: {
        title?: string;
        description?: string;
        image?: {
            filename: string;
            id: string;
            url: string;
        };
    };
}

export interface AuthorResponse {
    docs: Author[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}