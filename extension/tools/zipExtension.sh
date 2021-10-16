#! /bin/bash
#
# Should be executed from extension dir: `./tools/zipExtension.sh`

rm -f ../outputs/extension.zip
zip -r ../outputs/extension.zip manifest.json icons/ js/ _locales/ README.md