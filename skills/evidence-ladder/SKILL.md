---
name: money-evidence-ladder
version: "0.1.0"
description: Evidence grading skill for financial research agents. Use it to separate primary sources, official filings, credible media, analysis, social leads, and rumors before producing an investment research conclusion.
license: MIT
homepage: https://teng.dev
---

# Money Evidence Ladder

Use this skill whenever a financial research answer depends on proof.

The goal is simple: do not let an agent treat rumors, social posts, or market narratives as proof. Every strong conclusion should be tied to a source tier.

## Evidence tiers

### Tier 1 — Primary / official evidence

Highest priority:

- annual reports, quarterly reports, interim reports
- SEC, HKEX, exchange announcements, A-share exchange files
- company announcements
- earnings call transcripts
- official order, contract, certification, regulator, project, patent, or standard documents
- tender results, environmental approval, energy approval, local project filing

### Tier 2 — Company-controlled but useful evidence

Use with care:

- investor relations presentations
- official website product pages
- company WeChat / blog / press release
- management interviews
- verified customer cases

### Tier 3 — Credible third-party evidence

Useful support, not final proof:

- reputable media
- trade publications
- specialist industry databases
- expert interviews
- analyst reports when not blindly repeated

### Tier 4 — Lead-generation evidence

Can guide research, cannot prove the thesis:

- X / Twitter threads
- Reddit / HN / forums
- KOL posts
- screenshots
- social charts
- community claims

### Tier 5 — Rumor / unsupported claim

Do not use as proof:

- anonymous tips
- unsourced chat screenshots
- unverified customer lists
- circulating target prices
- paid group claims

## Output labels

Every candidate or thesis should include one evidence label:

```text
strong      = at least one Tier 1 source plus supporting evidence
medium      = credible evidence exists, but primary proof is incomplete
weak        = plausible lead, but evidence is mostly Tier 3 or Tier 4
unverified  = only social/rumor evidence; do not rank as a high priority
```

## Agent behavior

Before ranking a company, answer:

1. What exact claim is being made?
2. What source proves it?
3. Is the source primary, official, media, analysis, social, or rumor?
4. What would make this evidence stale or invalid?
5. What source should be checked next?

## Safety boundary

If evidence is weak, say it clearly. Do not invent customers, contracts, capacity, price targets, market caps, or financial metrics.
