# Shop Angular Cloudfront

Angular version: ~17.

Repo maintainers:

- [Sergey Gultyayev](https://github.com/gultyayev)

## The purpose

The repository was created to have an Angular version of e-shop for EPAM NodeJS AWS course. At the same time we strive to make this repository follows best practices so it may be used as a starter for new projects with all the necessary toolings already set up.

## NodeJS AWS course integration

All the necessary API endpoints are in the environments files `environment.ts` (for dev builds). Also it contains feature flags to enable/disable endpoints invocations from within the app so to ensure that you don't get errors for not implemented API endpoints.

## Contribution

Create an issue with the detailed description of the improvement/issue.

If you would like to help implementing some feature, you should ask the maintainers for approval so to ensure that the feature is desired in the repository and no efforts go wasted.

## Get up and running

Prerequisites: NodeJS LTS v18.x and higher

Follow the steps:

- git clone
- npm i
- ng serve

## Task 2 deployment links

### Manual deployment

- S3 website URL: http://myshop-task2.s3-website-us-east-1.amazonaws.com/
- CloudFront URL: https://d3vy0mph3xhwxy.cloudfront.net/

### Automated deployment (AWS CDK)

- S3 website URL: http://myshop-task2-cdk.s3-website-us-east-1.amazonaws.com/
- CloudFront URL: https://d360sx6lq5b25q.cloudfront.net/
- Distribution ID: EU0WCO1DCAPMZ

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

## Troubleshooting

### Cannot commit

Most likely you are getting a message

> **Commit failed with error**
>
> ...
>
> ✖ subject may not be empty [subject-empty]
>
> ✖ type may not be empty [type-empty]
>
> ✖ found 2 problems, 0 warnings
>
> ⓘ Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
>
> husky - commit-msg script failed (code 1)

To fix it you either need to follow conventional commit messages rules, or remove `.husky/pre-commit` file which enables the aforementioned rule.
