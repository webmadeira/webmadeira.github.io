# Button Component

Button component is the one that you should use for every button content you might want to present in the website.

This component cover all the button types defined by the design team and if at any time you find the need to use a new one that doesn't exist in these components, please add it to this section and document it.

The existing component is:

* Button

## Usage

~~~js
import CustomButton from [path-root-components]/Button/Button

const MyButton = () => (
  <CustomButton message="My message" callback={() => {/*Function that you want to execute when the button is clicked*/}}/>
)

export default MyButton
~~~