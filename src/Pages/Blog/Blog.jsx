import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="min-h-screen lg:m-12 m-8 space-y-6">
      <Helmet>
        <title>Use ME | Blog</title>
      </Helmet>
      <p className="text-center my-16 font-bold md:text-3xl text-2xl text-pink-700 lg:text-5xl">
        Here is some frequently asked questions <br /> that has been prepared
        for you.
      </p>
      <p className="lg:text-3xl text-xl font-semibold">
        Read these questions carefully as it is important for your career.
      </p>
      <div className="lg:m-12 m-4">
        <ol className="space-y-6">
          <li>
            <p className="lg:text-3xl md:text-2xl text-xl mb-3 font-semibold">
              1. What are the different ways to manage a state in a React
              application?
            </p>
            <p className="lg:text-lg text-sm">
              <span className="font-semibold">Answer: </span> <br /> Stateful
              Components (Class Components): Class components in React have a
              built-in state object, which allows them to manage internal
              component-specific data. State can be initialized in the
              constructor and updated using the setState() method. This approach
              is suitable for managing state within individual components.
              <br />
              Functional Components with Hooks: With the introduction of React
              Hooks, functional components can now manage local state using the
              useState hook. This allows functional components to have stateful
              behavior without using class components. Hooks provide a simpler
              and more concise way to manage state, making functional components
              more powerful and easier to understand. <br />
              Context API: The Context API in React provides a way to share data
              between components without having to explicitly pass props down
              through the component tree. It allows you to create a global state
              that can be accessed by any component within the context provider.
              This is particularly useful for managing application-wide state or
              sharing data that is needed by multiple components at different
              levels of the component tree.
            </p>
          </li>
          <li>
            <p className="lg:text-3xl md:text-2xl text-xl mb-3 font-semibold">
              2. How does prototypical inheritance work?
            </p>
            <p className="lg:text-lg text-sm">
              <span className="font-semibold">Answer: </span> <br />
              Prototypical inheritance is a fundamental concept in JavaScript,
              where objects can inherit properties and behaviors from other
              objects. In JavaScript, each object has an internal link to
              another object called its prototype. When you access a property or
              method on an object, JavaScript first checks if the object itself
              has that property or method. If not, it looks up the prototype
              chain, which is a series of linked objects, until it finds the
              property or method. When you create an object in JavaScript, you
              can specify another object as its prototype. If a property or
              method is not found on the object itself, JavaScript will look for
              it on its prototype, and then on the prototype's prototype, and so
              on, until it reaches the end of the prototype chain.
            </p>
          </li>
          <li>
            <p className="lg:text-3xl md:text-2xl text-xl mb-3 font-semibold">
              3. What is a unit test? Why should we write unit tests?
            </p>
            <p className="lg:text-lg text-sm">
              <span className="font-semibold">Answer: </span> <br />
              A unit test is a type of software testing where individual units
              or components of a software application are tested in isolation to
              ensure they behave as expected. These units can be functions,
              methods, or classes. Unit tests are typically automated and focus
              on small, specific parts of the codebase. We should write unit
              tests for several reasons: <br />
              <span className="font-semibold">
                1. Verification of Individual Units:
              </span>{" "}
              Unit tests allow developers to verify that each unit of code
              behaves correctly in isolation, ensuring that it produces the
              expected output for a given input.
              <br />
              <span className="font-semibold">
                2. Early Detection of Bugs:
              </span>{" "}
              By identifying and fixing issues at the unit level, developers can
              catch bugs early in the development process, preventing them from
              propagating to other parts of the application.
              <br />
              <span className="font-semibold">
                3. Facilitate Refactoring:
              </span>{" "}
              Unit tests provide a safety net when refactoring code. They ensure
              that changes to one part of the codebase do not unintentionally
              break functionality elsewhere.
              <br />
              <span className="font-semibold">
                4.btn-disabled Documentation and Code Understanding:
              </span>{" "}
              Unit tests serve as living documentation for the codebase, helping
              developers understand how individual components are intended to
              work and how they interact
              <span className="font-semibold">
                with each other. Improved Code Quality:
              </span>{" "}
              Writing unit tests encourages writing modular, testable code with
              clear separation of concerns, leading to higher code quality and
              maintainability.
              <br />
              <span className="font-semibold">5. Regression Testing:</span> Unit
              tests act as a form of regression testing, ensuring that existing
              functionality continues to work as expected even as the codebase
              evolves over time.
            </p>
          </li>
          <li>
            <p className="lg:text-3xl md:text-2xl text-xl mb-3 font-semibold">
              4.React vs. Angular vs. Vue?
            </p>
            <p className="lg:text-lg text-sm">
              <span className="font-semibold">Answer: </span> <br />
              <span className="font-semibold">1. React:</span> <br /> React,
              developed by Facebook, employs a component-based architecture
              where UIs are constructed by composing reusable components. It
              prioritizes efficiency through the use of a virtual DOM for quick
              updates. With a thriving ecosystem including tools like React
              Router and Redux, React is favored for its simplicity and
              adaptability, catering to projects of varying scales.
              <span className="font-semibold">
                <br />
                b. Angular:
              </span>{" "}
              Angular, backed by Google, is a comprehensive framework tailored
              for enterprise-level applications. Following the
              Model-View-Controller (MVC) pattern, it offers features like
              two-way data binding and dependency injection, coupled with a
              robust CLI for streamlined project management. Angular's
              opinionated nature suits projects requiring strict adherence to
              guidelines, particularly in corporate settings.
              <span className="font-semibold">
                <br />
                3. Vue.js:
              </span>{" "}
              Vue.js, a progressive framework, amalgamates the best attributes
              of React and Angular. Known for its simplicity and incremental
              adoption, Vue.js provides features like single-file components and
              reactive data binding. Its gentle learning curve and extensive
              ecosystem make it an attractive choice for developers of all
              proficiencies, particularly for its ease of integration with
              existing projects. In essence, React thrives on simplicity and
              adaptability, Angular excels in robustness for large-scale
              applications, while Vue.js strikes a balance between the two,
              offering simplicity and ease of adoption. The selection among them
              hinges on project requisites, team competencies, and individual
              inclinations.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Blog;
