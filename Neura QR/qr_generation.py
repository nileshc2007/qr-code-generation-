import qrcode

# 1. Define the link you want to attach
link_url = "index.html"

# 2. Configure the QR code properties
qr = qrcode.QRCode(
    version=1,       # Controls the size of the QR Code (1 is lowest, 40 is highest)
    box_size=10,     # Controls how many pixels each "box" of the QR code is
    border=4,        # Controls the thickness of the border (minimum is 4)
)

# 3. Add the link data to the QR code object
qr.add_data(link_url)
qr.make(fit=True)

# 4. Generate the image with custom colors
# 'fill_color' is the QR pattern, 'back_color' is the background
img = qr.make_image(fill_color="black", back_color="white")

# 5. Save the image file to your workspace
img.save("my_link_qrcode.png")

print("QR Code generated successfully!")