curl "http://localhost:4741/runs/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "run": {
      "distance": "'"${DISTANCE}"'",
      "time": "'"${TIME}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
