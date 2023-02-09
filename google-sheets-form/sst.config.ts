import { SSTConfig } from "sst";
import { API } from "./stacks/ContactForm";
import { Api } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "google-sheets-form",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API)
  },
} satisfies SSTConfig;
