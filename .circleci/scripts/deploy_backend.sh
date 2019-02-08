#!/bin/sh -ex

set -ex

BUCKET=$1
TEAM_NAME=$2
BACKEND_ENV_NAME=$3
aws s3 cp s3://"${BUCKET}/${TEAM_NAME}-firebase.json" "firebase-credentials.json"

eb deploy ${BACKEND_ENV_NAME}
