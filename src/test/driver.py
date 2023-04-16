from selenium import webdriver
from selenium.webdriver.common.by import By
# Create an instance of Firefox web browser
driver = webdriver.Firefox()

# Navigate to the webpage ..
driver.get("http://localhost:3000")

# Find the text field and input some text
text_field = driver.find_element(By.ID, ':r1:')

button = driver.find_element("xpath",'//*[@id="root"]/div/div[1]/div[2]/button')
with open('./formula.txt') as f:
    for word in f:
        word = word.rstrip()
        text_field.send_keys(word)
        button.click()
time.sleep(30)
# Close the browser window
driver.quit()
