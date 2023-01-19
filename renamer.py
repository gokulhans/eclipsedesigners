import os

folder_path = 'c:\\Users\\gbroz\\Desktop\\images' # replace with the path to the folder containing the images

# Get a list of all image files in the folder
image_files = [f for f in os.listdir(folder_path) if f.endswith('.jpg') or f.endswith('.png')]

# Sort the list of image files
image_files.sort()

# Rename the image files to numbers in order
for i, file_name in enumerate(image_files):
    file_path = os.path.join(folder_path, file_name)
    new_file_name = f'{i}.jpg'
    new_file_path = os.path.join(folder_path, new_file_name)
    os.rename(file_path, new_file_path)
