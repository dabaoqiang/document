---
title: Spring Framework 概述
icon: heart
category:
- springFramework

---
# Spring Framework 概述

>Version 5.3.24

Spring 使创建 Java 企业应用程序变得很容易。它提供了在企业环境中使用 Java 语言所需的一切，支持 Groovy 和 Kotlin 作为 JVM 上的替代语言，并且具有根据应用程序的需要创建多种架构的灵活性。从 Spring Framework 5.1开始，Spring 需要 JDK 8 + (Java SE 8 +)并为 JDK 11 LTS 提供开箱即用的支持。JavaSE8更新60被建议作为 Java8的最小补丁版本，但是通常建议使用最近的补丁版本。

Spring 支持广泛的应用程序场景。在大型企业中，应用程序通常存在很长时间，必须在 JDK 和应用程序服务器上运行，其升级周期超出了开发人员的控制。其他的可以在嵌入服务器的情况下作为一个 jar 运行，可能是在云环境中。还有一些可能是不需要服务器的独立应用程序(如批处理或集成工作负载)。

Spring 是开源的。它拥有一个庞大而活跃的社区，可以根据各种各样的实际用例提供持续的反馈。这帮助 Spring 在很长一段时间内成功地进化。

## 1. “春天”是什么意思

“ Spring”一词在不同的上下文中有不同的含义。它可以用来引用 SpringFramework 项目本身，这是所有这一切开始的地方。随着时间的推移，其他 Spring 项目已经构建在 Spring 框架之上。大多数情况下，当人们说“ Spring”时，他们指的是整个项目家族。这个参考文档关注的是基础: Spring 框架本身。

Spring 框架被划分为多个模块。应用程序可以选择它们需要的模块。核心是核心容器的模块，包括配置模型和依赖注入机制。除此之外，Spring 框架还为不同的应用程序体系结构提供了基础支持，包括消息传递、事务数据和持久性以及 Web。它还包括基于 Servlet 的 SpringMVC Web 框架，并行地包括 SpringWebFlux 响应式 Web 框架。

关于模块的注意事项: Spring 的框架 jar 允许部署到 JDK 9的模块路径(“ Jigsaw”)。对于支持 Jigsaw 的应用程序来说，Spring Framework 5 jar 带有“ Auto-Module-Name”清单条目，这些条目定义了独立于 jar 工件名称的稳定语言级模块名称(“ Spring.core”、“ Spring.context”等)(这些 jar 遵循相同的命名模式，使用“-”而不是“”)(例如“ Spring-core”和“ spring-context”)。当然，Spring 的框架 jar 在 JDK8和9 + 上的类路径上都能很好地工作。

## 2. Spring 的历史与 Spring 框架

Spring 成立于2003年，作为对早期 J2EE 规范复杂性的响应。虽然有些人认为 JavaEE 和 Spring 是竞争对手，但事实上，Spring 是 JavaEE 的补充。Spring 编程模型并不包含 JavaEE 平台规范; 相反，它集成了从 EE 框架中精心挑选的个别规范:

