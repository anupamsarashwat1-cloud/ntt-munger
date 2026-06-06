#!/bin/bash
ARTIFACT_DIR="/home/anupam-sarashwat/.gemini/antigravity/brain/75c39407-05e0-4706-8d9e-8444d203e1b9"
GALLERY_DIR="assets/images/gallery"

# Get md5 of existing gallery images
declare -A existing_md5s
for f in $GALLERY_DIR/*; do
    if [ -f "$f" ]; then
        md5=$(md5sum "$f" | awk '{print $1}')
        existing_md5s[$md5]=1
    fi
done

# Find next gallery index
next_index=$(ls -1 $GALLERY_DIR | grep -oP '\d+' | sort -n | tail -1)
if [ -z "$next_index" ]; then next_index=0; fi

added=0
# Loop through all media files
for f in $ARTIFACT_DIR/media__*.{jpg,png,jpeg}; do
    if [ -f "$f" ]; then
        # skip the 2 old files from May 27
        if [[ "$f" == *"1779888457212"* || "$f" == *"1779887781916"* ]]; then
            continue
        fi
        
        md5=$(md5sum "$f" | awk '{print $1}')
        if [ -z "${existing_md5s[$md5]}" ]; then
            next_index=$((next_index + 1))
            ext="${f##*.}"
            cp "$f" "$GALLERY_DIR/gallery-${next_index}.${ext}"
            existing_md5s[$md5]=1
            added=$((added + 1))
            echo "Added $f as gallery-${next_index}.${ext}"
        fi
    fi
done

echo "Total newly added: $added"
echo "Total gallery images now: $next_index"
