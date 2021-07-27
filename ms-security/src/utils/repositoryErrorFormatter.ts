const ErrorList: { [key: string]: string } = {
    E11000: "This email address is already being used."
};

type Error = {
    code: number;
};

const RepositoryErrorFormatter = (err: Error) => {
    const errCode = `E${err.code}`;
    const error = { [errCode]: ErrorList[errCode] };
    return { error };
};

export default RepositoryErrorFormatter;
