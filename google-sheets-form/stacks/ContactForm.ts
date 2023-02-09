import { StackContext, Api } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "POST /": "packages/functions/src/lambda.handler",
    },
    customDomain: {
      domainName: "funcs.syta.co",
      cdk: {
        certificate: Certificate.fromCertificateArn(stack, "mainDomainCert", 'arn:aws:acm:us-east-1:560487950772:certificate/afc1d163-096d-4e92-871d-1aeb8392330b'),
      },
      path: "webpage",
      isExternalDomain: true,
    },
    defaults: {
      function: {
        environment: {
          GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
          GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY!
        }
      }
    }
  });
  stack.addOutputs({
    ApiEndpoint: api.url,

  });
}