- Servlet API ([JSR 340](https://jcp.org/en/jsr/detail?id=340))
- WebSocket API ([JSR 356](https://www.jcp.org/en/jsr/detail?id=356))
- Concurrency Utilities ([JSR 236](https://www.jcp.org/en/jsr/detail?id=236))
- JSON Binding API ([JSR 367](https://jcp.org/en/jsr/detail?id=367))
- Bean Validation ([JSR 303](https://jcp.org/en/jsr/detail?id=303))
- JPA ([JSR 338](https://jcp.org/en/jsr/detail?id=338))
- JMS ([JSR 914](https://jcp.org/en/jsr/detail?id=914))
- 以及 JTA/JCA 设置，以便在必要时进行事务协调。

Spring 框架还支持依赖注入([JSR 330](https://www.jcp.org/en/jsr/detail?id=330)))和通用注释([JSR 250](https://jcp.org/en/jsr/detail?id=250)))规范，应用程序开发人员可以选择使用这些规范，而不是 Spring 框架提供的特定于 Spring 的机制。最初，这些都是基于通用的 javax 包。

从 Spring Framework 6.0开始，Spring 已经升级到了 JakartaEE 9级别(例如 Servlet 5.0 + ，JPA 3.0 +) ，它基于 Jakarta 名称空间，而不是传统的 javax 包。有了 EE 9作为最低标准，并且已经支持 EE 10，Spring 准备为 JakartaEE API 的进一步发展提供开箱即用的支持。Spring Framework 6.0完全兼容 Tomcat 10.1、 Jetty 11和 Undertow2.3作为 Web 服务器，也兼容 Hibernate ORM 6.1。

随着时间的推移，Java/JakartaEE 在应用程序开发中的角色发生了演变。在 J2EE 和 Spring 的早期，创建应用程序是为了将其部署到应用服务器上。今天，在 Spring Boot 的帮助下，应用程序是以一种对 devops 和云友好的方式创建的，Servlet 容器是嵌入式的，并且可以进行简单的更改。在 Spring Framework 5中，WebFlux 应用程序甚至不直接使用 Servlet API，而是可以在不是 Servlet 容器的服务器(比如 Netty)上运行。

Spring 继续创新和进化。除了 Spring 框架之外，还有其他项目，如Spring Boot, Spring Security, Spring Data, Spring Cloud, Spring Batch等。重要的是要记住，每个项目都有自己的原始码储存库、问题跟踪器和发布节奏。有关 Spring 项目的完整列表，请参阅  [spring.io/projects](https://spring.io/projects)

## 3. 设计原理

当您了解一个框架时，重要的是不仅要知道它做什么，而且要知道它遵循什么原则。以下是 Spring 框架的指导原则:

+ 提供各个层次的选择。Spring 允许您尽可能推迟设计决策。例如，可以通过配置切换持久性提供程序，而无需更改代码。对于许多其他基础设施问题和与第三方 API 的集成也是如此。

+ 包容不同的观点。Spring 支持灵活性，对于事情应该如何处理并不固执己见。它以不同的视角支持广泛的应用程序需求。

+ 保持向下兼容。Spring 的演变已经被精心管理，几乎没有在版本之间发生重大变化。Spring 支持一系列精心挑选的 JDK 版本和第三方库，以方便维护依赖 Spring 的应用程序和库。

+ 关注 API 设计。Spring 团队投入了大量的精力和时间来制作直观的 API，这些 API 可以支持多个版本和多年。

+ 为代码质量设置高标准。Spring 框架强调有意义、当前和准确的 javadoc。它是为数不多的可以声称没有包之间循环依赖关系的干净代码结构的项目之一。

## 4. 反馈和贡献

对于 how-to 问题或诊断或调试问题，我们建议使用 Stack Overflow。单击[here](https://stackoverflow.com/questions/tagged/spring+or+spring-mvc+or+spring-aop+or+spring-jdbc+or+spring-r2dbc+or+spring-transactions+or+spring-annotations+or+spring-jms+or+spring-el+or+spring-test+or+spring+or+spring-remoting+or+spring-orm+or+spring-jmx+or+spring-cache+or+spring-webflux+or+spring-rsocket?tab=Newest) 获取 Stack Overflow 上要使用的建议标记列表。如果您相当确定 Spring 框架中存在问题，或者希望推荐一个特性，请使用[GitHub Issues](https://github.com/spring-projects/spring-framework/issues).

如果您有一个解决方案或建议的修复，您可以在 [Github](https://github.com/spring-projects/spring-framework) 上提交一个拉请求。然而，请记住，除了最琐碎的问题，我们希望在问题跟踪程序中提交一张罚单，在那里进行讨论，并留下一个记录供将来参考。

有关详细信息，请参阅 [CONTRIBUTING](https://github.com/spring-projects/spring-framework/tree/main/CONTRIBUTING.md)顶级项目页面上的指导方针。

## 5. 入门指南

如果您刚刚开始使用 Spring，那么您可能希望通过创建一个基于 Spring 引导的应用程序来开始使用 Spring 框架。SpringBoot 提供了一种快速(并且自以为是)的方法来创建基于 Spring 的生产就绪的应用程序。它基于 Spring 框架，支持约定优于配置，旨在让你尽可能快地启动和运行。

您可以使用 [start.spring.io](https://start.spring.io/)生成一个基本项目，或者遵循“ ["Getting Started" guides](https://spring.io/guides)”指南中的一条，比如“开始构建 " [Getting Started Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)"。除了更容易理解之外，这些指南非常专注于任务，而且大多数都基于 SpringBoot。它们还涵盖了 Spring 投资组合中您在解决特定问题时可能需要考虑的其他项目。

**refrence**

>https://docs.spring.io/spring-framework/docs/5.3.24/reference/html/overview.html#overview-feedback
