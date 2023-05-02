import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="bg-green-100 pt-4 mt-10 mb-20">
      <div className="blog__section">
        <div className="text-lime-900">
          <h1 class="text-4xl font-bold text-center pt-10 pb-2 lg:pb-6">
            Frequently Asked Question
          </h1>
        </div>
        <div className="px-4 lg:mx-12 my-10 pb-6">
          <h2 class="text-2xl font-bold mb-">
            Q:1. What's the differences between uncontrolled and controlled components?
          </h2>
          <p class="font-semibold mb-8 mt-2">
          In the context of a system or a process, uncontrolled components refer to those factors that are not manipulated or regulated in any way, and that can therefore fluctuate or vary in an unpredictable manner. On the other hand, controlled components are those that are actively managed or manipulated to produce consistent and predictable outcomes. <br />
          In general, the distinction between controlled and uncontrolled components is important because it can impact the reliability and validity of results in scientific experiments or the effectiveness of processes in various domains. By carefully managing and controlling as many factors as possible, researchers and practitioners can increase the accuracy and precision of their results, and improve the likelihood of achieving desired outcomes.
          </p>
          <br />
          <h2 class="text-2xl font-bold mb-">
            Q:2. How to validate React props using PropTypes?
          </h2>
          <p class="font-semibold mb-8 mt-2">
          React PropTypes is a built-in feature in React that enables you to validate the props that are passed to a component. It's a useful way to catch bugs and ensure that your component is used correctly. Here's a simpler way to explain how to validate React props using PropTypes:<br />
          1. Import PropTypes at the top of your file: <br />
          2. Define your component and use the propTypes object to specify the type and shape of the props you expect to receive. <br />
          3. If the props passed to your component don't match the specified types, you'll see a warning in the console. This helps catch errors early and ensures that your components are used correctly.
          </p>
          <br />
          <h2 class="text-2xl font-bold mb-">
            Q:3. What's the difference between nodejs and express js?
          </h2>
          <p class="font-semibold mb-8 mt-2">
          Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It's built on the V8 JavaScript engine, which is the same engine that powers Google Chrome. Node.js provides a range of APIs for handling server-side tasks like file system access, network communication, and more. <br />
          Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs, including middleware for handling requests and responses, routing, template engines, and more. <br />
          In simple terms, Node.js is a platform for running JavaScript on the server, while Express.js is a framework that sits on top of Node.js and provides a set of tools and features for building web applications.
          </p>
          <br />
          <h2 class="text-2xl font-bold mb-">
            Q:4. What is a custom hook, and why will you create a custom hook?
          </h2>
          <p class="font-semibold mb-4 mt-2">
          A custom hook is a JavaScript function that you can create to encapsulate and reuse stateful logic in your React components. Custom hooks allow you to extract common logic into a separate function that can be used across different components, making your code more modular and easier to maintain. <br />
          You might create a custom hook to encapsulate complex or repetitive logic, such as handling form state, managing timers or intervals, or fetching data from an API. By creating a custom hook, you can keep your component code focused on rendering and presentation logic, while moving complex stateful logic into a separate function. <br />
          Custom hooks also allow you to make your code more reusable, since you can share the hook across different components that have similar requirements. This can help you reduce code duplication and keep your codebase more organized and maintainable over time.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Blog;
