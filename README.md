# Shop Angular Cloudfront

Angular version: ~17.

## Task 2 deployment links

### Manual deployment

- S3 website URL: http://myshop-task2.s3-website-us-east-1.amazonaws.com/
- CloudFront URL: https://d3vy0mph3xhwxy.cloudfront.net/

### Automated deployment (AWS CDK)

- S3 website URL: http://myshop-task2-cdk.s3-website-us-east-1.amazonaws.com/
- CloudFront URL: https://d354dzfm34mq3n.cloudfront.net/

## Automated deployment commands (Task 2.2)

Run from the project root:

```bash
npm run cdk:bootstrap -- aws://044099381264/us-east-1
npm run cdk:synth
npm run deploy
npm run invalidate
```

Useful maintenance command:

```bash
npm run cdk:destroy
```

## Task 5 deployment links

### Automated deployment (AWS CDK)

- CloudFront URL: https://d360sx6lq5b25q.cloudfront.net
- S3 website URL: http://myshop-task2-cdk.s3-website-us-east-1.amazonaws.com/
- Distribution ID: EU0WCO1DCAPMZ
- Backend Product API: https://ayhfzo2pc9.execute-api.us-east-1.amazonaws.com/prod/
- Backend Import API: https://z7z7s1eel4.execute-api.us-east-1.amazonaws.com/prod/import

## Task 5 - S3 Import Integration

The frontend is integrated with the backend Import Service (AWS Lambda + API Gateway + S3).

### How it works

1. User uploads a CSV file via **Admin → Manage Products**
2. Frontend calls `GET https://z7z7s1eel4.execute-api.us-east-1.amazonaws.com/prod/import?name=<filename>` to get a pre-signed S3 URL
3. Frontend PUTs the CSV file directly to S3 using the pre-signed URL
4. S3 triggers the `importFileParser` Lambda which parses and logs each product row to CloudWatch

Note: the import endpoint may return either a raw signed URL string or an object containing `signedUrl`; the frontend handles both response shapes.

### CSV format

```csv
id,title,description,price,count
1,Product Name,Product description,19.99,100
```

### Verify upload

Check **CloudWatch → Log groups → `/aws/lambda/importFileParser`** for parsed CSV rows after upload.

## Notes

- CloudFront uses Origin Access Control (OAC) to access S3 privately.
- Angular SPA routes are handled via CloudFront custom error responses (403/404 -> /index.html).
- The S3 REST endpoint format is:

```text
BUCKET_NAME.s3.REGION.amazonaws.com
```
