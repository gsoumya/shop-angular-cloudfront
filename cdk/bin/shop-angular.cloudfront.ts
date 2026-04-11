#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ShopAngularCloudfrontStack } from '../lib/shop-angular.cloudfront-stack';

const app = new cdk.App();

new ShopAngularCloudfrontStack(app, 'ShopAngularCloudfrontStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  stackName: 'shop-angular-cloudfront',
});
