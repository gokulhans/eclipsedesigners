import os
from PIL import Image

folder_path = 'c:\\Users\\gbroz\\Desktop\\images' # replace with the path to the folder containing the images

for file_name in os.listdir(folder_path):
    if file_name.endswith('.jpg') or file_name.endswith('.png'):
        file_path = os.path.join(folder_path, file_name)
        with Image.open(file_path) as img:
            # Generate new file name based on the image
            new_file_name = f'{img.width}x{img.height}_{file_name}'
            new_file_path = os.path.join(folder_path, new_file_name)
            os.rename(file_path, new_file_path)
