import { expect } from '@wdio/globals'
import sauceLogin from '../pageobjects/sauceDemoLogin';
import sauceAssurance from '../pageobjects/sauceDemoAssurance';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await sauceLogin.open()

        await sauceLogin.login('standard_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
})
