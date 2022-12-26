---
title: 用 Spring Boot 进行开发
icon: markdown
order: 2
category:
- java
tag:
- springBoot
---

# 用 Spring Boot 进行开发

## 1. 系统构建

强烈建议您选择一个支持依赖项管理并且可以使用发布到“ Maven Central”存储库的构建系统。我们建议您选择Maven或Gradle。让 SpringBoot 与其他构建系统(例如 Ant)一起工作是可能的，但是它们并没有得到很好的支持。

### 1.1. Dependency Management

SpringBoot 的每个版本都提供了一个它所支持的依赖项的管理列表。实际上，您不需要为构建配置中的任何这些依赖项提供版本，因为 Spring Boot 会为您管理这些依赖项。当您升级 SpringBoot 本身时，这些依赖项也会以一致的方式进行升级。

::: info

You can still specify a version and override Spring Boot’s recommendations if you need to do so.

:::

策划列表包含所有可以用于 Spring Boot 的 Spring 模块，以及一个经过改进的第三方库列表。

该列表可以作为标准的材料清单(`spring-boot-dependencies`) ，可以与 Maven 和 Gradle 一起使用。

::: tip warn

SpringBoot 的每个版本都与 SpringFramework 的基本版本相关联。我们强烈建议您不要指定其版本。

:::

### 1.2. Maven

要了解如何在 Maven 中使用 Spring Boot，请参阅 Spring Boot 的 Maven 插件文档:

