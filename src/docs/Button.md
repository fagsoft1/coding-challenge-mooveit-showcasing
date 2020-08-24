# Button
<p>
Buttons allow users to take actions
</p>

## Import
    import {Button} from 'mooveit-library-fagsoft';

## Examples

### text
    import {Button} from 'mooveit-library-fagsoft';
    <Button text="I'm the default text"/>
<Button text="I'm the default text" name="dos" />

### disabled
    import {Button} from 'mooveit-library-fagsoft';
    <Button text="Click on Me!" disabled={true}/>
<Button text="Click on Me!" disabled={true} name="dos" />

### onClick
    import {Button} from 'mooveit-library-fagsoft';
    <Button text="Click on Me!" onClick={()=>alert('You have clicked me!')} />
<Button text="Click on Me!" onClick={onClick} name="uno" />


### themes
<p>For using your own styles:</p>
    
    import {Button, ThemeContextProvider} from 'mooveit-library-fagsoft';
    const theme = {
        palette: {
            primary: {main: 'green', contrast: 'white'},
            secondary: {main: 'blue', contrast: 'white'},
        },
    };
    <ThemeContextProvider theme={theme}>
        <Button text="Default Style!" name="one" palette="primary" />
        <Button text="Palette Primary" name="two" palette="primary" />
        <Button text="Palette Secondary" name="three" palette="secondary" />
    </ThemeContextProvider>
    
<Button text="Default Style!" name="one_1" palette="primary" />
<ThemeContextProvider theme={theme}>
    <Button text="Palette Primary" name="two_2" palette="primary" />
    <Button text="Palette Secondary" name="three_3" palette="secondary" />
</ThemeContextProvider>

### PROPS & METHODS

| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| palette    | 	"primary" or "secondary" |"primary"| Define with palette will be used |
| text    | 	string |Required| Text to display |
| disabled    | boolean |False| To enable or disable the component |
| onClick    | ((e: MouseEvent<HTMLElement, MouseEvent>) => void) or undefined || To handle onClick event |
    