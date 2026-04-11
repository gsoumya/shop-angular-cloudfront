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

## Notes

- CloudFront uses Origin Access Control (OAC) to access S3 privately.
- Angular SPA routes are handled via CloudFront custom error responses (403/404 -> /index.html).
- The S3 REST endpoint format is:

```text
BUCKET_NAME.s3.REGION.amazonaws.com
```


>
> ⓘ Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
>
> husky - commit-msg script failed (code 1)

To fix it you either need to follow conventional commit messages rules, or remove `.husky/pre-commit` file which enables the aforementioned rule.
