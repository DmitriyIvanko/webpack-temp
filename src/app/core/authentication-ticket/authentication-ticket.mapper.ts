import { MapperModel } from "../utils/mapper.model";
import { AuthenticationTicketModel } from "./authentication-ticket.model";
import { UserRoleEnum } from "./user-role.enum";

export class AuthenticationTicketMapper extends MapperModel<AuthenticationTicketModel> {
    public transformToClient(response: any): AuthenticationTicketModel {
        return new AuthenticationTicketModel({
            accessToken: response.access_token,
            clientId: response["as:client_id"],
            expires: new Date(response[".expires"]),
            expiresIn: response.expires_in,
            issued: new Date(response[".issued"]),
            refreshToken: response.token_type,
            role: this.parseRole(response.role),
            tokenType: response.token_type,
            userId: +response.userId,
            userName: response.userName,
        });
    }

    private parseRole(role: string): UserRoleEnum {
        switch (role) {
            case "Admin":
                return UserRoleEnum.Admin;
            case "User":
                return UserRoleEnum.User;
            case "TestDriveUser":
                return UserRoleEnum.TestDriveUser;
            default:
                console.warn("Unknown role");
                return UserRoleEnum.UnknownUser;
        }
    }
}
