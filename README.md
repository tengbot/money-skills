# Money Skills

Money Skills 是一套面向 AI Agent 的开源金融研究技能包。它把市场热点、产业链、公司证据和风险边界变成可复用的 Agent Skills，让个人助理、研究 Agent 和托管 SaaS 都能获得更稳定的金融研究流程。

推广网站：**https://teng.dev**

> Research support only. Money Skills 只做公开信息整理、产业链研究、证据核验和风险提示，不提供个性化买卖建议、收益承诺或自动交易指令。

## 第一版包含什么

```text
money-skills/
├── skills/
│   ├── serenity/         # 产业链卡点研究：热点 → 产业链 → 卡点 → 候选公司 → 证据 → 风险
│   ├── evidence-ladder/  # 证据分级：公告/财报/交易所文件优先，社媒仅作线索
│   └── risk-boundary/    # 投资研究边界：避免荐股、带单、收益承诺和无证据结论
├── adapters/
│   ├── codex/            # Codex / Agent Skills 安装适配
│   ├── claude-code/      # Claude Code 安装适配
│   ├── hermes/           # Hermes Agent 安装适配
│   ├── openclaw/         # OpenClaw workspace skill 安装适配
│   └── generic/          # 通用 Agent Skills 安装适配
├── scripts/              # 校验、列出技能、打包
├── docs/                 # 架构、安装、SaaS 集成说明
└── examples/             # 可复制的研究示例
```

## 核心能力

### Serenity 产业链卡点研究

把“AI 半导体很火”“机器人很火”“CPO 很火”这种模糊热点拆成：

```text
市场故事 → 系统变化 → 产业链层级 → 稀缺卡点 → 候选公司/基金 → 证据强度 → 风险 → 下一步核验
```

它不是直接问“买哪个”，而是先判断：

- 哪一层需求最真实？
- 哪一层最难扩产？
- 哪一层供应商少、认证周期长、客户难绕开？
- 哪家公司靠近真实瓶颈，哪家公司只是蹭主题？
- 哪些证据来自公告、财报、交易所文件、电话会、订单、专利或标准？
- 什么情况说明这个判断应该降级？

### Evidence Ladder 证据分级

默认优先级：

```text
官方文件 / 交易所公告 / 财报 / 电话会 / 监管或项目文件 / 专利标准
  > 公司 IR / 官方订单 / 招投标 / 环评能评 / 海关数据
  > 可信媒体 / 行业媒体 / 专业分析
  > 社媒/KOL 线索
  > 传闻
```

### Risk Boundary 风险边界

输出应使用：

```text
优先研究、值得跟踪、等待确认、风险升高、证据不足、下一步核验
```

避免使用：

```text
买入、卖出、满仓、目标价、稳赚、必涨、带单、荐股
```

## 安装

### Codex / OpenAI Agent Skills / 通用 Agent Skills

```bash
bash adapters/codex/install.sh
```

项目级安装：

```bash
MONEY_SKILLS_INSTALL_SCOPE=project bash adapters/codex/install.sh
```

### Claude Code

```bash
bash adapters/claude-code/install.sh
```

### Hermes Agent

```bash
bash adapters/hermes/install.sh
```

### OpenClaw

OpenClaw 适合把 Money Skills 装进个人多渠道 AI 助理。建议只在可信 workspace / main session 启用金融研究技能，不要直接开放给陌生 DM。

```bash
bash adapters/openclaw/install.sh
```

## 使用示例

```text
用 Money Skills 的 Serenity 模式研究 A 股 AI 半导体。
先排产业链层级，再找真正卡住扩产的环节，最后给出 5 个优先研究方向、证据强度、主要风险和下一步核验清单。
```

```text
用 Serenity 模式挑战这家公司是不是 CPO 核心供应商。
它到底卡在哪一层？证据够不够？市场可能高估了什么？什么情况说明判断应该降级？
```

```text
比较这几家公司：A、B、C。
按产业链位置、卡点控制力、证据强度、扩产难度、估值压力和风险排序。
```

## 命令

```bash
npm run list
npm run validate
npm run pack
```

## 和 teng.dev / SaaS 的关系

`money-skills` 是开源技能包，适合开发者、本地 Agent、OpenClaw、Hermes、Claude Code 和 Codex 用户安装。

`teng.dev` 是官方推广和托管产品入口。托管 SaaS 可以在此基础上提供：

- 网页版 Serenity 产业链卡点研究
- 模型路由：GPT、Claude、DeepSeek、Groq、OpenAI-compatible
- 数据源：新闻、公告、财报、行情、社交热度
- 历史记录、报告导出、团队研究库、计费和审计

## Attribution

`skills/serenity` 的方法论和部分结构改编自 `muxuuu/serenity-skill`，遵循 MIT License。Money Skills 不是 Serenity / @aleabitoreddit 的官方项目，除非另有明确说明。

## License

MIT
