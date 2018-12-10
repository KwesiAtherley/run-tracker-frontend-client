curl "http://localhost:4741/runs" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "run": {
      "distance": "'"${DISTANCE}"'",
      "time": "'"${TIME}"'",
      "date": "'"${DATE}"'",
      "user_id": "'"${U_ID}"'"
    }
  }'

echo
