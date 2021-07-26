const ErrorList: { [key: string]: string } = {
    E11000: "This email address is already being used."
};

const RepositoryErrorFormatter = (err: any) => {
    const errCode = `E${err}`;
    return ErrorList[errCode];
};

export default RepositoryErrorFormatter;
