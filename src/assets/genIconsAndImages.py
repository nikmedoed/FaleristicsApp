import os
import string

PATHS = [
    "icons"
]

os.chdir(os.path.dirname(os.path.realpath(__file__)))

for path in PATHS:
    with open(fr"{path}/index.tsx", "w", encoding="utf8") as index:
        names = []
        for file in os.listdir(path):
            if file != "index.tsx":
                filename = (" ".join(file.split(".")[:-1]))
                filename = filename.replace("_", " ").title().replace(" ", "")
                names.append(filename)
                index.write(f"import {filename} from './{file}'\n")
        d = ',\n\t'.join(names)
        index.write(f"\nexport default {{\n\t{d}\n}}")

path = "images"
with open(fr"{path}/index.tsx", "w", encoding="utf8") as index:
    names = []
    for file in os.listdir(path):
        if file != "index.tsx":
            filename = (" ".join(file.split(".")[:-1]))
            filename = filename.replace("_", " ").title().replace(" ", "")
            names.append(filename)
            index.write(f"const {filename} = require('./{file}')\n")
    d = ',\n\t'.join(names)
    index.write(f"\nexport default {{\n\t{d}\n}}")


path = "fonts"
with open(fr"{path}/index.tsx", "w", encoding="utf8") as index:
    names = []
    for file in os.listdir(path):

        if file != "index.tsx":
            file = " ".join(file.split(".")[:-1])
            filename = " ".join(file.split("-")[1:])
            filename = "".join([i[0].upper()+i[1:]
                               for i in filename.replace("_", " ").split(" ")])
            names.append(f"{filename}: '{file}'")
    d = ',\n\t'.join(names)
    index.write(f"\nconst font = {{\n\t{d}\n}}\n\nexport default font")
