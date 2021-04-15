import smtplib
import random

otp = random.randint(1000,9999)

email = input("enter your email address: ")

print(otp)

subject = "OTP for registration in college forum."
body = f"Your OTP is {str(otp)}"

message = f'Subject: {subject}\n\n{body}'

server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
server.login("yourcollegeforum@gmail.com", "college00forum")
server.sendmail("yourcollegeforum@gmail.com", email, message)
server.quit()

#---------SMS------------
