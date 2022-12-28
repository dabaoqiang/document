---
title: Java 优质开源系统设计项目
icon: markdown
order: 1
category:
- java
tag:
- 优质开源
---

# Java 优质开源系统设计项目

## 基础框架

- **[Spring Boot open in new window](https://github.com/spring-projects/spring-boot)** ：Spring Boot 可以轻松创建独立的生产级基于 Spring 的应用程序,内置 web 服务器让你可以像运行普通 Java 程序一样运行项 目。另外，大部分 Spring Boot 项目只需要少量的配置即可，这有别于 Spring 的重配置。
- **[Javalinopen in new window](https://github.com/tipsy/javalin)** ：一个轻量级的 Web 框架，同时支持 Java 和 Kotlin，被微软、红帽、Uber等公司使用。
- **[Quarkusopen in new window](https://github.com/quarkusio/quarkus)** : 用于编写 Java 应用程序的云原生和容器优先的框架。
- **[Guiceopen in new window](https://github.com/google/guice)** ：Google 开源的一个轻量级依赖注入框架，相当于一个功能极简化的轻量级 Spring Boot。在某些情况下非常实用，就比如说我们的项目只需要使用依赖注入，不需要 AOP 等功能特性。
- **[SOFABootopen in new window](https://github.com/sofastack/sofa-boot)** ：SOFABoot 基于 Spring Boot ，不过在其基础上增加了 Readiness Check，类隔离，日志空间隔离等等能力。 配套提供的还有：SOFARPC（RPC 框架）、SOFABolt（基于 Netty 的远程通信框架）、SOFARegistry（注册中心）...详情请参考：[SOFAStack open in new window](https://github.com/sofastack) 。
- [**Spring Batch**open in new window](https://github.com/spring-projects/spring-batch) : Spring Batch 是一个轻量级但功能又十分全面的批处理框架，主要用于批处理场景比如从数据库、文件或队列中读取大量记录。不过，需要注意的是：**Spring Batch 不是调度框架**。商业和开源领域都有许多优秀的企业调度框架比如 Quartz、XXL-JOB、Elastic-Job。它旨在与调度程序一起工作，而不是取代调度程序。更多介绍请参考 [Spring Batch 官方文档open in new window](https://docs.spring.io/spring-batch/docs/4.3.x/reference/html/spring-batch-intro.html#spring-batch-intro)，入门教程可以参考 [Spring Batch 从入门到实战open in new window](https://mrbird.cc/Spring-Batch入门.html)。

## 数据库

### 数据库连接池

- **[Druidopen in new window](https://github.com/alibaba/druid)** : 阿里巴巴数据库事业部出品，为监控而生的数据库连接池。
- **[HikariCPopen in new window](https://github.com/brettwooldridge/HikariCP)** : 一个可靠的高性能 JDBC 连接池。Springboot 2.0 选择 HikariCP 作为默认数据库连接池。

###  数据库框架

- **[MyBatis-Plusopen in new window](https://github.com/baomidou/mybatis-plus)** : [MyBatis-Plusopen in new window](https://github.com/baomidou/mybatis-plus)（简称 MP）是一个 [MyBatisopen in new window](http://www.mybatis.org/mybatis-3/) 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。
- **[Redissonopen in new window](https://github.com/redisson/redisson)** ： Redis 基础上的一个 Java 驻内存数据网格（In-Memory Data Grid）,支持超过 30 个对象和服务:`Set`,`SortedSet`, `Map`, `List`, `Queue`, `Deque` ......，并且提供了多种分布式锁的实现。更多介绍请看：[《Redisson 项目介绍》open in new window](https://github.com/redisson/redisson/wiki/Redisson项目介绍)。

###  数据同步

- **[Canalopen in new window](https://github.com/alibaba/canal)** [kə'næl] : Canal 译意为水道/管道/沟渠，主要用途是基于 MySQL 数据库增量日志解析，提供增量数据订阅和消费。
- **[DataXopen in new window](https://github.com/alibaba/DataX)** ：DataX 是阿里巴巴集团内被广泛使用的离线数据同步工具/平台，实现包括 MySQL、Oracle、SqlServer、Postgre、HDFS、Hive、ADS、HBase、TableStore(OTS)、MaxCompute(ODPS)、DRDS 等各种异构数据源之间高效的数据同步功能。相关项目：**[DataX-Webopen in new window](https://github.com/WeiYe-Jing/datax-web)** （DataX 集成可视化页面，选择数据源即可一键生成数据同步任务）。

其他：**[Flinkxopen in new window](https://github.com/DTStack/flinkx)** （基于 Flink 的分布式数据同步工具）。

### 时序数据库

- **[IoTDBopen in new window](https://github.com/apache/iotdb)** ：一款 Java 语言编写的国产时序数据库，为用户提供数据收集、存储和分析等服务。与 Hadoop、Spark 和可视化工具(如 Grafana)无缝集成，满足了工业 IoT 领域中海量数据存储、高吞吐量数据写入和复杂数据查询分析的需求。
- **[KairosDBopen in new window](https://github.com/kairosdb/kairosdb)** ：一个基于 Cassandra 的快速分布式可扩展时间序列数据库。

##  搜索引擎

- **[Elasticsearchopen in new window](https://github.com/elastic/elasticsearch)** （推荐）：开源，分布式，RESTful 搜索引擎。
- **[Solropen in new window](https://lucene.apache.org/solr/)** : Solr（读作“solar”）是 Apache Lucene 项目的开源企业搜索平台。

##  认证授权

- **[WxJavaopen in new window](https://github.com/Wechat-Group/WxJava)** : WxJava （微信开发 Java SDK），支持包括微信支付、开放平台、小程序、企业微信/企业号和公众号等的后端开发。
- **[Sa-Tokenopen in new window](https://github.com/dromara/sa-token)** ：轻量级 Java 权限认证框架。支持认证授权、单点登录、踢人下线、自动续签等功能。
- **[JustAuthopen in new window](https://github.com/justauth/JustAuth)** ：小而全而美的第三方登录开源组件。目前已经集成了诸如：Github、Gitee、支付宝、新浪微博、微信、Google、Facebook、Twitter、StackOverflow 等国内外数十家第三方平台。

## 网络通讯

- **[Nettyopen in new window](https://github.com/netty/netty)** : 一个基于 NIO 的 client-server(客户端服务器)框架，使用它可以快速简单地开发网络应用程序。
- **[Retrofitopen in new window](https://github.com/square/retrofit)** ：适用于 Android 和 Java 的类型安全的 HTTP 客户端。Retrofit 的 HTTP 请求使用的是 [OkHttpopen in new window](https://square.github.io/okhttp/) 库（一款被广泛使用网络框架）。
- **[Forestopen in new window](https://gitee.com/dromara/forest)** ：轻量级 HTTP 客户端 API 框架，让 Java 发送 HTTP/HTTPS 请求不再难。它比 OkHttp 和 HttpClient 更高层，是封装调用第三方 restful api client 接口的好帮手，是 retrofit 和 feign 之外另一个选择。
- **[netty-websocket-spring-boot-starteropen in new window](https://github.com/YeautyYE/netty-websocket-spring-boot-starter)** :帮助你在 Spring Boot 中使用 Netty 来开发 WebSocket 服务器，并像 spring-websocket 的注解开发一样简单。

## 测试

为了能让我们编写的系统更加健壮，必要的测试（UI 测试、单元测试...）是必须的。

###  测试框架

- **[JUnitopen in new window](http://junit.org/)** : Java 测试框架。
- **[Mockitoopen in new window](https://github.com/mockito/mockito)** ：Mockito 是一个模拟测试框架，可以让你用优雅，简洁的接口写出漂亮的单元测试。（对那些不容易构建的对象用一个虚拟对象来代替，使其在调试期间用来作为真实对象的替代品）
- **[PowerMockopen in new window](https://github.com/powermock/powermock)** ： 编写单元测试仅靠 Mockito 是不够。因为 Mockito 无法 mock 私有方法、final 方法及静态方法等。PowerMock 这个 framework，主要是为了扩展其他 mock 框架，如 Mockito、EasyMock。它使用一个自定义的类加载器，纂改字节码，突破 Mockito 无法 mock 静态方法、构造方法、final 类、final 方法以及私有方法的限制。
- **[WireMockopen in new window](https://github.com/tomakehurst/wiremock)** ：模拟 HTTP 服务的工具（Mock your APIs）。
- **[Testcontainersopen in new window](https://github.com/testcontainers/testcontainers-java)** ：一个支持 JUnit 的测试工具库，提供轻量级的且一次性的常见数据库测试支持、Selenium Web 浏览器或者其他任何可以在 Docker 容器中运行的实例支持。

相关阅读：

- [The Practical Test Pyramid- Martin Fowleropen in new window](https://martinfowler.com/articles/practical-test-pyramid.html) (很赞的一篇文章，不过是英文的)
- [浅谈测试之 PowerMockopen in new window](https://juejin.im/post/6844903982058618894)

### 测试平台

- **[MeterSphereopen in new window](https://github.com/metersphere/metersphere)** : 一站式开源持续测试平台，涵盖测试跟踪、接口测试、性能测试、团队协作等功能，全面兼容 JMeter、Postman、Swagger 等开源、主流标准。
- **[Apifoxopen in new window](https://www.apifox.cn/)** ：API 文档、API 调试、API Mock、API 自动化测试。

### API 调试

- **[Insomniaopen in new window](https://insomnia.rest/)** :像人类而不是机器人一样调试 API。我平时经常用的，界面美观且轻量，总之很喜欢。
- **[Postmanopen in new window](https://www.getpostman.com/)** ：API 请求生成器。
- **[Postwomanopen in new window](https://github.com/liyasthomas/postwoman)** ：API 请求生成器-一个免费、快速、漂亮的 Postma 替代品。

## 任务调度

- **[Quartzopen in new window](https://github.com/quartz-scheduler/quartz)** ：一个很火的开源任务调度框架，Java 定时任务领域的老大哥或者说参考标准， 很多其他任务调度框架都是基于 `quartz` 开发的，比如当当网的`elastic-job`就是基于`quartz`二次开发之后的分布式调度解决方案
- **[XXL-JOBopen in new window](https://github.com/xuxueli/xxl-job)** :XXL-JOB 是一个分布式任务调度平台，其核心设计目标是开发迅速、学习简单、轻量级、易扩展。现已开放源代码并接入多家公司线上产品线，开箱即用。
- **[Elastic-Jobopen in new window](http://elasticjob.io/index_zh.html)** ：Elastic-Job 是当当网开源的一个基于 Quartz 和 Zookeeper 的分布式调度解决方案，由两个相互独立的子项目 Elastic-Job-Lite 和 Elastic-Job-Cloud 组成，一般我们只要使用 Elastic-Job-Lite 就好。
- **[EasyScheduleropen in new window](https://github.com/analysys/EasyScheduler)** （已经更名为 DolphinScheduler，已经成为 Apache 孵化器项目）： Easy Scheduler 是一个分布式工作流任务调度系统，主要解决“复杂任务依赖但无法直接监控任务健康状态”的问题。Easy Scheduler 以 DAG 方式组装任务，可以实时监控任务的运行状态。同时，它支持重试，重新运行等操作... 。
- **[PowerJobopen in new window](https://gitee.com/KFCFans/PowerJob)** ：新一代分布式任务调度与计算框架，支持 CRON、API、固定频率、固定延迟等调度策略，提供工作流来编排任务解决依赖关系，使用简单，功能强大，文档齐全，欢迎各位接入使用！http://www.powerjob.tech/ 。
- **[DolphinScheduleropen in new window](https://github.com/apache/dolphinscheduler)** ：分布式易扩展的可视化工作流任务调度平台。

相关阅读：

- [Spring Job、Quartz、XXL-Job 对比+全解析open in new window](https://mp.weixin.qq.com/s/jqN4noo5NazckPCehWFgpA)
- [推荐 5 个 YYDS 的 Java 项目open in new window](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247518215&idx=1&sn=91e467f39322d2e7979b85fe235822d2&chksm=cea1c7ccf9d64edaf966c95923d72d337bf5e655a773a3d295d65fc92e4535ae5d8b0e6d9d86&token=2063686030&lang=zh_CN#rd)

##  分布式

###  API 网关

微服务下一个系统被拆分为多个服务，但是像 安全认证，流量控制，日志，监控等功能是每个服务都需要的，没有网关的话，我们就需要在每个服务中单独实现，这使得我们做了很多重复的事情并且没有一个全局的视图来统一管理这些功能。

综上：**一般情况下，网关一般都会提供请求转发、安全认证（身份/权限认证）、流量控制、负载均衡、容灾、日志、监控这些功能。**

上面介绍了这么多功能实际上网关主要做了一件事情：**请求过滤** 。权限校验、流量控制这些都可以通过过滤器实现，请求转也是通过过滤器实现的。

1. **[Kongopen in new window](https://github.com/Kong/kong)** ：Kong 是一个云原生、快速的、可伸缩的分布式微服务抽象层(也称为 API 网关、API 中间件或在某些情况下称为服务网格)。2015 年作为开源项目发布，其核心价值是高性能和可扩展性。
2. **[Soulopen in new window](https://github.com/Dromara/soul)** ：高性能、基于 webflux 的反应式 Java API 网关
3. **[Spring Cloud Gatewayopen in new window](https://github.com/spring-cloud/spring-cloud-gateway)** : 基于 Spring Framework 5.x 和 Spring Boot 2.x 构建的高性能网关。
4. **[Zuulopen in new window](https://github.com/Netflix/zuul)** : Zuul 是一个 L7 应用程序网关，它提供了动态路由，监视，弹性，安全性等功能。

### 配置中心

- **[Apolloopen in new window](https://github.com/ctripcorp/apollo)**（推荐） ：Apollo（阿波罗）是携程框架部门研发的分布式配置中心，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。
- **[Nacosopen in new window](https://github.com/alibaba/nacos)**（推荐）：Nacos 是 Spring Cloud Alibaba 提供的服务注册发现组件，类似于 Consul、Eureka。并且，提供了分布式配置管理功能。
- **[Spring Cloud Configopen in new window](https://github.com/spring-cloud/spring-cloud-config)** ： Spring Cloud Config 是 Spring Cloud 家族中最早的配置中心，虽然后来又发布了 Consul 可以代替配置中心功能，但是 Config 依然适用于 Spring Cloud 项目，通过简单的配置即可实现功能。
- **[Consulopen in new window](https://github.com/hashicorp/consul)** ：Consul 是 HashiCorp 公司推出的开源软件，提供了微服务系统中的服务治理、配置中心、控制总线等功能。这些功能中的每一个都可以根据需要单独使用，也可以一起使用以构建全方位的服务网格，总之 Consul 提供了一种完整的服务网格解决方案。

###  链路追踪

目前分布式链路追踪系统基本都是根据谷歌的《Dapper 大规模分布式系统的跟踪系统》这篇论文发展而来，主流的有 Pinpoint，Skywalking ，CAT（当然也有其他的例如 Zipkin，Jaeger 等产品，不过总体来说不如前面选取的 3 个完成度高）等。

1. **[Skywalkingopen in new window](https://github.com/apache/skywalking)** : 针对分布式系统的应用性能监控，尤其是针对微服务、云原生和面向容器的分布式系统架构。
2. **[Zipkinopen in new window](https://github.com/openzipkin/zipkin)** ：Zipkin 是一个分布式跟踪系统。它有助于收集解决服务体系结构中的延迟问题所需的时序数据。功能包括该数据的收集和查找。
3. **[CATopen in new window](https://github.com/dianping/cat)** ： CAT 作为服务端项目基础组件，提供了 Java, C/C++, Node.js, Python, Go 等多语言客户端，已经在美团点评的基础架构中间件框架（MVC 框架，RPC 框架，数据库框架，缓存框架等，消息队列，配置系统等）深度集成，为美团点评各业务线提供系统丰富的性能指标、健康状况、实时告警等。

相关阅读： [Skywalking 官网对于主流开源链路追踪系统的对比open in new window](https://skywalking.apache.org/zh/blog/2019-03-29-introduction-of-skywalking-and-simple-practice.html)

## 高性能

###  消息队列

**分布式队列** ：

1. **[RocketMQopen in new window](https://github.com/apache/rocketmq)** ：阿里巴巴开源的一款高性能、高吞吐量的分布式消息中间件。
2. **[Kafakaopen in new window](https://github.com/apache/kafka)**: Kafka 是一种分布式的，基于发布 / 订阅的消息系统。关于它的入门可以查看：[Kafka 入门看这一篇就够了open in new window](https://github.com/Snailclimb/JavaGuide/blob/master/docs/system-design/data-communication/Kafka入门看这一篇就够了.md)
3. **[RabbitMQopen in new window](https://github.com/rabbitmq)** :由 erlang 开发的基于 AMQP（Advanced Message Queue 高级消息队列协议）协议实现的消息队列。

**内存队列** ：

**[Disruptoropen in new window](https://github.com/LMAX-Exchange/disruptor)** ： Disruptor 是英国外汇交易公司 LMAX 开发的一个高性能队列，研发的初衷是解决内存队列的延迟问题（在性能测试中发现竟然与 I/O 操作处于同样的数量级）。相关阅读 ：[《高性能内存队列——Disruptor》open in new window](https://tech.meituan.com/2016/11/18/disruptor.html) 。

**管理工具** ：

1. **[Kafdropopen in new window](https://github.com/obsidiandynamics/kafdrop)** : 一个用于查看 Kafka 主题和浏览消费者组的 Web UI。
2. **[EFAKopen in new window](https://github.com/smartloli/EFAK)** （Eagle For Apache Kafka，以前叫做 Kafka Eagle） ：一个简单的高性能监控系统，用于对 Kafka 集群进行全面的监控和管理。

### 数据库中间件

- **[ShardingSphereopen in new window](https://github.com/apache/shardingsphere)** ：ShardingSphere 是一套开源的分布式数据库中间件解决方案组成的生态圈，它由 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar（计划中）这 3 款相互独立的产品组成。 他们均提供标准化的数据分片、分布式事务和数据库治理功能，可适用于如 Java 同构、异构语言、云原生等各种多样化的应用场景。中文文档：[https://shardingsphere.apache.org/document/current/cn/overview/open in new window](https://shardingsphere.apache.org/document/current/cn/overview/) 。
- **[MyCatopen in new window](https://github.com/MyCatApache/MyCat2)** : MyCat 是数据库分库分表的中间件，MyCat 使用最多的两个功能是：读写分离和分库分表。MyCat 是一些社区爱好者在阿里 Cobar 的基础上进行二次开发，解决了 Cobar 当时存 在的一些问题，并且加入了许多新的功能在其中。
- **[dynamic-datasource-spring-boot-starteropen in new window](https://github.com/baomidou/dynamic-datasource-spring-boot-starter)** ：dynamic-datasource-spring-boot-starter 是一个基于 springboot 的快速集成多数据源的启动器。如果说你有配置多数据源、读写分离等需求的话，可以了解一下这个项目。

相关阅读：[数据库中间件详解（精品长文）open in new window](https://zhuanlan.zhihu.com/p/87144535)

### 线程池

- **[Hippo-4Jopen in new window](https://github.com/opengoofy/hippo4j)** ：一款强大的动态线程池框架，解决了传统线程池使用存在的一些痛点比如线程池参数没办法动态修改、不支持运行时变量的传递、无法执行优雅关闭。除了支持动态修改线程池参数、线程池任务传递上下文，还支持通知报警、运行监控等开箱即用的功能。
- **[Dynamic Tpopen in new window](https://github.com/dromara/dynamic-tp)** ：一款基于 SpringBoot 的轻量级动态线程池，参考[美团线程池实践open in new window](https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html)，内置监控告警功能，提供多种报警维度。

###  缓存

- **[Caffeineopen in new window](https://github.com/ben-manes/caffeine)** : 一款强大的本地缓存解决方案，性能非常 🐂。
- **[Redisopen in new window](https://github.com/redis/redis)** ：一个使用 C 语言开发的内存数据库，分布式缓存首选。

## 高可用

###  限流

**分布式限流** ：

- **[ Sentinelopen in new window](https://github.com/alibaba/Sentinel)**（推荐）：面向分布式服务架构的高可用防护组件，主要以流量为切入点，从流量控制、熔断降级、系统自适应保护等多个维度来帮助用户保障微服务的稳定性。
- **[Hystrixopen in new window](https://github.com/Netflix/Hystrix)** ：类似于 Sentinel 。

相关阅读：[Sentinel 与 Hystrix 的对比open in new window](https://sentinelguard.io/zh-cn/blog/sentinel-vs-hystrix.html)

**单机限流** ：

- **[Bucket4jopen in new window](https://github.com/vladimir-bukhtoyarov/bucket4j)** ：一个非常不错的基于令牌/漏桶算法的限流库。
- **[Resilience4jopen in new window](https://github.com/resilience4j/resilience4j)** ：一个轻量级的容错组件，其灵感来自于 Hystrix。

###  监控

- **[Spring Boot Adminopen in new window](https://github.com/codecentric/spring-boot-admin)** ：管理和监控 Spring Boot 应用程序。
- **[Metricsopen in new window](https://github.com/dropwizard/metrics)** ：捕获**JVM**和应用程序级别的指标。所以你知道发生了什么事。

### 日志

- **EKL 老三件套** : 最原始的时候，ELK 是由 3 个开源项目的首字母构成，分别是 **E**lasticsearch 、**L**ogstash、**K**ibana。
- **新一代 ELK 架构** : Elasticsearch+Logstash+Kibana+Beats。
- **EFK** : EFK 中的 F 代表的是 [Fluentdopen in new window](https://github.com/fluent/fluentd)。
- **[TLogopen in new window](https://gitee.com/dromara/TLog)** ：一个轻量级的分布式日志标记追踪神器，10 分钟即可接入，自动对日志打标签完成微服务的链路追踪。

------

## 参考

> https://javaguide.cn/open-source-project/system-design.html
