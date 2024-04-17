import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

data = {
    'email': "example@gmail.com",
    'subject': "example",
    'message': "delete this message in the backend"
}

class PythonOrgSearch(unittest.TestCase):
    def setUp(self):
        service  = Service(executable_path=r"E:\Web\driver\geckodriver-v0.33.0-win64\geckodriver.exe" )
        options = webdriver.FirefoxOptions()
        self.driver = webdriver.Firefox(service=service, options=options)

    def test_serarch_in_python_org(self):
        driver = self.driver
        driver.get("https://jaredlarios.github.io/my-profile/")
        self.assertIn("Jared Larios | Resume", driver.title)
        elem = driver.find_element(By.XPATH , '//*[@id="root"]/div[1]/div/div[2]').click()
        #elem.send_keys("manchester united")
        #elem.send_keys(Keys.ENTER)
        self.assertNotIn("No result found.", driver.page_source)

    def test_1_send_message(self):
        driver = self.driver
        driver.get("https://jaredlarios.github.io/my-profile/")
        driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")

        email = driver.find_element(By.XPATH, "//INPUT[@id='email']")
        subject = driver.find_element(By.XPATH, "//INPUT[@id='subject']")
        message = driver.find_element(By.XPATH, "//TEXTAREA[@id='message']")
        submit = driver.find_element(By.NAME , "")

        email.send_keys(data['email'])
        subject.send_keys(data['subject'])
        message.send_keys(data['message'])

        submit.send_keys(Keys.RETURN)

        notif = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located(
                (By.ID, "notMsg")
            )
        )

        self.assertEqual( notif.text ,'Message was sent!')


    def test_2_send_message_error(self):
        driver = self.driver
        driver.get("https://jaredlarios.github.io/my-profile/")
        driver.execute_script("window.scrollTo(0,document.body.scrollHeight)")

        email = driver.find_element(By.XPATH, "//INPUT[@id='email']")
        subject = driver.find_element(By.XPATH, "//INPUT[@id='subject']")
        submit = driver.find_element(By.XPATH, "//BUTTON[@class='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium form css-1rwt2y5-MuiButtonBase-root-MuiButton-root']")

        email.send_keys(data['email'])
        subject.send_keys(data['subject'])
        submit.send_keys(Keys.RETURN)

        notif = driver.find_element(By.XPATH,
                    "//P[@class='error'][text()='You should type a message']")
        self.assertNotEqual( notif.text ,'Message was sent!')

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()