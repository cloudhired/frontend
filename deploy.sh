#!/bin/bash
yarn build
if [ $? -eq 0 ]
then
    gcloud app deploy dev-cloudhired-frontend.yaml -q
else
    echo "Error occurred during building, check and fix."
fi