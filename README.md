# Neu Components

Neu components is a component library that uses Neumorphism UX.
Its built for React, using Styled Components.
This is a complete implementation of [Neu](https://github.com/amaljose96/neu) (which was built for pure JS).

To install using NPM

` npm install neu-components `

The only required parameter for Neu is hue, which defines which color should everything be based on.

To initialize the generator:
` const Neu= NeuComponents({hue:120}); `
The other parameters are:
<ul>
    <li>Background Color: This would override the hue sent. The hue would be selected based on this.</li>
    <li>Text Color: This would override the text color determined by the hue.</li>
    <li>Primary Color: This would override the primary color determined by the hue.</li>
    <li>Contrast: The contrast between the light and dark shade used in elements.</li>
    <li>Border Radius: The border radius for elements.</li>
</ul>

To use a component,
` <Neu.Button text="Login"/> `

The following components are currently from Neu Components:
1. Body
2. Button
3. Dropdown

## Changelog

#### v0.0.2
Added basic storybook, body, button and dropdown