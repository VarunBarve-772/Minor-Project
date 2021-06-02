import smtplib
import random

def sendEmail(emailTo, message):
	otp = random.randint(1000,9999)

	email = emailTo

	subject = f"OTP for {message} in College Forum."
	body = f"Your OTP is {str(otp)}"

	message = f'Subject: {subject}\n\n{body}'

	server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
	server.login("yourcollegeforum@gmail.com", "college00forum")
	server.sendmail("yourcollegeforum@gmail.com", email, message)
	server.quit()

	return otp

#---------SMS------------
