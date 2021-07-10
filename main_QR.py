# Import QRCode from pyqrcode
import string
from random import randint, choice, choices
import string
import numpy as np
import pyqrcode
import png
from pyqrcode import QRCode
# String which represents the QR code
s = "Matched successfully"
# Generate QR code
url = pyqrcode.create(s)
#number of letters of the name
N=3
# Create and save the svg file
url.svg(''.join(choices(string.ascii_uppercase +string.digits, k = N))+".svg", scale = 8)

# Create and save the png file
url.png(''.join(choices(string.ascii_uppercase +string.digits, k = N))+".png", scale = 6)

