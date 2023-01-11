import{_ as e,W as o,X as a,a0 as n}from"./framework-81e6c38b.js";const i={},t=n('<h1 id="ioc-container-01u" tabindex="-1"><a class="header-anchor" href="#ioc-container-01u" aria-hidden="true">#</a> IoC Container-01u</h1><blockquote><p>Version 5.3.24</p></blockquote><p>参考文档的这一部分涵盖了 Spring 框架中绝对不可或缺的所有技术。</p><p>其中最重要的是 Spring 框架的控制反转(IoC)容器。在对 Spring 框架的 IoC 容器进行彻底处理之后，紧接着是对 Spring 面向切面的程序设计(AOP)技术的全面介绍。Spring 框架有自己的 AOP 框架，它在概念上很容易理解，并且成功地解决了 Java 企业编程中80% 的 AOP 需求。</p><p>还提供了 Spring 与 AspectJ 的集成(目前在特性方面是最丰富的，当然也是 Java 企业空间中最成熟的 AOP 实现)。</p><h2 id="the-ioc-container" tabindex="-1"><a class="header-anchor" href="#the-ioc-container" aria-hidden="true">#</a> The IoC Container</h2><p>本章介绍了 Spring 的控制反转(IoC)容器。</p><h3 id="_1-1-spring-ioc-容器和-bean-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-spring-ioc-容器和-bean-简介" aria-hidden="true">#</a> 1.1. Spring IoC 容器和 Bean 简介</h3><p>本章介绍了 Spring 框架中控制反转(IoC)原则的实现。IoC 也被称为依赖注入(DI)。这是一个过程，对象仅通过构造函数参数、工厂方法的参数或从工厂方法构造或返回后在对象实例上设置的属性来定义它们的依赖项(也就是它们使用的其他对象)。容器然后在创建 bean 时注入这些依赖项。这个过程从根本上来说是反向的(因此才有了这个名字，控制反转) ，bean 自己通过直接构造类或服务定位器(Service Locator)模式这样的机制来控制它的依赖关系的实例化或位置。</p><p><code>org.springframework.beans</code> 和 <code>org.springframework.context</code> 包是 Spring Framework 的 IoC 容器的基础。<code>BeanFactory</code> 接口提供了一种能够管理任何类型对象的高级配置机制。<code>ApplicationContext</code> 是 <code>BeanFactory </code>的一个子接口。它补充称:</p><ul><li><p>更容易与 Spring 的 AOP 特性集成</p></li><li><p>消息资源处理(用于国际化)</p></li><li><p>事件发布</p></li><li><p>应用层特定上下文，比如 Web 应用程序中使用的<code>WebApplicationContext</code>。</p></li></ul><p>简而言之，<code>BeanFactory</code> 提供了配置框架和基本功能，<code>ApplicationContext </code>添加了更多企业特定的功能。<code>ApplicationContext</code> 是 <code>BeanFactory </code>的一个完整超集，在本章中只用于描述 Spring 的 IoC 容器。有关使用 <code>BeanFactory</code> 而不是 <code>ApplicationContext</code> 的更多信息，请参见介绍 <code>BeanFactory API </code>的部分。</p><p>在 Spring 中，构成应用程序主干并由 Spring IoC 容器管理的对象称为 bean。Bean 是一个由 Spring IoC 容器实例化、组装和管理的对象。否则，bean 只是应用程序中的许多对象之一。Bean 以及它们之间的依赖关系反映在容器使用的配置元数据中。</p><h3 id="_1-2-容器概述" tabindex="-1"><a class="header-anchor" href="#_1-2-容器概述" aria-hidden="true">#</a> 1.2. 容器概述</h3><p><code>org.springframework.context.ApplicationContext</code> 接口代表 Spring IoC 容器，负责实例化、配置和组装 bean。容器通过读取配置元数据获取关于要实例化、配置和组装哪些对象的指令。配置元数据用 XML、 Java 注释或 Java 代码表示。它允许您表示组成应用程序的对象以及这些对象之间的丰富的相互依赖关系。</p><p>Spring 提供了<code>ApplicationContext</code>接口的几个实现。在独立应用程序中，通常创建 <code>ClassPathXmlApplicationContext </code>或 <code>FileSystemXmlApplicationContext </code>的实例。XML 一直是定义配置元数据的传统格式，您可以指示容器使用 Java 注释或代码作为元数据格式，方法是提供少量 XML 配置，以声明方式启用对这些额外元数据格式的支持。</p><p>在大多数应用程序方案中,实例化 Spring IoC 容器的一个或多个实例不需要显式的用户代码,例如，在 Web 应用程序场景中，应用程序的 Web.XML 文件中的简单的8行(大约)样板 Web 描述符 XML 通常就足够了(请参见 Web 应用程序的便捷应用上下文实例化)。</p><h3 id="_1-3-bean-overview-todo" tabindex="-1"><a class="header-anchor" href="#_1-3-bean-overview-todo" aria-hidden="true">#</a> 1.3. Bean Overview TODO</h3><h3 id="_1-4-dependencies-todo" tabindex="-1"><a class="header-anchor" href="#_1-4-dependencies-todo" aria-hidden="true">#</a> 1.4. Dependencies TODO</h3><h3 id="_1-5-bean-scopes-todo" tabindex="-1"><a class="header-anchor" href="#_1-5-bean-scopes-todo" aria-hidden="true">#</a> 1.5. Bean Scopes TODO</h3><h3 id="_1-6-customizing-the-nature-of-a-bean-todo" tabindex="-1"><a class="header-anchor" href="#_1-6-customizing-the-nature-of-a-bean-todo" aria-hidden="true">#</a> 1.6. Customizing the Nature of a Bean TODO</h3><h3 id="_1-7-bean-definition-inheritance-todo" tabindex="-1"><a class="header-anchor" href="#_1-7-bean-definition-inheritance-todo" aria-hidden="true">#</a> 1.7. Bean Definition Inheritance TODO</h3><h3 id="_1-8-container-extension-points-todo" tabindex="-1"><a class="header-anchor" href="#_1-8-container-extension-points-todo" aria-hidden="true">#</a> 1.8. Container Extension Points TODO</h3><blockquote><p>未coding完</p></blockquote>',24),r=[t];function c(d,p){return o(),a("div",null,r)}const s=e(i,[["render",c],["__file","2-CoreTechnologies.html.vue"]]);export{s as default};
