#!/usr/bin/env python
import csv, sys, json

reader=csv.DictReader(sys.stdin)
arr = [*reader]
print(json.dumps(arr, indent=4))