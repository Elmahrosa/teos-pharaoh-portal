# 🌍 Elmahrosa Ecosystem — TEOS Egypt

The **Pharaoh Portal** is the front door to the TEOS Egypt ecosystem.  
This document provides the definitive index of all repositories under **Elmahrosa International**, grouped by category.

---

## 🏛 Core & Portal
- [Teos-Pharaoh-Portal](https://github.com/Elmahrosa/Teos-Pharaoh-Portal) — National gateway and unified digital portal
- [Elmahrosa-Blockchain](https://github.com/Elmahrosa/Elmahrosa-Blockchain) — Core chain components

---

## 💳 Banking & Finance
- [Teos-Bankchain](https://github.com/Elmahrosa/Teos-Bankchain) — Compliance-first banking rails
- [Teos-Bankchain-Mobile](https://github.com/Elmahrosa/Teos-Bankchain-Mobile) — Mobile banking integration
- [Teos-Gold-Reserve](https://github.com/Elmahrosa/Teos-Gold-Reserve) — Digital gold reserve module
- [Nilex](https://github.com/Elmahrosa/Nilex) — Exchange and settlement layer

---

## 🏛 Identity, Governance & AI
- [International-Civic-Blockchain-Constitution](https://github.com/Elmahrosa/International-Civic-Blockchain-Constitution) — Civic governance framework
- [TEOS-AI-Auditor](https://github.com/Elmahrosa/TEOS-AI-Auditor) — Automated compliance and risk scoring
- [TEOS-NFT-AI-Generator](https://github.com/Elmahrosa/TEOS-NFT-AI-Generator) — NFT creation and marketplace engine

---

## 🚖 Smart Cities & Mobility
- [TeosPitaxi](https://github.com/Elmahrosa/TeosPitaxi) — PiTaxi mobility integration
- [ElMahrosa-Pi-Smart-City](https://github.com/Elmahrosa/ElMahrosa-Pi-Smart-City) — Smart city infrastructure
- [Teos-Pi-Smart-City](https://github.com/Elmahrosa/Teos-Pi-Smart-City) — Pi Network smart city services

---

## 📜 Licensing
All repositories are governed under **TESL v2.0 Sovereign License**.  
Audit-ready, regulator-aligned, evergreen operation.

---

## 🔗 Ecosystem Diagram

```mermaid
graph TD
    Portal[Pharaoh Portal] --> BankChain[Teos-Bankchain]
    Portal --> Blockchain[Elmahrosa-Blockchain]
    Portal --> PiTaxi[TeosPitaxi]
    Portal --> SmartCity[ElMahrosa-Pi-Smart-City]
    Portal --> AI[TEOS-AI-Auditor]
    Portal --> NFT[TEOS-NFT-AI-Generator]
    Portal --> Constitution[International-Civic-Blockchain-Constitution]
    BankChain --> Mobile[Teos-Bankchain-Mobile]
    BankChain --> Gold[Teos-Gold-Reserve]
    BankChain --> Nilex[Nilex]
