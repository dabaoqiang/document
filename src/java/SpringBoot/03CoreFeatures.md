# 核心功能-SpringApplication

`SpringApplication`类提供了一种方便的方式来引导从`main()`方法中启动的Spring应用程序。在许多情况下，你可以委托给静态的`SpringApplication.run`方法，如下面的例子中所示。

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

当您的应用程序启动时，您应该会看到类似于以下输出的内容:

~~~bash
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.0.1)

2022-12-22T21:07:39.551Z  INFO 21032 --- [           main] o.s.b.d.f.s.MyApplication                : Starting MyApplication using Java 17.0.5 with PID 21032 (/opt/apps/myapp.jar started by myuser in /opt/apps/)
2022-12-22T21:07:39.558Z  INFO 21032 --- [           main] o.s.b.d.f.s.MyApplication                : No active profile set, falling back to 1 default profile: "default"
2022-12-22T21:07:41.286Z  INFO 21032 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2022-12-22T21:07:41.316Z  INFO 21032 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2022-12-22T21:07:41.317Z  INFO 21032 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.4]
2022-12-22T21:07:41.496Z  INFO 21032 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2022-12-22T21:07:41.498Z  INFO 21032 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1878 ms
2022-12-22T21:07:42.281Z  INFO 21032 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2022-12-22T21:07:42.292Z  INFO 21032 --- [           main] o.s.b.d.f.s.MyApplication                : Started MyApplication in 3.479 seconds (process running for 4.472)
~~~

默认情况下，会显示`INFO`日志信息，包括一些相关的启动细节，比如启动应用程序的用户。如果你需要一个`INFO`以外的日志级别，你可以设置它，如日志级别中所述。应用程序的版本是通过主应用程序类的包的实现版本来确定的。可以通过设置`spring.main.log-startup-info`为`false`来关闭启动信息记录。这也将关闭应用程序的活动配置文件的日志记录。

:::tip Tip

为了在启动过程中增加额外的日志记录，你可以在`SpringApplication`的子类中覆盖`logStartupInfo(boolean)`。

:::

## 1.1. 启动失败

如果你的应用程序无法启动，注册的`FailureAnalyzers`就有机会提供一个专门的错误信息和一个具体的行动来解决问题。例如，如果你在`8080`端口上启动一个网络应用，而该端口已经被使用，你应该看到类似于下面的信息。

~~~shell
***************************
APPLICATION FAILED TO START
***************************

Description:

Embedded servlet container failed to start. Port 8080 was already in use.

Action:

Identify and stop the process that is listening on port 8080 or configure this application to listen on another port.
~~~

:::tip Note

Spring Boot提供了许多`FailureAnalyzer`实现，你也可以添加自己的。

:::

如果没有故障分析器能够处理异常，你仍然可以显示完整的条件报告以更好地了解出错的原因。要做到这一点，你需要为`org.springframework.boot.autoconfigure.logging.ConditionEvaluationReportLoggingListener`启用调试属性或启用DEBUG日志。

例如，如果你通过使用`java -jar`来运行你的应用程序，你可以按以下方式启用调试属性。

~~~shell
$ java -jar myproject-0.0.1-SNAPSHOT.jar --debug
~~~

## 1.2. 懒加载

`SpringApplication`允许应用程序被懒惰地初始化。当懒惰初始化被启用时，Bean会在需要时被创建，而不是在应用程序启动时。因此，启用懒惰初始化可以减少应用程序的启动时间。在一个Web应用程序中，启用懒惰初始化将导致许多与Web相关的Bean在收到HTTP请求之前不会被初始化。

懒惰初始化的一个缺点是，它可以延迟发现应用程序的问题。如果一个配置错误的Bean被懒惰地初始化了，那么在启动过程中就不会再出现故障，问题只有在Bean被初始化时才会显现出来。还必须注意确保JVM有足够的内存来容纳应用程序的所有Bean，而不仅仅是那些在启动期间被初始化的Bean。由于这些原因，默认情况下不启用懒惰初始化，建议在启用懒惰初始化之前，对JVM的堆大小进行微调。

可以通过在` SpringApplicationBuilder `上使用 `lazyInitialization` 方法或在` SpringApplication `上使用 `setLazyInitialization` 方法以编程方式启用惰性初始模式。或者，也可以使用 ` spring.main.lazy-initialization`属性启用它，如下面的示例所示:

~~~yaml
spring:
  main:
    lazy-initialization: true
~~~

::: tabs

@tab **Properties**

~~~properties
spring.main.lazy-initialization=true
~~~

@tab **Yaml**

~~~~yaml
spring:
  main:
    lazy-initialization: true
~~~~

:::

:::tip Tip

如果你想禁用某些Bean的懒惰初始化，而对应用程序的其他部分使用懒惰初始化，你可以使用`@Lazy(false)`注解将它们的懒惰属性明确地设置为false。

:::

## 1.3. 自定义 Banner

启动时打印的标语可以通过在classpath中添加`banner.txt`文件或将`spring.banner.location`属性设置为此类文件的位置来改变。如果该文件的编码不是UTF-8，你可以设置`spring.banner.charset`。

在 banner.txt 文件中，您可以使用 Environment 中的任何键以及以下任何占位符:

*Table 4. Banner variables*

| Variable                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `${application.version}`                                     | The version number of your application, as declared in `MANIFEST.MF`. For example, `Implementation-Version: 1.0` is printed as `1.0`. |
| `${application.formatted-version}`                           | The version number of your application, as declared in `MANIFEST.MF` and formatted for display (surrounded with brackets and prefixed with `v`). For example `(v1.0)`. |
| `${spring-boot.version}`                                     | The Spring Boot version that you are using. For example `3.0.1`. |
| `${spring-boot.formatted-version}`                           | The Spring Boot version that you are using, formatted for display (surrounded with brackets and prefixed with `v`). For example `(v3.0.1)`. |
| `${Ansi.NAME}` (or `${AnsiColor.NAME}`, `${AnsiBackground.NAME}`, `${AnsiStyle.NAME}`) | Where `NAME` is the name of an ANSI escape code. See [`AnsiPropertySource`](https://github.com/spring-projects/spring-boot/tree/v3.0.1/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/ansi/AnsiPropertySource.java) for details. |
| `${application.title}`                                       | The title of your application, as declared in `MANIFEST.MF`. For example `Implementation-Title: MyApp` is printed as `MyApp`. |

:::tip Tip

如果你想以编程方式生成一个横幅，可以使用`SpringApplication.setBanner(..)`方法。使用`org.springframework.boot.Banner`接口并实现你自己的`printBanner()`方法。

:::

您还可以使用 `spring.main.banner-mode` 属性来确定是否必须在 `System.out (console)`上打印、发送到配置的日志记录器(log) ，或者根本不生成(关闭)。

打印的横幅注册为一个单例 bean，名称如下: `springBootBanner`。

:::tip Note

只有在使用 Spring Boot 启动程序时，`${ application.version }`和 `${ application.format-version }`属性才可用。如果您正在运行一个解压的 jar 并以` java -cp <classspath> <mainclass> `启动它，那么这些值将不会被解析。

这就是为什么我们建议您总是使用` java org.springframework.boot.loader.JarLauncher `启动解压的 jar。.这将初始化`application.*` 在构建类路径和启动应用程序之前的banner变量。

:::

## 1.4

## 1.5

## 1.6

## 1.7

## 1.8

## 1.9

## 1.10

## 1.11

## 1.12

## 1.13





























