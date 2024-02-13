import { mainConfig } from "../config";
import { accountRepository, accountRoleRepository, activationRepository } from "../database";
import { AccountService, ActivationService, AuthService, MailService, TokenService } from "./services";
import { MockMailService } from "./services/mail/mock.mail.service";

export * from "./services";
export * from "./interfaces";
export * from "./querry";
export * from "./enums";
export * from "./dto";





/// ACCOUNT
export const accountService = new AccountService(accountRepository);
///MAIL
export const activationService = new ActivationService(activationRepository);
export const mailService = mainConfig.server.isDev? new MockMailService() : new MailService();

/// AUTH
export const tokenService = new TokenService();
export const authService = new AuthService(
    accountService,
    activationService,
    mailService,
    tokenService,
    accountRoleRepository
    );



