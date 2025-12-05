// sidebars.ts
import { SidebarConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/OVERVIEW',
        'introduction/VISION',
        'introduction/FAQ',
        'introduction/GLOSSARY',
      ],
    },
    {
      type: 'category',
      label: 'AI Automation',
      items: [
        'ai-automation/AI-AUDITOR',
        'ai-automation/AUTOVERIFICATION',
        'ai-automation/FRAUD-DETECTION',
        'ai-automation/RISK-SCORING',
        'ai-automation/SERVICE-RECOMMENDER',
      ],
    },
    {
      type: 'category',
      label: 'APIs',
      items: [
        'apis/INTRODUCTION',
        'apis/AUTHENTICATION',
        'apis/RATE-LIMITS',
        {
          type: 'category',
          label: 'REST APIs',
          items: [
            'apis/rest/ADMIN-REST',
            'apis/rest/BANKCHAIN-REST',
            'apis/rest/CIVICCHAIN-REST',
            'apis/rest/IDENTITY-REST',
          ],
        },
        {
          type: 'category',
          label: 'WebSocket APIs',
          items: [
            'apis/websocket/EVENT-TYPES',
            'apis/websocket/STREAMS',
          ],
        },
        {
          type: 'category',
          label: 'Blockchain APIs',
          items: [
            'apis/blockchain/ELMAHROSA-CHAIN',
            'apis/blockchain/PI-NETWORK',
            'apis/blockchain/SOLANA-PROGRAMS',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/HIGH-LEVEL',
        'architecture/DATA-FLOW-DIAGRAMS',
        'architecture/CIVICCHAIN-FLOW',
        'architecture/BANKCHAIN-ROUTING',
        'architecture/INFRASTRUCTURE-MAPS',
        'architecture/MULTI-CHAIN-EXECUTION',
        'architecture/PI-ECOSYSTEM-INTEGRATION',
      ],
    },
    {
      type: 'category',
      label: 'Bankchain',
      items: [
        'bankchain/OVERVIEW',
        'bankchain/API-GUIDE',
        'bankchain/AI-MONITORING',
        'bankchain/COMPLIANCE-ENGINE',
        'bankchain/FIAT-CRYPTO-RAILS',
        'bankchain/ISO20022-PIPELINES',
        'bankchain/SETTLEMENT-FLOWS',
      ],
    },
    {
      type: 'category',
      label: 'Branding',
      items: [
        'branding/BRAND-GUIDE',
        'branding/LOGO-USAGE',
        'branding/COLOR-SYSTEM',
        'branding/TYPOGRAPHY',
        'branding/UI-COMPONENTS',
      ],
    },
    {
      type: 'category',
      label: 'Changelog',
      items: [
        'changelog/v1',
        'changelog/v2',
        'changelog/v2.1',
      ],
    },
    {
      type: 'category',
      label: 'Civicchain',
      items: [
        'civicchain/CONSTITUTION-INTEGRATION',
        'civicchain/CIVIC-MIXER',
        'civicchain/GOVERNANCE-MODEL',
        'civicchain/PUBLIC-RECORDS',
        'civicchain/VOTING-PROTOCOL',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/LOCAL-SETUP',
        'deployment/STAGING',
        'deployment/PRODUCTION',
        'deployment/CLOUD-INFRA',
        'deployment/DOCKER-CONTAINERS',
        'deployment/VERSAL-DEPLOY',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'governance/CIVIC-BLOCKCHAIN-CONSTITUTION',
        'governance/GOVERNANCE-RULES',
        'governance/DECISION-MAKING',
        'governance/PUBLIC-TRANSPARENCY',
      ],
    },
    {
      type: 'category',
      label: 'Identity',
      items: [
        'identity/AUTHENTICATION-FLOWS',
        'identity/IDENTITY-FRAMEWORK',
        'identity/KYC-AML-PROCEDURES',
        'identity/CITIZEN-ACCESS',
        'identity/INSTITUTION-ACCESS',
        'identity/WALLET-CONNECT',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/BACKUPS',
        'operations/FAILOVER',
        'operations/LOGGING',
        'operations/MAINTENANCE',
        'operations/MONITORING',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      items: [
        'roadmap/2025',
        'roadmap/2026',
        'roadmap/BEYOND',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/AUDIT-TRAILS',
        'security/ENCRYPTION',
        'security/INCIDENT-RESPONSE',
        'security/PENETRATION-GUIDELINES',
        'security/SECURITY-MODEL',
        'security/THREAT-MODEL',
      ],
    },
    {
      type: 'category',
      label: 'Smart City',
      items: [
        'smart-city/CITY-DASHBOARDS',
        'smart-city/ELMAHROSA-MAP',
        'smart-city/GEO-IOT',
        'smart-city/PI-SMART-CITY',
        'smart-city/PITAXI',
      ],
    },
    {
      type: 'category',
      label: 'Sovereign Legal',
      items: [
        'sovereign-legal/ACCESS-RESTRICTIONS',
        'sovereign-legal/AUDIT-GUIDELINES',
        'sovereign-legal/COMPLIANCE-OBLIGATIONS',
        'sovereign-legal/DATA-SOVEREIGNTY',
        'sovereign-legal/LICENSE',
        'sovereign-legal/SOVEREIGN-DECREE',
      ],
    },
  ],
};

export default sidebars;
