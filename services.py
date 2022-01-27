import os
os.system('ps -ef | grep domino > 10.txt')
with open ('10.txt', "r") as ifile :
    for line in ifile :
        if "/opt/hcl/domino/notes/latest/linux/" in line :
            data = line.split("/opt/hcl/domino/notes/latest/linux/")
            print(data[1])
#os.system('rm -rf 10.txt')

