---
title: SpringBoot 入门指南
icon: discover
order: 1
category:
- 技术文章
- java
---

# SpringBoot 入门指南

## 1. 介绍一下 Spring Boot

SpringBoot 帮助您创建可以运行的独立的、基于 Spring 的生产级应用程序。

我们对 Spring 平台和第三方库采取了一种固执己见的观点，因此您可以从最小的麻烦开始。

大多数 Spring 引导应用程序只需要很少的 Spring 配置。

您可以使用 SpringBoot 创建可以通过使用 Java-jar 或更传统的 war 部署启动的 Java 应用程序。

我们还提供了一个运行“ Spring 脚本”的命令行工具。

我们的主要目标是:

+ 为所有 Spring 开发提供一个极其快速和广泛可访问的入门体验。

+ 开箱即用，但随着需求开始偏离默认设置，要尽快摆脱干扰。

+ 提供一系列大型项目类型通用的非功能特性(例如嵌入式服务器、安全性、度量、健康检查和外部化配置)。

+ 绝对没有代码生成，也不需要 XML 配置。

## 2. 系统要求

SpringBoot3.0.1需要 Java17，并且兼容 Java19。还需要 SpringFramework6.0.3或更高版本。

为以下生成工具提供了明确的生成支持:

| Build Tool | Version            |
| :--------- | :----------------- |
| Maven      | 3.5+               |
| Gradle     | 7.x (7.5 or later) |

### 2.1. Servlet 容器

Spring Boot 支持以下嵌入式 servlet 容器:

| Name                                | Servlet Version |
| :---------------------------------- | :-------------- |
| Tomcat 10.0                         | 5.0             |
| Jetty 11.0                          | 5.1             |
| Undertow 2.2 (Jakarta EE 9 variant) | 5.0             |

您还可以将 Spring Boot 应用程序部署到任何兼容 servlet 5.0 + 的容器中。

### 2.2. GraalVM Native Images

使用 GraalVM 22.3或更高版本，可以将 Spring 启动应用程序转换为本机映像。

可以使用 GraalVM 提供的本地构建工具 Gradle/Maven 插件或本地映像工具创建映像。还可以使用本机映像 Paketo 构建包创建本机映像。

以下版本支持:

| Name               | Version |
| :----------------- | :------ |
| GraalVM Community  | 22.3    |
| Native Build Tools | 0.9.19  |

## 3. 安装 Spring Boot

SpringBoot 可以与“classic”Java 开发工具一起使用，也可以作为命令行工具安装。无论哪种方式，您都需要 JavaSDKv17或更高版本。在开始之前，您应该使用以下命令检查当前的 Java 安装:

 ~~~bash
 java -version
 ~~~

如果您是 Java 开发的新手，或者您想尝试 Spring Boot，那么您可能需要首先尝试 Spring Boot CLI (命令行接口)。否则，请继续阅读“classic”安装说明。

### 3.1. Java 开发人员的安装说明

 您可以像使用任何标准 Java 库一样使用 SpringBoot。为此，请包含适当的 spring-boot-* 。类路径上的 jar 文件。SpringBoot 不需要任何特殊的工具集成，因此您可以使用任何 IDE 或文本编辑器。另外，SpringBoot 应用程序没有什么特别之处，因此您可以像运行其他 Java 程序一样运行和调试 SpringBoot 应用程序。

虽然您可以复制 Spring Boot jar，但是我们通常建议您使用支持依赖管理的构建工具(如 Maven 或 Gradle)。

##### Maven Installation

Spring Boot 与 Apache Maven 3.3或更高版本兼容。如果你还没有安装 Maven，你可以按照下面的 Maven.apache.org 进行操作。

Spring Boot 依赖项使用 org.springframework.Boot groupId。通常，MavenPOM 文件从 spring-boot-starter-father 项目继承，并声明对一个或多个“ Starters”的依赖关系。SpringBoot 还提供了一个可选的 Maven 插件来创建可执行的 jar。

##### Gradle Installation

Spring Boot 兼容 Gradle 7.x (7.5或更高版本)。如果您还没有安装 Gradle，您可以按照 Gradle.org 上的说明进行操作。

### 3.2. Spring Boot CLI安装

