import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    // {
    //   type: "doc",
    //   id: "stakingAPI/core-staking-api",
    // },
    // {
    //   type: "category",
    //   label: "CORE Staking ",
    //   items: [
        {
          type: "doc",
          id: "stakingAPI/retrieve-staking-summary",
          label: "Retrieve Staking Summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/retrieve-current-dual-staking-grade",
          label: "Retrieve Current Dual Staking Grade",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/retrieve-full-list-of-btc-staking-transactions",
          label: "Retrieve Full List of BTC Staking Transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/retrieve-btc-staking-transactions",
          label: "Retrieve BTC staking transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/retrieve-reward-claim-history",
          label: "Retrieve Reward Claim History",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/retrieve-latest-staking-round",
          label: "Retrieve Latest Staking Round",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/retrieve-reward-distribution-of-a-round",
          label: "Retrieve Reward Distribution of a Round",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/retrieve-validator-details",
          label: "Retrieve Validator Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stakingAPI/retrieve-overall-staking-data-on-core-blockchain",
          label: "Retrieve Overall Staking Data on Core Blockchain",
          className: "api-method get",
        },

    //   ],
    // },
  ],
};

export default sidebar.apisidebar;
