import axios from "axios";
import { getMongoRepository } from "typeorm";
import { Customer } from "../entities/customer.entity";

class AuthService {
    private customerRepository = getMongoRepository(Customer);

    public static async verifyToken(token: string): Promise<any | boolean> {
        const user = await axios
            .get("http://localhost:8000/api/token/validate", {
                headers: { authorization: token }
            })
            .catch((e) => console.log("AuthServiceValidateError: ", e.message));

        return user?.data;
    }
}

export default AuthService;
