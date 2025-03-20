import { expect } from '@wdio/globals'
import sauceLogin from '../pageobjects/sauceDemoLogin';
import sauceAssurance from '../pageobjects/sauceDemoAssurance';

describe('sauceDemo Positive/Negative logins', () => {
    it('Standard_User Positive', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('standard_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Standard_User Negative', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('standard_user', 'wrong_password')
        await expect(sauceAssurance.errorAlert).toBeExisting()
        await expect(sauceAssurance.errorAlert).toHaveText(
            expect.stringContaining('Epic sadface:'))
    })

    it('Locked_Out_User Positive', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('locked_out_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Locked_Out_User Negative', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('locked_out_user', 'wrong_password')
        await expect(sauceAssurance.errorAlert).toBeExisting()
        await expect(sauceAssurance.errorAlert).toHaveText(
            expect.stringContaining('Epic sadface:'))
    })

    it('Problem_User Positive', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('problem_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Problem_User Negative', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('problem_user', 'wrong_password')
        await expect(sauceAssurance.errorAlert).toBeExisting()
        await expect(sauceAssurance.errorAlert).toHaveText(
            expect.stringContaining('Epic sadface:'))
    })

    it('Performance_Glitch_User Positive', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('performance_glitch_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Performance_Glitch_User Negative', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('performance_glitch_user', 'wrong_password')
        await expect(sauceAssurance.errorAlert).toBeExisting()
        await expect(sauceAssurance.errorAlert).toHaveText(
            expect.stringContaining('Epic sadface:'))
    })

    it('Error_User Positive', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('error_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Error_User Negative', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('error_user', 'wrong_password')
        await expect(sauceAssurance.errorAlert).toBeExisting()
        await expect(sauceAssurance.errorAlert).toHaveText(
            expect.stringContaining('Epic sadface:'))
    })

    it('Visual_User Positive', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('visual_user', 'secret_sauce')
        await expect(sauceAssurance.rootAlert).toBeExisting()
        await expect(sauceAssurance.rootAlert).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('Visual_User Negative', async () => {
        await browser.url('https://www.saucedemo.com/');
        await sauceLogin.open()
        await sauceLogin.login('visual_user', 'wrong_password')
        await expect(sauceAssurance.errorAlert).toBeExisting()
        await expect(sauceAssurance.errorAlert).toHaveText(
            expect.stringContaining('Epic sadface:'))
    })
})
