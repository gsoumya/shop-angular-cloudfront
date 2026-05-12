import * as path from 'node:path';
import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class ShopAngularCloudfrontStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const frontendBucket = new s3.Bucket(this, 'MyshopTask2CdkBucket', {
      bucketName: 'myshop-task2-cdk',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const distribution = new cloudfront.Distribution(
      this,
      'MyshopTask2CdkDistribution',
      {
        comment: 'myshop-task2-cdk-distribution',
        defaultRootObject: 'index.html',
        defaultBehavior: {
          origin:
            origins.S3BucketOrigin.withOriginAccessControl(frontendBucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        },
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: '/index.html',
          },
        ],
      },
    );

    new s3deploy.BucketDeployment(this, 'DeployFrontend', {
      sources: [
        s3deploy.Source.asset(
          path.resolve(__dirname, '../../dist/app/browser'),
        ),
      ],
      destinationBucket: frontendBucket,
    });

    new CfnOutput(this, 'CloudFrontUrl', {
      value: `https://${distribution.domainName}`,
    });
    new CfnOutput(this, 'S3WebsiteUrl', {
      value: `http://${frontendBucket.bucketWebsiteDomainName}`,
    });
    new CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
    });
  }
}
