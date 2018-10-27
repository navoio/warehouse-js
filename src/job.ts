enum JobStatus {
    Ordered,
    Started,
    Complete,
    Cancelled
}

interface Job {
    id: string;
    dateCreated: Date;
    name: string;
    status: JobStatus;
    storedPartCount: number;
}

export { Job, JobStatus };
