import sys
from pathlib import Path

from PIL import Image
import numpy as np

target_filepath = Path('onepiece_full.png')
img = Image.open(target_filepath).convert('RGBA')  # make sure image is RGBA
img_3x = img.resize((img.width * 3, img.height * 3), Image.NEAREST)
img_3x_arr = np.array(img_3x)

for i in range(img_3x_arr.shape[0]):
    if i % 3 == 0 or (i - 2) % 3 == 0:
        img_3x_arr[i, :, 3] = 0
for i in range(img_3x_arr.shape[1]):
    if i % 3 == 0 or (i - 2) % 3 == 0:
        img_3x_arr[:, i, 3] = 0

img_3x_back = Image.fromarray(img_3x_arr)
img_3x_back.save(f'onepiece_template.png')