SpringBootCLI (命令行接口)是一个命令行工具，您可以使用它来快速构建 Spring 的原型。它允许您运行 Groovy 脚本，这意味着您拥有一个熟悉的类 Java 语法，而不需要那么多样板代码。

您不需要使用 CLI 来处理 Spring Boot，但是这是一种在没有 IDE 的情况下启动 Spring 应用程序的快速方法。

>这里只参考一种，其他的请参考官方文档

##### Windows Scoop Installation

如果您在 Windows 上并使用 Scoop，您可以使用以下命令安装 Spring 引导 CLI:

## 4. 开发第一个 Spring 引导应用程序

本节描述如何开发一个小的“ Hello World!”Web 应用程序，突出了一些 SpringBoot 的关键特性。我们使用 Maven 来构建这个项目，因为大多数 IDE 都支持它

在我们开始之前，打开一个终端并运行以下命令来确保您已经安装了有效的 Java 和 Maven 版本:



#### 4.1. 创建 POM

我们首先需要创建一个 Maven pom.xml 文件。Xml 是用于构建项目的配方。打开您最喜欢的文本编辑器并添加以下内容:

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>myproject</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.0.1</version>
    </parent>

    <!-- Additional lines to be added here... -->

</project>

~~~

#### 4.2. 添加类路径依赖项

SpringBoot 提供了一些“ Starters”，可以将 jar 添加到类路径中。我们的冒烟测试应用程序在 POM 的父节中使用 spring-boot-starter-father。Spring-boot-starter-father 是一个特殊的 starter，它提供了有用的 Maven 默认值。它还提供了一个依赖项管理部分，以便您可以省略“受保护的”依赖项的版本标记。

其他“入门者”提供了在开发特定类型的应用程序时可能需要的依赖项。因为我们正在开发一个 Web 应用程序，所以我们添加了一个 spring-boot-starter-web 依赖项。在此之前，我们可以通过运行以下命令查看当前的情况:

~~~shell
$ mvn dependency:tree

[INFO] com.example:myproject:jar:0.0.1-SNAPSHOT
~~~

Tree 命令打印项目依赖项的树表示形式。您可以看到 spring-boot-starter-father 本身没有提供任何依赖项。要添加必要的依赖项，请编辑 pom.xml 并在父节下面添加 spring-boot-starter-web 依赖项:

~~~xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>

~~~

如果你再次运行 mvn 依赖项: 树，你会看到现在有许多额外的依赖项，包括 Tomcat web 服务器和 Spring Boot 本身。

#### 4.3. 编写代码

为了完成我们的应用程序，我们需要创建一个单独的 Java 文件。默认情况下，Maven 从 src/main/java 编译源代码，因此您需要创建目录结构，然后添加一个名为 src/main/java/MyApplication.java 的文件来包含以下代码:

~~~java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class MyApplication {

    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }

}
~~~

虽然这里没有很多代码，但是发生了很多事情。在接下来的几个部分中，我们将逐步介绍重要的部分。

##### @RestController 和@RequestMapping 注释

`MyApplication` 类的第一个注释是`@RestController`。这就是所谓的原型注释。它为阅读代码的人提供了提示，并为 Spring 提供了类扮演特定角色的提示。在本例中，我们的类是 web`@Controller`，因此 Spring 在处理传入的 Web 请求时会考虑它。

`@RequestMapping` 注释提供“路由”信息。它告诉 Spring，任何带有`/`path 的 HTTP 请求都应该映射到 `home `方法。`@RestController` 注释告诉 Spring 将生成的字符串直接返回给调用者。

##### @SpringBootApplication注解

第二个类级别的注释是`@SpringBootApplication`，这个注释被称为元注释，它结合了`@SpringBootConfiguration`、`@EnableAutoConfiguration` 和`@ComponententScan`。

其中，我们最感兴趣的注释是@EnableAutoConfiguration。@ EnableAutoConfiguration 告诉 Spring 启动根据您添加的 jar 依赖项“猜测”您希望如何配置 Spring。由于 Spring-boot-starter-web 添加了 Tomcat 和 Spring MVC，因此自动配置假设您正在开发 Web 应用程序并相应地设置 Spring。

::: info

Starters 根 自动配置

