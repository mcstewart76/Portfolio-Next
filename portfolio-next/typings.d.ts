interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInfo: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePicture: Image;
}

export interface Technology extends SanityBody {
    _type: "technology";
    image: Image;
    title: string;
}

export interface Skill extends SanityBody {
     _type: "skill";
    image: Image;
    title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToProject: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    companyName: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentJob: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}
