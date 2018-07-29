# Typography components

Typography components are the ones that you should use for every text content you might want to present in the website.

These components cover all the types defined by the design team and if at any time you find the need to use a new one that doesn't exist in these components, please add it to this section and document it.

The existing types are:

* H1
* H2
* H3
* Subtitle1
* Body1
* Body2
* Body3
* Body4
* BUTTON
* Caption

## Usage

~~~js
import { H1, H2, ... } from [path-root-components]/typography

const MyComponent = () => (
  <H1>Here's my H1 content</H1>
)

export default MyComponent
~~~