# ExprBuild 项目概览

ExprBuild 是一个面向 Desmos 图形计算器的 JavaScript/TypeScript 开发框架，旨在让开发者能够以编程方式创建、组织和导出 Desmos 图表。

## 项目愿景

我们希望通过 ExprBuild，让开发者能够用熟悉的编程方式来构建复杂的 Desmos 图表。不再需要手动在 Desmos 界面上输入表达式，而是通过代码来精确控制每一个图形元素，实现更高效的工作流程。

核心理念是：**以代码的形式在用户和 Desmos 之间搭建桥梁**。通过直观的 DSL (领域特定语言) 语法，让数学表达式的创建变得简单而自然。

## 使用示例

使用 ExprBuild，您可以这样创建数学表达式：

```javascript
// 定义基础变量
const a = expl`a = 3`;
const b = expl`b = 4`;

// 创建依赖于这些变量的表达式
const c = expr`${a}^2 + ${b}^2`;

// 创建一个圆的方程
const circle = expl`x^2 + y^2 = ${c}`;
```

这段代码会在 Desmos 中生成一个半径为 5 的圆（因为 3² + 4² = 25，圆的半径为 5）。

## 产品组成

ExprBuild 项目包含三个主要部分：

1. **核心库** - 提供表达式创建、依赖管理和 Desmos 状态生成的基础功能
2. **开发服务器** - 基于 Vite 的本地开发环境，支持实时预览和热更新
3. **VSCode 插件** - 提供语法高亮、代码补全等功能，增强开发体验

## 技术实现

### 表达式系统

ExprBuild 的表达式系统分为两种主要类型：

- **显式表达式 (explicit)** - 使用 `expl` 标签创建，会在 Desmos 中生成独立的变量定义
- **内联表达式 (inline)** - 使用 `expr` 标签创建，作为中间计算步骤，不会在 Desmos 中单独显示

这种设计让我们能够灵活地组织复杂的数学关系，同时保持 Desmos 界面的整洁。

### DSL 实现

我们的 DSL 基于 JavaScript 的模板字符串功能，这样做有几个优势：

- 无需自定义解析器，利用 JS 现有功能
- 支持变量插值，轻松引用其他表达式
- 与 TypeScript 类型系统集成，提供编译时检查

DSL 解析过程包括词法分析、语法分析、语义分析和代码生成四个步骤，最终生成 Desmos 兼容的 LaTeX 表达式。

### 依赖追踪

ExprBuild 实现了精确的依赖追踪系统：

- 每个表达式对象保存其依赖的引用
- 表达式创建后内容不可变，确保依赖关系稳定
- 使用 TypeScript 类型系统在编译时检测潜在问题

这种设计确保了生成的 Desmos 图表能够正确反映表达式之间的关系。

### 开发服务器

开发服务器基于 Vite 插件实现，提供以下功能：

- 通过虚拟模块导入核心库生成的 Desmos 状态
- 监听表达式文件变化，实时更新预览
- 通过 WebSocket 推送更新，实现无刷新预览

## 当前进展

### 已完成工作

- VSCode 插件的 DSL 语法高亮实现
- 语言服务器框架初始化
- 核心库的基础表达式注册表实现
- expl/expr 基类定义
- monorepo 依赖关系配置
- Vite 插件基础框架搭建
- Desmos Calculator 基础渲染功能

### 下一步计划

**核心优先级（v0.1.0）**
- 类型系统开发：模板字符串类型解析、依赖图类型推导、表达式类型校验
- 依赖追踪系统：实现变量名唯一性校验、开发状态生成机制

**次级任务（v0.1.1）**
- 开发服务器增强：虚拟模块导入、HMR 支持
- 测试体系搭建：配置测试环境、编写核心测试用例

**长期规划**
- VSCode 插件智能提示功能
- 多图表管理功能
- 生产环境构建优化

## 开发注意事项

- 项目在 Windows 环境下开发，使用 PowerShell 作为命令行工具
- 使用 pnpm 作为包管理器
- 引入新工具或技术前需要讨论评估

## 版本信息

当前版本：0.0.0（开发初期）