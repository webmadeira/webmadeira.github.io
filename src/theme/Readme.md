# Theme

In this section you can find all the resources related to webmadeira's theme provider.  
All this resources are available across all the `src` code through the property `theme`.  
Read more about [Theming with `styled-components`](https://www.styled-components.com/docs/advanced).

## Color palettes

Color palettes provide you all the colors you need to build your UIs.

At `theme/color-palettes` you can find all the existing palettes and variations and you can preview them at "Theme/Color palettes" section at storybook.

### Usage

These palettes are available on your stylings as follows:

~~~js
import styled from 'styled-components'

const StyledComponent = styled.div`
  background-color: ${props => props.theme.color('[palette]', '[variant]')}
`

const MyComponent = () => (
  <StyledComponent />
)

export default MyComponent
~~~

Where **[palette]** and **[variant]** are then name of the palette and which variant within the palette you want to use.

**Note**: Theme **[palette]** and **[variant]** parameters defaults to `'primary'` and `'base'`.

## Typography

For typography we have `textSetting`, `weight` and `fontFamily` resources.

### Text setting

**`textSetting`** is a function that can be used as `theme.textSetting([size])`, where `[size]` can assume the following values:

* `'xs'`
* `'sm'`
* `'nr'`
* `'md'`
* `'lg'`
* `'xl'`

And as result you get an object with the following shape:  
~~~js
{
  fontSize: '[X]rem', // 18px
  lineHeight: '[X]rem',
}
~~~

### Font weight

**`weight`** is a function that can be used as `theme.weight([weight])`, where `[weight]` can assume the following values:

* `'light'`
* `'regular'`
* `'medium'`
* `'bold'`

And as result you the get the amount of **weight** to apply to your font (e.g. `300` or `400`).

### Font family

`fontFamily` is a function that can be used as `theme.fontFamily([type])`, where `[type]` can assume the following values:

* `'primary'`
* `'secondary'`

And as result you the fontface to apply on your *font-family* CSS rule.

## Mixins

Mixins in this context are JS functions that return CSS that might be used along with other styles. Check `theme/mixins` to see all the existing mixins.

### Usage

~~~js
import styled from 'styled-components'

const StyledComponent = styled.div`
  padding: 10px;
  font-size: ${props => props.theme.textSetting('xs').fontSize};
  ${props => props.theme.mixins.[MY_MIXIN]()}
`

const MyComponent = () => (
  <StyledComponent />
)

export default MyComponent
~~~