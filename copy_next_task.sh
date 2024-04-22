#!/bin/bash

##########################################################
# Script: copy_files.sh                                 #
# Description: This script copies files named           #
#              XX-index.html and XX-styles.css, where   #
#              XX is a two-digit number. It takes       #
#              a new number as an argument, increments  #
#              it, and copies the previous index and    #
#              styles files with the incremented        #
#              numbers. It also replaces the name of    #
#              the previous styles file inside the new  #
#              index file with the name of the new      #
#              styles file.                             #
#              Created with ChatGPT.                    #
#                                                       #
# Usage: ./copy_files.sh <new_number>                   #
# Arguments:                                            #
#   <new_number>: The new number for the files.         #
##########################################################

# Check if the correct number of arguments are passed
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <new_number>"
    exit 1
fi

# Extract new number from argument
NEW_NUM="$1"

# Calculate the previous number
PREV_NUM=$((NEW_NUM - 1))

# Find the previous index and styles files
PREV_INDEX=$(printf "%02d-index.html" $PREV_NUM)
PREV_STYLES=$(printf "%02d-styles.css" $PREV_NUM)

# Check if files exist
if [ ! -f "$PREV_INDEX" ]; then
    echo "Error: $PREV_INDEX not found"
    exit 1
fi

if [ ! -f "$PREV_STYLES" ]; then
    echo "Error: $PREV_STYLES not found"
    exit 1
fi

# Generate new file names
NEW_INDEX=$(printf "%02d-index.html" $NEW_NUM)
NEW_STYLES=$(printf "%02d-styles.css" $NEW_NUM)

# Check if new files already exist
if [ -f "$NEW_INDEX" ] || [ -f "$NEW_STYLES" ]; then
    echo "Error: $NEW_INDEX or $NEW_STYLES already exist"
    exit 1
fi

# Copy files
cp "$PREV_INDEX" "$NEW_INDEX"
cp "$PREV_STYLES" "$NEW_STYLES"

# Replace the name of the previous styles file inside the new index file
sed -i "s/$PREV_STYLES/$NEW_STYLES/g" "$NEW_INDEX"

echo "Files copied successfully:"
echo "$NEW_INDEX"
echo "$NEW_STYLES"