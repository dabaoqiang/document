---
title: IoC Container
icon: heart
category:
- springFramework

---
# IoC Container-01

>Version 5.3.24

参考文档的这一部分涵盖了 Spring 框架中绝对不可或缺的所有技术。

其中最重要的是 Spring 框架的控制反转(IoC)容器。在对 Spring 框架的 IoC 容器进行彻底处理之后，紧接着是对 Spring 面向切面的程序设计(AOP)技术的全面介绍。Spring 框架有自己的 AOP 框架，它在概念上很容易理解，并且成功地解决了 Java 企业编程中80% 的 AOP 需求。

还提供了 Spring 与 AspectJ 的集成(目前在特性方面是最丰富的，当然也是 Java 企业空间中最成熟的 AOP 实现)。



## The IoC Container

本章介绍了 Spring 的控制反转(IoC)容器。

### 1.1. Spring IoC 容器和 Bean 简介

本章介绍了 Spring 框架中控制反转(IoC)原则的实现。IoC 也被称为依赖注入(DI)。这是一个过程，对象仅通过构造函数参数、工厂方法的参数或从工厂方法构造或返回后在对象实例上设置的属性来定义它们的依赖项(也就是它们使用的其他对象)。容器然后在创建 bean 时注入这些依赖项。这个过程从根本上来说是反向的(因此才有了这个名字，控制反转) ，bean 自己通过直接构造类或服务定位器(Service Locator)模式这样的机制来控制它的依赖关系的实例化或位置。

`org.springframework.beans` 和 `org.springframework.context` 包是 Spring Framework 的 IoC 容器的基础。`BeanFactory` 接口提供了一种能够管理任何类型对象的高级配置机制。`ApplicationContext` 是 `BeanFactory `的一个子接口。它补充称:

+ 更容易与 Spring 的 AOP 特性集成

+ 消息资源处理(用于国际化)

+ 事件发布

+ 应用层特定上下文，比如 Web 应用程序中使用的`WebApplicationContext`。

简而言之，`BeanFactory` 提供了配置框架和基本功能，`ApplicationContext `添加了更多企业特定的功能。`ApplicationContext` 是 `BeanFactory `的一个完整超集，在本章中只用于描述 Spring 的 IoC 容器。有关使用 `BeanFactory` 而不是 `ApplicationContext` 的更多信息，请参见介绍 `BeanFactory API `的部分。

在 Spring 中，构成应用程序主干并由 Spring IoC 容器管理的对象称为 bean。Bean 是一个由 Spring IoC 容器实例化、组装和管理的对象。否则，bean 只是应用程序中的许多对象之一。Bean 以及它们之间的依赖关系反映在容器使用的配置元数据中。

### 1.2. 容器概述

`org.springframework.context.ApplicationContext` 接口代表 Spring IoC 容器，负责实例化、配置和组装 bean。容器通过读取配置元数据获取关于要实例化、配置和组装哪些对象的指令。配置元数据用 XML、 Java 注释或 Java 代码表示。它允许您表示组成应用程序的对象以及这些对象之间的丰富的相互依赖关系。

Spring 提供了` ApplicationContext `接口的几个实现。在独立应用程序中，通常创建 `ClassPathXmlApplicationContext `或 `FileSystemXmlApplicationContext `的实例。XML 一直是定义配置元数据的传统格式，您可以指示容器使用 Java 注释或代码作为元数据格式，方法是提供少量 XML 配置，以声明方式启用对这些额外元数据格式的支持。

在大多数应用场景中，不需要显式的用户代码来实例化一个或多个 Spring IoC 容器实例。 例如，在 Web 应用程序场景中，应用程序的 web.xml 文件中简单的八行（或左右）样板 Web 描述符 XML 通常就足够了（请参阅 Web 应用程序的便捷 ApplicationContext 实例化[Convenient ApplicationContext Instantiation for Web Applications](https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/spring-framework-reference/core.html#context-create)）。 如果您使用 Spring Tool Suite（一个 Eclipse 驱动的开发环境），您可以通过几次鼠标点击或键盘敲击轻松地创建这个样板配置。

下图显示了 Spring 工作原理的高级视图。 您的应用程序类与配置元数据相结合，以便在创建和初始化 `ApplicationContext` 之后，您拥有一个完全配置且可执行的系统或应用程序。

https://docs.spring.io/spring-framework/docs/5.2.1.RELEASE/spring-framework-reference/images/container-magic.png

#### 1.2.1. Configuration Metadata

如上图所示，SpringIoC 容器使用一种形式的配置元数据。此配置元数据表示作为应用程序开发人员如何告诉 Spring 容器在应用程序中实例化、配置和组装对象。

配置元数据传统上以简单直观的 XML 格式提供，本章的大部分内容都使用这种格式来传达 Spring IoC 容器的关键概念和功能。

#### 1.2.2. Instantiating a Container

#### 1.2.3. Using the Container

### 1.3. Bean Overview TODO

### 1.4. Dependencies TODO

### 1.5. Bean Scopes TODO

### 1.6. Customizing the Nature of a Bean TODO

### 1.7. Bean Definition Inheritance TODO

### 1.8. Container Extension Points TODO

>
> 未coding完