[参考](https://docs.spring.io/spring-boot/docs/3.0.1/maven-plugin/reference/htmlsingle/#?)

### 1.3. Gradle

要了解如何使用 Spring Boot with Gradle，请参阅 Spring Boot’s Gradle 插件的文档:

[参考](https://docs.spring.io/spring-boot/docs/3.0.1/gradle-plugin/reference/htmlsingle/)

### 1.4. Ant

自己去看

### 1.5. Starters

Starters是一组方便的依赖关系描述，可以包含在应用程序中。

您可以一站式地了解所有需要的 Spring 和相关技术，而不必搜索示例代码和复制粘贴大量的依赖关系描述符

例如，如果希望开始使用 Spring 和 JPA 进行数据库访问，请在项目中包含 `Spring-boot-starter-data-JPA` 依赖。

Starters包含许多依赖项，您需要这些依赖项使项目快速启动和运行，并且具有一致的、受支持的托管传递依赖项集合。

::: tip

名称中有什么  

所有正式Starters都遵循类似的命名模式;`spring-boot-starter-*`,`*` 是一个特定类型的应用程序。

这种命名结构是为了在您需要找到starter时提供帮助。许多 IDE 中的 Maven 集成允许您按名称搜索依赖项

例如，在安装了适当的 Eclipse 或 Spring Tools 插件之后，您可以在 POM 编辑器中按 ctrl-space 并键入“ Spring-boot-starter”以获得完整的列表。

正如“创建您自己的[Starter](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#features.developing-auto-configuration.custom-starter)”部分所解释的，第三方启动程序不应该从 Spring-Boot 开始，因为它是为正式的 Spring Boot 构件保留的。相反，第三方启动者通常以项目的名称开始。例如，名为 `Thirdpartyproject` 的第三方启动项目通常被命名为`Thirdpartyproject-spring-boot-starter`。

:::

Spring Boot 在 `org.springframework.Boot` 组下提供了以下应用程序starters :

*Table 1. Spring Boot application starters*

| Name                                          | Description                                                  |
| :-------------------------------------------- | :----------------------------------------------------------- |
| `spring-boot-starter`                         | Core starter, including auto-configuration support, logging and YAML |
| `spring-boot-starter-amqp`                    | Starter for using Spring AMQP and Rabbit MQ                  |
| `spring-boot-starter-aop`                     | Starter for aspect-oriented programming with Spring AOP and AspectJ |
| `spring-boot-starter-artemis`                 | Starter for JMS messaging using Apache Artemis               |
| `spring-boot-starter-batch`                   | Starter for using Spring Batch                               |
| `spring-boot-starter-cache`                   | Starter for using Spring Framework’s caching support         |
| `spring-boot-starter-data-cassandra`          | Starter for using Cassandra distributed database and Spring Data Cassandra |
| `spring-boot-starter-data-cassandra-reactive` | Starter for using Cassandra distributed database and Spring Data Cassandra Reactive |
| `spring-boot-starter-data-couchbase`          | Starter for using Couchbase document-oriented database and Spring Data Couchbase |
| `spring-boot-starter-data-couchbase-reactive` | Starter for using Couchbase document-oriented database and Spring Data Couchbase Reactive |
| `spring-boot-starter-data-elasticsearch`      | Starter for using Elasticsearch search and analytics engine and Spring Data Elasticsearch |
| `spring-boot-starter-data-jdbc`               | Starter for using Spring Data JDBC                           |
| `spring-boot-starter-data-jpa`                | Starter for using Spring Data JPA with Hibernate             |
| `spring-boot-starter-data-ldap`               | Starter for using Spring Data LDAP                           |
| `spring-boot-starter-data-mongodb`            | Starter for using MongoDB document-oriented database and Spring Data MongoDB |
| `spring-boot-starter-data-mongodb-reactive`   | Starter for using MongoDB document-oriented database and Spring Data MongoDB Reactive |
| `spring-boot-starter-data-neo4j`              | Starter for using Neo4j graph database and Spring Data Neo4j |
| `spring-boot-starter-data-r2dbc`              | Starter for using Spring Data R2DBC                          |
| `spring-boot-starter-data-redis`              | Starter for using Redis key-value data store with Spring Data Redis and the Lettuce client |
| `spring-boot-starter-data-redis-reactive`     | Starter for using Redis key-value data store with Spring Data Redis reactive and the Lettuce client |
| `spring-boot-starter-data-rest`               | Starter for exposing Spring Data repositories over REST using Spring Data REST |
| `spring-boot-starter-freemarker`              | Starter for building MVC web applications using FreeMarker views |
| `spring-boot-starter-graphql`                 | Starter for building GraphQL applications with Spring GraphQL |
| `spring-boot-starter-groovy-templates`        | Starter for building MVC web applications using Groovy Templates views |
| `spring-boot-starter-hateoas`                 | Starter for building hypermedia-based RESTful web application with Spring MVC and Spring HATEOAS |
| `spring-boot-starter-integration`             | Starter for using Spring Integration                         |
| `spring-boot-starter-jdbc`                    | Starter for using JDBC with the HikariCP connection pool     |
| `spring-boot-starter-jersey`                  | Starter for building RESTful web applications using JAX-RS and Jersey. An alternative to [`spring-boot-starter-web`](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#spring-boot-starter-web) |
| `spring-boot-starter-jooq`                    | Starter for using jOOQ to access SQL databases with JDBC. An alternative to [`spring-boot-starter-data-jpa`](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#spring-boot-starter-data-jpa) or [`spring-boot-starter-jdbc`](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#spring-boot-starter-jdbc) |
| `spring-boot-starter-json`                    | Starter for reading and writing json                         |
| `spring-boot-starter-mail`                    | Starter for using Java Mail and Spring Framework’s email sending support |
| `spring-boot-starter-mustache`                | Starter for building web applications using Mustache views   |
| `spring-boot-starter-oauth2-client`           | Starter for using Spring Security’s OAuth2/OpenID Connect client features |
| `spring-boot-starter-oauth2-resource-server`  | Starter for using Spring Security’s OAuth2 resource server features |
| `spring-boot-starter-quartz`                  | Starter for using the Quartz scheduler                       |
| `spring-boot-starter-rsocket`                 | Starter for building RSocket clients and servers             |
| `spring-boot-starter-security`                | Starter for using Spring Security                            |
| `spring-boot-starter-test`                    | Starter for testing Spring Boot applications with libraries including JUnit Jupiter, Hamcrest and Mockito |
| `spring-boot-starter-thymeleaf`               | Starter for building MVC web applications using Thymeleaf views |
| `spring-boot-starter-validation`              | Starter for using Java Bean Validation with Hibernate Validator |
| `spring-boot-starter-web`                     | Starter for building web, including RESTful, applications using Spring MVC. Uses Tomcat as the default embedded container |
| `spring-boot-starter-web-services`            | Starter for using Spring Web Services                        |
| `spring-boot-starter-webflux`                 | Starter for building WebFlux applications using Spring Framework’s Reactive Web support |
| `spring-boot-starter-websocket`               | Starter for building WebSocket applications using Spring Framework’s WebSocket support |

*Table 2. Spring Boot production starters*

| Name                           | Description                                                  |
| :----------------------------- | :----------------------------------------------------------- |
| `spring-boot-starter-actuator` | Starter for using Spring Boot’s Actuator which provides production ready features to help you monitor and manage your application |

*Table 3. Spring Boot technical starters*

| Name                                | Description                                                  |
| :---------------------------------- | :----------------------------------------------------------- |
| `spring-boot-starter-jetty`         | Starter for using Jetty as the embedded servlet container. An alternative to [`spring-boot-starter-tomcat`](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#spring-boot-starter-tomcat) |
| `spring-boot-starter-log4j2`        | Starter for using Log4j2 for logging. An alternative to [`spring-boot-starter-logging`](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#spring-boot-starter-logging) |
| `spring-boot-starter-logging`       | Starter for logging using Logback. Default logging starter   |
| `spring-boot-starter-reactor-netty` | Starter for using Reactor Netty as the embedded reactive HTTP server. |
| `spring-boot-starter-tomcat`        | Starter for using Tomcat as the embedded servlet container. Default servlet container starter used by [`spring-boot-starter-web`](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#spring-boot-starter-web) |
| `spring-boot-starter-undertow`      | Starter for using Undertow as the embedded servlet container. An alternative to [`spring-boot-starter-tomcat`](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#spring-boot-starter-tomcat) |

要了解如何交换技术方面，请参阅如何  [swapping web server](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#howto.webserver.use-another)  和 [logging system](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#howto.logging.log4j)。

::: tip note

有关其他社区贡献的starters的列表，请参见 GitHub 上 spring-boot-starter 模块中的  [README file](https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-starters/README.adoc)。

:::

## 2.构建代码

SpringBoot 不需要任何特定的代码布局来工作。

### 2.1. 使用“ default”包

当一个类不包含一个包声明时，它被认为是在“默认包”中。通常不鼓励使用“默认包”，应该避免使用。

它可能会给使用`@ComponentScan`、`@ConfigurationPropertiesScan`、`@EntityScan` 或`@SpringBootApplication` 注释的 Spring 启动应用程序带来特殊的问题，因为每个 jar 中的每个类都会被读取。

:::tip note

我们建议您遵循 Java 推荐的包命名约定，并使用反向域名(例如，com.example.project)。

:::

### 2.2.  定位主程序类

我们通常建议您将主应用程序类定位在其他类之上的根包中。`@SpringBootApplication` 注释通常放置在主类上，并且它隐式地为某些项目定义了一个基本的“搜索包”。例如，如果您正在编写一个 JPA 应用程序，那么@SpringBootApplication 注释类的包将用于搜索`@Entity `项。使用根包还允许组件扫描仅应用于您的项目。

:::tip note

如果您不想使用`@SpringBootApplication`，它导入的`@EnableAutoConfiguration` 和`@ComponententScan` 注释将定义该行为，因此您也可以使用这些行为。

:::

下面的清单显示了一个典型的布局:

```tex
com
 +- example
     +- myapplication
         +- MyApplication.java
         |
         +- customer
         |   +- Customer.java
         |   +- CustomerController.java
         |   +- CustomerService.java
         |   +- CustomerRepository.java
         |
         +- order
             +- Order.java
             +- OrderController.java
             +- OrderService.java
             +- OrderRepository.java
```

  `MyApplication.java `文件将声明 `main `方法和基本的`@SpringBootApplication`，如下所示:

~~~java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
~~~

## 3. 类配置

SpringBoot 支持基于 Java 的配置。尽管可以将 `SpringApplication `与 XML 源一起使用，但我们通常建议您的主要是单个`@Configuration `类。通常定义` main` 方法的类可以作为主`@Configuration`。

:::tip note

互联网上已经发布了许多使用 XML 配置的 Spring 配置示例。如果可能，经常尝试使用等效的基于 Java 的配置。搜索 `Enable * `注解是一个很好的起点。

:::

#### 3.1.  导入其他配置类

您不需要将所有`@Configuration` 放到一个类中。`@Import` 注释可用于导入其他配置类。或者，可以使用`@ComponententScan` 自动扫描所有 Spring 组件，包括`@Configuration` 类。

#### 3.2. 导入XML配置

如果您绝对必须使用基于 XML 的配置，我们建议您仍然从`@Configuration` 类开始。然后可以使用`@ImportResource` 注释来加载 XML 配置文件。

## 4.自动装配

SpringBoot 自动配置尝试根据添加的 jar 依赖项自动配置 Spring 应用程序。例如，如果 `HSQLDB `在您的类路径上，而您还没有手动配置任何数据库连接 bean，那么 Spring Boot 会自动配置一个内存数据库。

您需要通过将`@EnableAutoConfiguration` 或`@SpringBootApplication` 注释添加到`@Configuration` 类中来选择自动配置。

:::tip note

您应该只添加一个`@SpringBootApplication` 或`@EnableAutoConfiguration` 注解。我们通常建议您只在主`@Configuration `类中添加一个或另一个。

:::

### 4.1. 逐步替换自动配置

自动配置是非侵入性的。在任何时候，您都可以开始定义自己的配置来替换自动配置的特定部分。例如，如果添加自己的 DataSource bean，则默认的嵌入式数据库支持将后退。

如果需要了解当前正在应用哪些自动配置，以及为什么要这样做，请使用`--debug` 开关启动应用程序。这样做可以为核心日志记录器的选择启用调试日志，并将条件报告记录到控制台。

### 4.2. 禁用特定的自动配置类

如果您发现不需要的特定自动配置类正在被应用，您可以使用`@SpringBootApplication `的排除属性来禁用它们，如下面的示例所示:

~~~java
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class MyApplication {
}

~~~

如果类不在类路径中，则可以使用注释的 `excludeName` 属性并指定完全限定名。如果您更喜欢使用`@EnableAutoConfiguration` 而不是`@SpringBootApplication`，那么也可以使用 `excludeName`。最后，您还可以通过使用 `spring.autoconfigure.exclude 属性`來控制要排除的自动设置类的清单。

::: tip 

您可以在注解级别和通过使用属性定义排除。

:::

::: tip  Note

尽管自动配置类是公共的，但是这个类中唯一被认为是公共 API 的方面是可以用来禁用自动配置的类的名称。这些类的实际内容，例如嵌套的配置类或 bean 方法，仅供内部使用，我们不建议直接使用它们。

:::

## 5.Spring bean和依赖注入

您可以自由地使用任何标准的 Spring 框架技术来定义 bean 及其注入的依赖项。我们通常建议使用构造函数注入来连接依赖项，使用`@ComponententScan `来查找 bean。

如果您按照上面建议的方式构造代码(将应用程序类放在一个顶部包中) ，那么您可以添加`@ComponentScan`，而不需要任何参数，或者使用`@SpringBootApplication` 注释，该注解隐式地包含了它。所有应用程序组件(`@Component`、`@Service`、`@Repository`、`@Controller` 等)都会自动注册为 Spring Bean。

下面的例子展示了`@Service` Bean，它使用构造函数注入来获得所需的 `RiskAssessor` Bean:

~~~java
import org.springframework.stereotype.Service;

@Service
public class MyAccountService implements AccountService {

    private final RiskAssessor riskAssessor;

    public MyAccountService(RiskAssessor riskAssessor) {
        this.riskAssessor = riskAssessor;
    }
    // ...
}
~~~

如果一个 bean 有多个构造函数，那么你需要在`@Autowired `中标记你希望 Spring 使用的构造函数:

~~~java
import java.io.PrintStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyAccountService implements AccountService {

    private final RiskAssessor riskAssessor;

    private final PrintStream out;

    @Autowired
    public MyAccountService(RiskAssessor riskAssessor) {
        this.riskAssessor = riskAssessor;
        this.out = System.out;
    }

    public MyAccountService(RiskAssessor riskAssessor, PrintStream out) {
        this.riskAssessor = riskAssessor;
        this.out = out;
    }
    // ...

}
~~~

:::tip 

注意，如何使用构造函数注入将 riskAssessor 字段标记为 final，表明不能随后更改该字段。

:::

## 6.用 @SpringBootApplication注解

许多 Spring Boot 开发人员喜欢他们的应用程序使用自动配置、组件扫描，并且能够在他们的“应用程序类”上定义额外的配置。可以使用一个`@SpringBootApplication `注释来启用这三个特性，即:

- `@EnableAutoConfiguration`: 启用 Spring Boot 的自动配置机制
- `@ComponentScan`: 应用程序所在的包上启用@Component 扫描(请参阅最佳实践) (see [the best practices](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#using.structuring-your-code))
- `@SpringBootConfiguration`: 允许在上下文中注册额外的 bean 或导入额外的配置类。Spring 标准`@Configuration `的一种替代方案，它有助于在集成测试中进行配置检测。

~~~java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Same as @SpringBootConfiguration @EnableAutoConfiguration @ComponentScan
@SpringBootApplication
public class MyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
~~~

:::tip Note

`@SpringBootApplication` 还提供别名来定制`@EnableAutoConfiguration` 和`@ComponententScan `的属性。

:::

:::tip Note

这些特性都不是强制性的，您可以选择用它所支持的任何特性来替换这个单独的注解。例如，您可能不希望在应用程序中使用组件扫描或配置属性扫描:

~~~java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Import;

@SpringBootConfiguration(proxyBeanMethods = false)
@EnableAutoConfiguration
@Import({ SomeConfiguration.class, AnotherConfiguration.class })
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
~~~

在这个例子中，`MyApplication `就像任何其他 Spring Boot 应用程序一样，只不过`@Component `注释类和`@ConfigurationProperties `注释类不会被自动检测到，而且用户定义的 bean 是显式导入的(参见@Import)。

:::

## 7.运行你的应用

### 7.1. Running From an IDE

### 7.2. Running as a Packaged Application

### 7.3. Using the Maven Plugin

### 7.4. Using the Gradle Plugin

### 7.5. Hot Swapping

## 8.开发人员工具

### 8.1. Diagnosing Classloading Issues

### 8.2. Property Defaults

### 8.3. Automatic Restart

### 8.4. LiveReload

## 8.5. Global Settings

### 8.6. Remote Applications

## 9.打包应用程序到生产环境

可执行的 jar 可以用于生产部署，因为它们是自包含的，所以也非常适合基于云的部署。

对于额外的“生产就绪”特性，比如健康状况、审计和度量 REST 或 JMX 端点，可以考虑添加 spring-boot-actiator。有关详细信息，请参阅可生产的特性。*[Production-ready Features](https://docs.spring.io/spring-boot/docs/3.0.1/reference/htmlsingle/#actuator)* 

## 10.接下来干什么

现在您应该了解如何使用 SpringBoot 以及应该遵循的一些最佳实践。您现在可以继续深入了解特定的 Spring Boot 特性，或者您可以跳过前面的内容，阅读 Spring Boot 的“生产就绪”方面。