自动配置被设计成能够很好地与“Starters ”一起工作，但是这两个概念并没有直接联系起来。您可以在启动程序之外自由选择 jar 依赖项。SpringBoot 仍然尽力自动配置应用程序。

:::

##### main方法

我们应用程序的最后一部分是`main`方法。这是应用程序入口点遵循 Java 约定的标准方法。我们的` main` 方法通过调用 run 委托给 SpringBoot 的 SpringApplication 类。SpringApplication 启动我们的应用程序，启动 Spring，然后启动自动配置的 Tomcat web 服务器。我们需要将 MyApplication.class 作为参数传递给 run 方法，以告诉 SpringApplication 哪个是主 Spring 组件。还通过 args 数组公开任何命令行参数。

#### 4.4. 运行这个例子

此时，您的应用程序应该可以工作了。由于使用了 spring-boot-starter-father POM，因此有了一个有用的运行目标，可以用它来启动应用程序。键入 mvn spring-boot: 从根项目目录运行以启动应用程序。您应该看到类似于下面的输出:

~~~shell
$ mvn spring-boot:run

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::  (v3.0.1)
....... . . .
....... . . . (log output here)
....... . . .
........ Started MyApplication in 2.222 seconds (process running for 6.514)

~~~

如果你打开一个 web 浏览器到 localhost: 8080，你会看到下面的输出:

```tex
Hello World!
```

要优雅地退出应用程序，请按 ctrl-c。

#### 4.5. 创建一个可执行的jar包

我们通过创建一个完全自包含的可执行 jar 文件来完成我们的示例，我们可以在生产环境中运行这个文件。可执行 jar (有时称为“fat jars”)是包含已编译类以及代码需要运行的所有 jar 依赖项的归档文件。

要创建一个可执行的 jar，我们需要将 `spring-boot-maven-plugin` 添加到 `pom.xml `中。为此，在依赖项部分下面插入以下代码行:

~~~xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>

~~~

保存 pom.xml 并从命令行运行 mvn 包，如下所示:

~~~bash
$ mvn package

[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------------------------------------------------------
[INFO] Building myproject 0.0.1-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO] .... ..
[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ myproject ---
[INFO] Building jar: /Users/developer/example/spring-boot-example/target/myproject-0.0.1-SNAPSHOT.jar
[INFO]
[INFO] --- spring-boot-maven-plugin:3.0.1:repackage (default) @ myproject ---
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------

~~~

如果查看目标目录，应该会看到 myproject-0.0.1-SNAPSHOT.jar。文件大小应该在10MB 左右。如果你想窥视内部，你可以使用 jar tvf，如下所示:

~~~shell
$ jar tvf target/myproject-0.0.1-SNAPSHOT.jar
~~~

您还应该看到一个更小的文件 myproject-0.0.1-SNAPSHOT.jar。目标目录中的原始文件。这是 Maven 在 SpringBoot 重新打包之前创建的原始 jar 文件。

要运行该应用程序，请使用 java-jar 命令，如下所示:

~~~shell
$ java -jar target/myproject-0.0.1-SNAPSHOT.jar

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::  (v3.0.1)
....... . . .
....... . . . (log output here)
....... . . .
........ Started MyApplication in 2.536 seconds (process running for 2.864)

~~~

与前面一样，要退出应用程序，请按 ctrl-c。

## 5.下一步要干什么

希望本节提供了一些 SpringBoot 基础知识，并帮助您开始编写自己的应用程序。如果您是一个面向任务的开发人员，那么您可能需要跳转到 Spring.io，并遵循一些入门指南来解决特定的“如何使用 Spring 做到这一点?”问题。我们还有特定于 Spring Boot 的“ How-to”参考文档。

否则，下一个合乎逻辑的步骤就是阅读“使用 Spring 启动进行开发”。如果你真的没有耐心，你也可以跳到前面去读一读 Spring Boot 的特性。

## 法律

>Copyright © 2012-2022
>
>Copies of this document may be made for your own use and for distribution to others, provided that you do not charge any fee for such copies and further provided that each copy contains this Copyright Notice, whether distributed in print or electronically.

## 参考

>[mvc](https://docs.spring.io/spring-framework/docs/6.0.3/reference/html/web.html#mvc)
>
>[guides](https://spring.io/guides/)



